# Internet Postal Service

A web application that simulates sending and receiving digital mail with interactive and visually appealing animations.

## Features

- **Compose Letters**: Write messages in a handwritten-style text area
- **Interactive Envelope Animation**: Slide button triggers letter sliding into envelope
- **3D Envelope Effects**: Realistic envelope closing with proper flap rotation and perspective
- **Postmark Stamping**: Animated postmark stamp appears after envelope closes
- **Shareable Links**: Letters are encoded in URLs and work across all devices
- **Recipient View**: Opens with animated envelope that can be clicked to reveal the letter

## How to Use

### Sending a Letter

1. Open the application in your web browser
2. Type your message in the text area (handwritten style will be applied)
3. Click and drag the "Slide to Send" button to the right
4. Watch the letter slide into the envelope
5. See the envelope close and get stamped with a postmark
6. Copy the shareable link and send it to your recipient

### Receiving a Letter

1. Open the shared link in any web browser
2. See the sealed envelope with the postmark
3. Click "Open Letter" to see the opening animation
4. Read the message in handwritten style

## Technical Details

- Pure HTML, CSS, and JavaScript (no frameworks required)
- Responsive design works on desktop, tablet, and mobile
- URL-based message encoding for easy sharing
- CSS 3D transforms for realistic envelope animations
- Touch and mouse support for slide interaction

## File Structure

- `index.html` - Main application structure
- `styles.css` - Styling and animations
- `script.js` - Application logic and interactivity

## Running the Application

Simply open `index.html` in a web browser, or serve it with any static file server.
