// ===========================
// JAVASCRIPT FOR AI CODE GENERATOR
// This script handles all interactive functionality including:
// - Language toggling between English and Libyan Arabic
// - Code generation with explanations
// - Overlay management (7 stacked overlays)
// - Copy to clipboard functionality
//
// جافا سكريبت لمولد الكود الذكي
// يتعامل هذا البرنامج مع جميع الوظائف التفاعلية
// ===========================

// ===========================
// WAIT FOR DOM TO LOAD
// Ensures all HTML elements are loaded before JavaScript runs
// انتظار تحميل DOM
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality once DOM is ready
    // تهيئة جميع الوظائف بمجرد جاهزية DOM
    initializeLanguageToggle();
    initializeCodeGenerator();
    initializeOverlays();
    initializeCopyButton();
});

// ===========================
// LANGUAGE TOGGLE FUNCTIONALITY
// Switches between English (LTR) and Libyan Arabic (RTL)
// وظيفة تبديل اللغة
// ===========================
function initializeLanguageToggle() {
    // Get the language toggle button element
    // الحصول على عنصر زر تبديل اللغة
    const languageToggle = document.getElementById('languageToggle');

    // Add click event listener to toggle language
    // إضافة مستمع حدث النقر لتبديل اللغة
    languageToggle.addEventListener('click', function() {
        // Toggle 'rtl' class on body element to switch between LTR and RTL
        // تبديل فئة 'rtl' على عنصر الصفحة للتبديل بين LTR و RTL
        document.body.classList.toggle('rtl');

        // Optional: Save language preference to localStorage for persistence
        // اختياري: حفظ تفضيل اللغة في localStorage للاستمرارية
        const isRTL = document.body.classList.contains('rtl');
        localStorage.setItem('language', isRTL ? 'ar' : 'en');
    });

    // Check for saved language preference on page load
    // التحقق من تفضيل اللغة المحفوظ عند تحميل الصفحة
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'ar') {
        document.body.classList.add('rtl');
    }
}

// ===========================
// CODE GENERATION FUNCTIONALITY
// Handles the AI code generation with explanations
// وظيفة توليد الكود
// ===========================
function initializeCodeGenerator() {
    // Get references to input, button, and output elements
    // الحصول على مراجع لعناصر الإدخال والزر والإخراج
    const codePrompt = document.getElementById('codePrompt');
    const generateBtn = document.getElementById('generateBtn');
    const codeOutput = document.getElementById('codeOutput');

    // Add click event to generate button
    // إضافة حدث النقر إلى زر التوليد
    generateBtn.addEventListener('click', function() {
        // Get the user's code request from textarea
        // الحصول على طلب الكود من المستخدم
        const prompt = codePrompt.value.trim();

        // Validate input: check if user entered a prompt
        // التحقق من صحة الإدخال: التأكد من أن المستخدم أدخل طلباً
        if (!prompt) {
            // Show error message if input is empty
            // عرض رسالة خطأ إذا كان الإدخال فارغاً
            const isRTL = document.body.classList.contains('rtl');
            alert(isRTL ? 'يرجى إدخال طلب الكود' : 'Please enter a code request');
            return;
        }

        // Generate code based on the prompt
        // توليد الكود بناءً على الطلب
        const generatedCode = generateCodeWithExplanations(prompt);

        // Display the generated code in the output area
        // عرض الكود المولد في منطقة الإخراج
        codeOutput.querySelector('code').textContent = generatedCode;

        // Add animation effect to output
        // إضافة تأثير الرسوم المتحركة للإخراج
        codeOutput.style.animation = 'none';
        setTimeout(() => {
            codeOutput.style.animation = 'fadeIn 0.6s ease-out';
        }, 10);
    });

    // Add Enter key support for textarea (Ctrl+Enter to generate)
    // إضافة دعم مفتاح Enter (Ctrl+Enter للتوليد)
    codePrompt.addEventListener('keydown', function(e) {
        if (e.ctrlKey && e.key === 'Enter') {
            generateBtn.click();
        }
    });
}

// ===========================
// AI CODE GENERATION LOGIC
// This function simulates AI code generation with detailed explanations
// The actual implementation would connect to a real AI API
// منطق توليد الكود بالذكاء الاصطناعي
// ===========================
function generateCodeWithExplanations(prompt) {
    // Convert prompt to lowercase for pattern matching
    // تحويل الطلب إلى أحرف صغيرة لمطابقة الأنماط
    const lowerPrompt = prompt.toLowerCase();

    // Determine the type of code to generate based on keywords
    // تحديد نوع الكود المراد توليده بناءً على الكلمات المفتاحية

    // PATTERN 1: Array sorting function
    // النمط 1: دالة ترتيب المصفوفة
    if (lowerPrompt.includes('sort') || lowerPrompt.includes('array') || lowerPrompt.includes('ترتيب') || lowerPrompt.includes('مصفوفة')) {
        return `// ===========================
// ARRAY SORTING FUNCTION
// This function sorts an array of numbers in ascending order
// دالة ترتيب المصفوفة - ترتب مصفوفة من الأرقام تصاعدياً
// ===========================

function sortArray(arr) {
    // STEP 1: Input validation
    // Check if the input is an array
    // الخطوة 1: التحقق من صحة الإدخال
    // التأكد من أن الإدخال هو مصفوفة
    if (!Array.isArray(arr)) {
        throw new Error('Input must be an array');
    }

    // STEP 2: Create a copy to avoid mutating original array
    // Using spread operator [...arr] to create shallow copy
    // الخطوة 2: إنشاء نسخة لتجنب تعديل المصفوفة الأصلية
    // استخدام عامل النشر [...arr] لإنشاء نسخة سطحية
    const sortedArr = [...arr];

    // STEP 3: Sort the array using built-in sort method
    // The compare function (a, b) => a - b ensures numeric sorting
    // Returns negative if a < b (a comes first)
    // Returns positive if a > b (b comes first)
    // Returns 0 if a === b (no change in order)
    // الخطوة 3: ترتيب المصفوفة باستخدام دالة الترتيب المدمجة
    // دالة المقارنة تضمن الترتيب الرقمي
    sortedArr.sort((a, b) => a - b);

    // STEP 4: Return the sorted array
    // الخطوة 4: إرجاع المصفوفة المرتبة
    return sortedArr;
}

// ===========================
// USAGE EXAMPLE / مثال الاستخدام
// ===========================
const numbers = [64, 34, 25, 12, 22, 11, 90];
console.log('Original array / المصفوفة الأصلية:', numbers);

const sorted = sortArray(numbers);
console.log('Sorted array / المصفوفة المرتبة:', sorted);
// Output: [11, 12, 22, 25, 34, 64, 90]

// ===========================
// TIME COMPLEXITY: O(n log n)
// The sort method typically uses QuickSort or TimSort
// التعقيد الزمني: O(n log n)
// ===========================`;
    }

    // PATTERN 2: API fetch function
    // النمط 2: دالة جلب البيانات من API
    if (lowerPrompt.includes('api') || lowerPrompt.includes('fetch') || lowerPrompt.includes('request') || lowerPrompt.includes('جلب')) {
        return `// ===========================
// ASYNC API FETCH FUNCTION
// This function fetches data from an API endpoint with error handling
// دالة جلب البيانات من API مع معالجة الأخطاء
// ===========================

async function fetchDataFromAPI(url, options = {}) {
    // STEP 1: Input validation
    // Ensure URL is provided
    // الخطوة 1: التحقق من صحة الإدخال
    // التأكد من توفير عنوان URL
    if (!url) {
        throw new Error('URL is required');
    }

    try {
        // STEP 2: Make the API request
        // Using fetch API with optional configuration
        // الخطوة 2: إجراء طلب API
        // استخدام fetch API مع التكوين الاختياري
        const response = await fetch(url, {
            method: options.method || 'GET',
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });

        // STEP 3: Check if response is successful
        // HTTP status codes 200-299 indicate success
        // الخطوة 3: التحقق من نجاح الاستجابة
        // رموز حالة HTTP من 200-299 تشير إلى النجاح
        if (!response.ok) {
            throw new Error(\`HTTP error! status: \${response.status}\`);
        }

        // STEP 4: Parse JSON response
        // Convert response body to JavaScript object
        // الخطوة 4: تحليل استجابة JSON
        // تحويل جسم الاستجابة إلى كائن JavaScript
        const data = await response.json();

        // STEP 5: Return the parsed data
        // الخطوة 5: إرجاع البيانات المحللة
        return {
            success: true,
            data: data,
            status: response.status
        };

    } catch (error) {
        // STEP 6: Error handling
        // Catch network errors, parsing errors, etc.
        // الخطوة 6: معالجة الأخطاء
        // التقاط أخطاء الشبكة وأخطاء التحليل، إلخ
        console.error('API fetch error:', error);
        return {
            success: false,
            error: error.message,
            data: null
        };
    }
}

// ===========================
// USAGE EXAMPLE / مثال الاستخدام
// ===========================
const apiUrl = 'https://api.example.com/data';

fetchDataFromAPI(apiUrl)
    .then(result => {
        if (result.success) {
            console.log('Data received / تم استلام البيانات:', result.data);
        } else {
            console.error('Error occurred / حدث خطأ:', result.error);
        }
    });

// ===========================
// BEST PRACTICES IMPLEMENTED:
// 1. Async/await for clean asynchronous code
// 2. Comprehensive error handling with try-catch
// 3. HTTP status code validation
// 4. Flexible options parameter for customization
// 5. Clear return object structure
// أفضل الممارسات المطبقة
// ===========================`;
    }

    // PATTERN 3: Class or object-oriented code
    // النمط 3: كود الفئات أو البرمجة الكائنية
    if (lowerPrompt.includes('class') || lowerPrompt.includes('object') || lowerPrompt.includes('فئة') || lowerPrompt.includes('كائن')) {
        return `// ===========================
// USER CLASS DEFINITION
// This class represents a user with properties and methods
// تعريف فئة المستخدم مع الخصائص والدوال
// ===========================

class User {
    // CONSTRUCTOR: Initializes a new user instance
    // Called automatically when creating a new User object
    // البناء: يهيئ نموذج مستخدم جديد
    constructor(name, email, age) {
        // STEP 1: Initialize instance properties
        // 'this' refers to the current instance
        // الخطوة 1: تهيئة خصائص النموذج
        this.name = name;
        this.email = email;
        this.age = age;
        this.createdAt = new Date();
        this.isActive = true;
    }

    // METHOD: Get user information as formatted string
    // Returns a readable representation of the user
    // دالة: الحصول على معلومات المستخدم كنص منسق
    getInfo() {
        return \`Name: \${this.name}
Email: \${this.email}
Age: \${this.age}
Status: \${this.isActive ? 'Active' : 'Inactive'}
Member since: \${this.createdAt.toLocaleDateString()}\`;
    }

    // METHOD: Validate user age
    // Checks if user meets minimum age requirement
    // دالة: التحقق من صحة عمر المستخدم
    isAdult() {
        // Returns true if age is 18 or greater
        // يرجع true إذا كان العمر 18 أو أكثر
        return this.age >= 18;
    }

    // METHOD: Deactivate user account
    // Sets the active status to false
    // دالة: إلغاء تنشيط حساب المستخدم
    deactivate() {
        this.isActive = false;
        console.log(\`User \${this.name} has been deactivated\`);
    }

    // METHOD: Update user email with validation
    // Updates email after checking format
    // دالة: تحديث بريد المستخدم مع التحقق
    updateEmail(newEmail) {
        // STEP 1: Validate email format using regex
        // Regular expression checks for valid email structure
        // الخطوة 1: التحقق من صيغة البريد باستخدام regex
        const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

        if (emailRegex.test(newEmail)) {
            // STEP 2: Update email if valid
            // الخطوة 2: تحديث البريد إذا كان صحيحاً
            this.email = newEmail;
            return true;
        } else {
            // STEP 3: Reject invalid email
            // الخطوة 3: رفض البريد غير الصحيح
            console.error('Invalid email format');
            return false;
        }
    }
}

// ===========================
// USAGE EXAMPLE / مثال الاستخدام
// ===========================

// Create a new user instance
// إنشاء نموذج مستخدم جديد
const user1 = new User('Ahmed Ali', 'ahmed@example.com', 25);

// Display user information
// عرض معلومات المستخدم
console.log(user1.getInfo());

// Check if user is an adult
// التحقق من أن المستخدم بالغ
console.log('Is adult? / هل بالغ؟', user1.isAdult()); // true

// Update email
// تحديث البريد
user1.updateEmail('ahmed.new@example.com');

// Deactivate user
// إلغاء تنشيط المستخدم
user1.deactivate();

// ===========================
// OOP PRINCIPLES DEMONSTRATED:
// 1. Encapsulation: Data and methods bundled together
// 2. Data validation in methods
// 3. Clear method naming and single responsibility
// 4. Use of 'this' keyword for instance context
// مبادئ البرمجة الكائنية المطبقة
// ===========================`;
    }

    // DEFAULT: Generic function template
    // الافتراضي: قالب دالة عامة
    return `// ===========================
// CUSTOM FUNCTION BASED ON YOUR REQUEST
// Generated code with explanations for: "${prompt}"
// كود مخصص بناءً على طلبك مع الشروحات
// ===========================

function processData(input) {
    // STEP 1: Input validation
    // Verify that input is provided and not null/undefined
    // الخطوة 1: التحقق من صحة الإدخال
    // التأكد من توفير الإدخال وأنه ليس null/undefined
    if (!input) {
        console.error('Invalid input provided');
        return null;
    }

    // STEP 2: Process the data
    // Perform the main operation on the input
    // الخطوة 2: معالجة البيانات
    // تنفيذ العملية الرئيسية على الإدخال
    const result = {
        originalInput: input,
        processed: true,
        timestamp: new Date().toISOString(),
        description: 'Data has been processed successfully'
    };

    // STEP 3: Log the operation
    // Record the processing for debugging/monitoring
    // الخطوة 3: تسجيل العملية
    // تسجيل المعالجة للتصحيح/المراقبة
    console.log('Processing complete / اكتملت المعالجة:', result);

    // STEP 4: Return the result
    // الخطوة 4: إرجاع النتيجة
    return result;
}

// ===========================
// USAGE EXAMPLE / مثال الاستخدام
// ===========================
const testInput = 'Sample data';
const output = processData(testInput);
console.log('Result / النتيجة:', output);

// ===========================
// NOTES / ملاحظات:
// - This is a template function that can be customized
// - Add specific logic based on your requirements
// - Always validate inputs before processing
// - هذه دالة قالب يمكن تخصيصها
// - أضف منطقاً محدداً بناءً على متطلباتك
// - تحقق دائماً من صحة المدخلات قبل المعالجة
// ===========================

// ===========================
// AI INSTRUCTION SET FOR CODE GENERATION:
//
// 1. ANALYSIS PHASE (مرحلة التحليل):
//    - Parse user request to identify programming task
//    - Determine appropriate language and paradigm
//    - Identify key requirements and constraints
//
// 2. STRUCTURE PHASE (مرحلة الهيكلة):
//    - Design function/class structure
//    - Plan input validation and error handling
//    - Outline main logic flow
//
// 3. IMPLEMENTATION PHASE (مرحلة التنفيذ):
//    - Write clean, readable code
//    - Add comprehensive inline comments
//    - Explain purpose of each code section
//
// 4. DOCUMENTATION PHASE (مرحلة التوثيق):
//    - Provide usage examples
//    - Explain time/space complexity if relevant
//    - List best practices implemented
//
// 5. BILINGUAL SUPPORT (الدعم ثنائي اللغة):
//    - Include explanations in both English and Arabic
//    - Use clear, technical terminology
//    - Ensure cultural and linguistic accessibility
// ===========================`;
}

// ===========================
// OVERLAY MANAGEMENT SYSTEM
// Handles the 7 stacked overlays in the lower right corner
// نظام إدارة الطبقات السبعة
// ===========================
function initializeOverlays() {
    // Get all overlay elements
    // الحصول على جميع عناصر الطبقات
    const overlays = document.querySelectorAll('.overlay');

    // Add click event to each overlay
    // إضافة حدث النقر لكل طبقة
    overlays.forEach((overlay, index) => {
        // FUNCTIONALITY 1: Expand overlay on click
        // When clicked, overlay expands to show full content
        // الوظيفة 1: توسيع الطبقة عند النقر
        overlay.addEventListener('click', function(e) {
            // Prevent closing when clicking inside overlay
            // منع الإغلاق عند النقر داخل الطبقة
            if (e.target.classList.contains('close-btn')) {
                return;
            }

            // Toggle expanded class for animation
            // تبديل فئة التوسع للرسوم المتحركة
            this.classList.toggle('expanded');
        });

        // FUNCTIONALITY 2: Close button handler
        // Each overlay has a close button to hide it
        // الوظيفة 2: معالج زر الإغلاق
        const closeBtn = overlay.querySelector('.close-btn');
        closeBtn.addEventListener('click', function(e) {
            // Stop event propagation to prevent overlay click
            // إيقاف انتشار الحدث لمنع نقر الطبقة
            e.stopPropagation();

            // Add hidden class with animation
            // إضافة فئة الإخفاء مع الرسوم المتحركة
            overlay.classList.add('hidden');

            // Optional: Save closed state to localStorage
            // اختياري: حفظ حالة الإغلاق في localStorage
            const overlayId = overlay.getAttribute('data-overlay');
            localStorage.setItem(\`overlay-\${overlayId}-closed\`, 'true');
        });
    });

    // FUNCTIONALITY 3: Restore overlay states from localStorage
    // Check which overlays were previously closed
    // الوظيفة 3: استعادة حالات الطبقات من localStorage
    overlays.forEach(overlay => {
        const overlayId = overlay.getAttribute('data-overlay');
        const wasClosed = localStorage.getItem(\`overlay-\${overlayId}-closed\`);
        if (wasClosed === 'true') {
            overlay.classList.add('hidden');
        }
    });

    // FUNCTIONALITY 4: Keyboard navigation for overlays
    // Allow closing overlays with Escape key
    // الوظيفة 4: التنقل بلوحة المفاتيح للطبقات
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close all expanded overlays
            // إغلاق جميع الطبقات الموسعة
            overlays.forEach(overlay => {
                overlay.classList.remove('expanded');
            });
        }
    });
}

// ===========================
// COPY TO CLIPBOARD FUNCTIONALITY
// Allows users to copy generated code with one click
// وظيفة النسخ إلى الحافظة
// ===========================
function initializeCopyButton() {
    // Get the copy button element
    // الحصول على عنصر زر النسخ
    const copyBtn = document.getElementById('copyBtn');
    const codeOutput = document.getElementById('codeOutput');

    // Add click event to copy button
    // إضافة حدث النقر لزر النسخ
    copyBtn.addEventListener('click', async function() {
        // Get the code text from output area
        // الحصول على نص الكود من منطقة الإخراج
        const codeText = codeOutput.querySelector('code').textContent;

        // Check if there's code to copy
        // التحقق من وجود كود للنسخ
        if (!codeText || codeText.trim() === '') {
            const isRTL = document.body.classList.contains('rtl');
            alert(isRTL ? 'لا يوجد كود للنسخ' : 'No code to copy');
            return;
        }

        try {
            // STEP 1: Use Clipboard API to copy text
            // Modern browsers support navigator.clipboard
            // الخطوة 1: استخدام Clipboard API لنسخ النص
            await navigator.clipboard.writeText(codeText);

            // STEP 2: Show success feedback
            // Change button text temporarily
            // الخطوة 2: عرض ملاحظات النجاح
            const isRTL = document.body.classList.contains('rtl');
            const originalText = copyBtn.innerHTML;
            copyBtn.innerHTML = isRTL ?
                '<span class="ar">تم النسخ ✓</span>' :
                '<span class="en">Copied ✓</span>';
            copyBtn.style.background = '#10b981';

            // STEP 3: Reset button after 2 seconds
            // الخطوة 3: إعادة تعيين الزر بعد ثانيتين
            setTimeout(() => {
                copyBtn.innerHTML = originalText;
                copyBtn.style.background = '';
            }, 2000);

        } catch (err) {
            // Fallback for older browsers
            // بديل للمتصفحات القديمة
            console.error('Failed to copy:', err);
            const isRTL = document.body.classList.contains('rtl');
            alert(isRTL ? 'فشل النسخ' : 'Failed to copy');
        }
    });
}

// ===========================
// UTILITY FUNCTIONS
// Helper functions for various operations
// دوال مساعدة
// ===========================

// Function to reset all overlays to visible state
// دالة لإعادة تعيين جميع الطبقات إلى الحالة المرئية
function resetOverlays() {
    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach(overlay => {
        overlay.classList.remove('hidden');
        const overlayId = overlay.getAttribute('data-overlay');
        localStorage.removeItem(\`overlay-\${overlayId}-closed\`);
    });
}

// Function to export generated code as file
// دالة لتصدير الكود المولد كملف
function exportCode(filename = 'generated-code.js') {
    const codeOutput = document.getElementById('codeOutput');
    const codeText = codeOutput.querySelector('code').textContent;

    if (!codeText) return;

    // Create a Blob with the code content
    // إنشاء Blob بمحتوى الكود
    const blob = new Blob([codeText], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);

    // Create temporary download link
    // إنشاء رابط تنزيل مؤقت
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    a.click();

    // Clean up
    // تنظيف
    URL.revokeObjectURL(url);
}

// ===========================
// CONSOLE WELCOME MESSAGE
// Display welcome message in console
// رسالة الترحيب في وحدة التحكم
// ===========================
console.log(\`
╔═══════════════════════════════════════════════╗
║   AI CODE GENERATOR / مولد الكود الذكي      ║
║   Version 1.0 | الإصدار 1.0                  ║
║   Powered by Advanced AI                      ║
║   مدعوم بالذكاء الاصطناعي المتقدم            ║
╚═══════════════════════════════════════════════╝

Features / الميزات:
✓ AI-powered code generation with explanations
✓ Bilingual support (English & Libyan Arabic)
✓ 7 interactive overlays
✓ Copy to clipboard functionality
✓ Responsive design

✓ توليد الكود بالذكاء الاصطناعي مع الشرح
✓ دعم ثنائي اللغة (الإنجليزية والعربية الليبية)
✓ 7 طبقات تفاعلية
✓ وظيفة النسخ إلى الحافظة
✓ تصميم متجاوب
\`);
