// DOM Elements
const composeView = document.getElementById('compose-view');
const recipientView = document.getElementById('recipient-view');
const messageInput = document.getElementById('message-input');
const slideButton = document.getElementById('slide-button');
const envelope = document.getElementById('envelope');
const postmark = document.getElementById('postmark');
const postmarkDate = document.getElementById('postmark-date');
const shareModal = document.getElementById('share-modal');
const shareLink = document.getElementById('share-link');
const copyButton = document.getElementById('copy-button');
const closeModalButton = document.getElementById('close-modal');
const openButton = document.getElementById('open-button');
const envelopeDisplay = document.getElementById('envelope-display');
const letterDisplay = document.getElementById('letter-display');
const letterContent = document.getElementById('letter-content');
const postmarkDateReceived = document.getElementById('postmark-date-received');

// State
let isDragging = false;
let startX = 0;
let currentX = 0;

// Initialize the app
function init() {
    // Check if we're viewing a shared letter
    const urlParams = new URLSearchParams(window.location.search);
    const encodedMessage = urlParams.get('m');
    const timestamp = urlParams.get('t');

    if (encodedMessage) {
        showRecipientView(encodedMessage, timestamp);
    } else {
        showComposeView();
    }

    // Event listeners
    messageInput.addEventListener('input', handleMessageInput);
    slideButton.addEventListener('mousedown', handleSlideStart);
    slideButton.addEventListener('touchstart', handleSlideStart);
    document.addEventListener('mousemove', handleSlideMove);
    document.addEventListener('touchmove', handleSlideMove);
    document.addEventListener('mouseup', handleSlideEnd);
    document.addEventListener('touchend', handleSlideEnd);
    copyButton.addEventListener('click', handleCopyLink);
    closeModalButton.addEventListener('click', handleCloseModal);
    openButton.addEventListener('click', handleOpenEnvelope);

    // Logo click handler
    document.querySelector('.logo').addEventListener('click', (e) => {
        e.preventDefault();
        window.history.pushState({}, '', '/');
        showComposeView();
    });
}

// Show compose view
function showComposeView() {
    composeView.classList.add('active');
    recipientView.classList.remove('active');
    messageInput.value = '';
    slideButton.disabled = true;
    resetEnvelope();
}

// Show recipient view
function showRecipientView(encodedMessage, timestamp) {
    composeView.classList.remove('active');
    recipientView.classList.add('active');

    // Decode message
    try {
        const decodedMessage = decodeURIComponent(atob(encodedMessage));
        letterContent.textContent = decodedMessage;

        // Set postmark date
        if (timestamp) {
            const date = new Date(parseInt(timestamp));
            const formattedDate = formatDate(date);
            postmarkDateReceived.textContent = formattedDate;
        }
    } catch (error) {
        letterContent.textContent = 'Error: Unable to decode the message.';
    }
}

// Handle message input
function handleMessageInput() {
    const hasContent = messageInput.value.trim().length > 0;
    slideButton.disabled = !hasContent;
}

// Handle slide start
function handleSlideStart(e) {
    if (slideButton.disabled) return;

    isDragging = true;
    startX = e.type === 'mousedown' ? e.clientX : e.touches[0].clientX;
    currentX = startX;
    slideButton.style.transition = 'none';
}

// Handle slide move
function handleSlideMove(e) {
    if (!isDragging) return;

    e.preventDefault();
    const clientX = e.type === 'mousemove' ? e.clientX : e.touches[0].clientX;
    currentX = clientX;

    const deltaX = currentX - startX;
    const maxSlide = slideButton.offsetWidth + 50;

    if (deltaX > 0 && deltaX <= maxSlide) {
        slideButton.style.transform = `translateX(${deltaX}px)`;
    }

    // Trigger send if slid far enough
    if (deltaX >= maxSlide * 0.8) {
        handleSlideEnd();
        sendLetter();
    }
}

// Handle slide end
function handleSlideEnd() {
    if (!isDragging) return;

    isDragging = false;
    const deltaX = currentX - startX;
    const maxSlide = slideButton.offsetWidth + 50;

    // Reset if not slid far enough
    if (deltaX < maxSlide * 0.8) {
        slideButton.style.transition = 'transform 0.3s ease';
        slideButton.style.transform = 'translateX(0)';
    }
}

// Send the letter
async function sendLetter() {
    const message = messageInput.value.trim();
    if (!message) return;

    // Disable interactions
    slideButton.disabled = true;
    messageInput.disabled = true;

    // Start animations
    slideButton.classList.add('sliding');

    // Wait a bit, then slide letter into envelope
    setTimeout(() => {
        const letterPaper = document.querySelector('.letter-paper');
        letterPaper.classList.add('animate-slide-out');
    }, 500);

    // Wait for letter to slide in, then close envelope
    setTimeout(() => {
        envelope.classList.add('closing');
    }, 2000);

    // Wait for envelope to close, then stamp postmark
    setTimeout(() => {
        postmark.classList.remove('hidden');
        const now = new Date();
        postmarkDate.textContent = formatDate(now);

        setTimeout(() => {
            postmark.classList.add('show');
        }, 100);
    }, 2800);

    // Show share modal after all animations
    setTimeout(() => {
        showShareModal(message);
    }, 3800);
}

// Format date for postmark
function formatDate(date) {
    const month = date.toLocaleString('en-US', { month: 'short' }).toUpperCase();
    const day = date.getDate();
    const year = date.getFullYear();
    return `${month} ${day} ${year}`;
}

// Show share modal
function showShareModal(message) {
    // Encode message in URL
    const encoded = btoa(encodeURIComponent(message));
    const timestamp = Date.now();
    const url = `${window.location.origin}${window.location.pathname}?m=${encoded}&t=${timestamp}`;

    shareLink.value = url;
    shareModal.classList.remove('hidden');
}

// Handle copy link
function handleCopyLink() {
    shareLink.select();
    shareLink.setSelectionRange(0, 99999); // For mobile devices

    try {
        document.execCommand('copy');
        copyButton.textContent = 'Copied!';
        setTimeout(() => {
            copyButton.textContent = 'Copy Link';
        }, 2000);
    } catch (err) {
        // Fallback for modern browsers
        navigator.clipboard.writeText(shareLink.value).then(() => {
            copyButton.textContent = 'Copied!';
            setTimeout(() => {
                copyButton.textContent = 'Copy Link';
            }, 2000);
        });
    }
}

// Handle close modal
function handleCloseModal() {
    shareModal.classList.add('hidden');
    // Reset for new letter
    setTimeout(() => {
        window.location.href = '/';
    }, 300);
}

// Handle open envelope
function handleOpenEnvelope() {
    openButton.disabled = true;

    // Fade out button
    openButton.style.opacity = '0';
    openButton.style.transition = 'opacity 0.3s ease';

    // Start opening animation
    setTimeout(() => {
        const envelopeElement = envelopeDisplay.querySelector('.envelope');
        envelopeElement.classList.remove('received');
        envelopeElement.classList.add('opening');
    }, 300);

    // Fade out envelope, show letter
    setTimeout(() => {
        envelopeDisplay.classList.add('fade-out');
    }, 1300);

    setTimeout(() => {
        envelopeDisplay.style.display = 'none';
        letterDisplay.classList.remove('hidden');
    }, 1800);
}

// Reset envelope for new letter
function resetEnvelope() {
    envelope.classList.remove('closing');
    postmark.classList.remove('show');
    postmark.classList.add('hidden');

    const letterPaper = document.querySelector('.letter-paper');
    letterPaper.classList.remove('animate-slide-out');

    slideButton.classList.remove('sliding');
    slideButton.style.transform = '';
    slideButton.style.transition = '';

    messageInput.disabled = false;
}

// Start the app
init();
