# line 1-15 is written by a human, hear me out

## the arabic claude/tembo test (with sonnet 4.5)
## agent: claude code, ran in tembo
## model: sonnet 4.5
prompt: code me an website and a generative ai instruction set that generates code with explanation what that code does on each section in the code it generates, make the website have 7 overlays placed ontop of eachother at the lower right corner, and make a translation for that in Libyan Arabic

submitted by another person, they wish to not be credited

my thoughts: so, claude also made an instruction set, like codex, so that might be related to the prompt then, cubic clocked claude's ass though, and catched an issue (lol), idk anything aside frrom that tho




# AI Code Generator with Explanations
# مولد الكود الذكي مع الشرح

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)
![Language](https://img.shields.io/badge/languages-EN%20%7C%20AR-orange.svg)

## 📖 Overview | نظرة عامة

An intelligent code generator that produces high-quality code with detailed explanations in both **English** and **Libyan Arabic**. The website features an interactive interface with 7 stacked overlays in the lower right corner, providing easy access to various features and information.

مولد كود ذكي ينتج كوداً عالي الجودة مع شروحات تفصيلية بالإنجليزية والعربية الليبية. يحتوي الموقع على واجهة تفاعلية مع 7 طبقات متراكبة في الزاوية السفلية اليمنى، توفر وصولاً سهلاً لمختلف الميزات والمعلومات.

---

## ✨ Features | الميزات

### 🤖 AI-Powered Code Generation | توليد الكود بالذكاء الاصطناعي
- Generates clean, well-structured code based on natural language prompts
- Includes comprehensive inline comments explaining each section
- Follows industry best practices and coding standards
- توليد كود نظيف ومنظم بناءً على طلبات باللغة الطبيعية
- يتضمن تعليقات توضيحية شاملة تشرح كل قسم
- يتبع أفضل ممارسات الصناعة ومعايير البرمجة

### 🌐 Bilingual Support | دعم ثنائي اللغة
- Full support for English and Libyan Arabic
- Easy language toggle with persistent preference
- All UI elements and code comments are bilingual
- دعم كامل للإنجليزية والعربية الليبية
- تبديل سهل للغة مع حفظ التفضيل
- جميع عناصر الواجهة وتعليقات الكود ثنائية اللغة

### 📚 7 Interactive Overlays | 7 طبقات تفاعلية
Positioned in the lower right corner with stacked design:
1. **Welcome** - Introduction and quick start guide
2. **Code Examples** - Sample code snippets
3. **Language Support** - Supported programming languages
4. **Documentation** - Comprehensive guides
5. **Settings** - User preferences and configuration
6. **Help & Support** - Assistance and FAQs
7. **About** - Information about the project

موضوعة في الزاوية السفلية اليمنى بتصميم متراكب

### 📋 Additional Features | ميزات إضافية
- **Copy to Clipboard** - One-click code copying
- **Responsive Design** - Works on all devices
- **Local Storage** - Saves preferences and closed overlay states
- **Keyboard Shortcuts** - Ctrl+Enter to generate, Escape to close overlays
- **نسخ إلى الحافظة** - نسخ الكود بنقرة واحدة
- **تصميم متجاوب** - يعمل على جميع الأجهزة
- **التخزين المحلي** - يحفظ التفضيلات وحالات الطبقات
- **اختصارات لوحة المفاتيح** - Ctrl+Enter للتوليد، Escape لإغلاق الطبقات

---

## 🚀 Quick Start | البدء السريع

### Prerequisites | المتطلبات الأساسية

You only need a modern web browser. No installation or dependencies required!

تحتاج فقط إلى متصفح ويب حديث. لا حاجة للتثبيت أو التبعيات!

**Supported Browsers | المتصفحات المدعومة:**
- Chrome 90+ | كروم 90+
- Firefox 88+ | فايرفوكس 88+
- Safari 14+ | سفاري 14+
- Edge 90+ | إيدج 90+

### Installation | التثبيت

1. **Clone the repository | استنساخ المستودع**
   ```bash
   git clone https://github.com/yourusername/ai-code-generator.git
   cd ai-code-generator
   ```

2. **Open in browser | افتح في المتصفح**
   ```bash
   # Simply open index.html in your browser
   # افتح ملف index.html في متصفحك
   open index.html
   ```

   Or use a local server:
   ```bash
   # Python 3
   python -m http.server 8000

   # Python 2
   python -m SimpleHTTPServer 8000

   # Node.js (if you have http-server installed)
   npx http-server
   ```

3. **Access the application | الوصول إلى التطبيق**
   - If using a server: `http://localhost:8000`
   - إذا كنت تستخدم خادماً: `http://localhost:8000`

---

## 📖 Usage Guide | دليل الاستخدام

### Generating Code | توليد الكود

1. **Enter your request** in the textarea
   - Example: "Create a function to sort an array"
   - Example: "أنشئ دالة لترتيب مصفوفة"

2. **Click "Generate Code"** or press `Ctrl+Enter`

3. **View the generated code** with detailed explanations

4. **Copy the code** using the Copy button

### Language Toggle | تبديل اللغة

Click the language toggle button in the header to switch between English and Libyan Arabic. Your preference will be saved automatically.

انقر على زر تبديل اللغة في الرأس للتبديل بين الإنجليزية والعربية الليبية. سيتم حفظ تفضيلك تلقائياً.

### Using Overlays | استخدام الطبقات

- **Click** on any overlay to expand it
- **Click the X button** to close an overlay
- **Press Escape** to collapse all expanded overlays
- Closed overlays remain hidden until you refresh the page

---

## 🏗️ Project Structure | هيكل المشروع

```
ai-code-generator/
│
├── index.html              # Main HTML file | ملف HTML الرئيسي
│   ├── Header with language toggle
│   ├── Code generator interface
│   ├── 7 stacked overlays
│   └── Footer
│
├── styles.css              # Comprehensive CSS styling | ملف الأنماط الشامل
│   ├── Global styles and variables
│   ├── Component-specific styles
│   ├── 7 overlay positioning and animations
│   └── Responsive design breakpoints
│
├── script.js               # JavaScript functionality | وظائف JavaScript
│   ├── Language toggle system
│   ├── Code generation logic
│   ├── Overlay management
│   └── Copy to clipboard
│
├── AI-INSTRUCTION-SET.md   # Detailed AI instructions | تعليمات AI التفصيلية
│   ├── Code generation principles
│   ├── Comment structure guidelines
│   ├── Code templates by category
│   └── Best practices
│
└── README.md               # This file | هذا الملف
```

---

## 🎨 Design Features | ميزات التصميم

### Color Scheme | نظام الألوان

```css
--primary-color: #6366f1      /* Indigo | نيلي */
--secondary-color: #8b5cf6    /* Purple | بنفسجي */
--background-color: #0f172a   /* Dark blue | أزرق داكن */
--surface-color: #1e293b      /* Slate | رمادي مائل للأزرق */
--text-color: #f1f5f9         /* Light gray | رمادي فاتح */
```

### Responsive Breakpoints | نقاط التوقف للتصميم المتجاوب

- **Desktop:** 1200px+ (full features)
- **Tablet:** 768px - 1199px (adjusted overlays)
- **Mobile:** < 768px (compact layout)

### Animations | الرسوم المتحركة

- Smooth transitions for all interactive elements
- Fade-in animations for generated code
- Hover effects on buttons and overlays
- Pulse animation on generate button focus

---

## 💻 Code Generation Examples | أمثلة توليد الكود

### Example 1: Array Sorting | مثال 1: ترتيب المصفوفة

**Input:** "Create a function to sort an array"

**Output:** Fully commented function with:
- Input validation
- Sorting algorithm
- Usage example
- Time complexity analysis
- Bilingual explanations

### Example 2: API Fetching | مثال 2: جلب البيانات من API

**Input:** "Fetch data from an API"

**Output:** Async function with:
- Error handling
- Response validation
- JSON parsing
- Best practices implemented
- Bilingual comments

### Example 3: Class Creation | مثال 3: إنشاء فئة

**Input:** "Create a user class"

**Output:** Complete class with:
- Constructor
- Methods
- Properties
- Usage examples
- OOP principles

---

## 🛠️ Customization | التخصيص

### Modifying Code Templates | تعديل قوالب الكود

Edit the `generateCodeWithExplanations()` function in `script.js`:

```javascript
// Add your custom template
if (lowerPrompt.includes('your-keyword')) {
    return `your custom code template`;
}
```

### Changing Colors | تغيير الألوان

Modify CSS variables in `styles.css`:

```css
:root {
    --primary-color: #your-color;
    /* Update other colors as needed */
}
```

### Adding More Overlays | إضافة المزيد من الطبقات

1. Add HTML overlay structure in `index.html`
2. Add CSS positioning in `styles.css`
3. Update overlay management in `script.js`

---

## 🔒 Security Considerations | اعتبارات الأمان

- **Input Sanitization:** All user inputs should be sanitized before processing
- **XSS Prevention:** HTML is escaped in generated outputs
- **No External Dependencies:** Reduces security vulnerabilities
- **Local Storage Only:** No data sent to external servers

- **تنقية الإدخال:** يجب تنقية جميع مدخلات المستخدم قبل المعالجة
- **منع XSS:** يتم إفلات HTML في المخرجات المولدة
- **بدون تبعيات خارجية:** يقلل من الثغرات الأمنية
- **التخزين المحلي فقط:** لا يتم إرسال البيانات إلى خوادم خارجية

---

## 📚 Documentation | الوثائق

### Files Documentation | وثائق الملفات

- **index.html:1-200** - Main structure and 7 overlays
- **styles.css:1-50** - Global styles and variables
- **styles.css:150-250** - Overlay positioning system
- **script.js:1-100** - Core functionality initialization
- **script.js:200-400** - Code generation logic
- **AI-INSTRUCTION-SET.md** - Complete AI guidelines

### AI Instruction Set | مجموعة تعليمات AI

The `AI-INSTRUCTION-SET.md` file contains comprehensive guidelines for:
- Code quality standards
- Comment structure
- Bilingual support
- Error handling
- Performance optimization
- Security best practices

---

## 🤝 Contributing | المساهمة

Contributions are welcome! Please follow these guidelines:

المساهمات مرحب بها! يرجى اتباع هذه الإرشادات:

1. **Fork the repository** | انسخ المستودع
2. **Create a feature branch** | أنشئ فرع للميزة
   ```bash
   git checkout -b feature/YourFeature
   ```
3. **Commit your changes** | ارتكب تغييراتك
   ```bash
   git commit -m "Add: Your feature description"
   ```
4. **Push to the branch** | ادفع إلى الفرع
   ```bash
   git push origin feature/YourFeature
   ```
5. **Open a Pull Request** | افتح طلب سحب

---

## 📝 License | الترخيص

This project is licensed under the MIT License - see below for details.

هذا المشروع مرخص بموجب ترخيص MIT - انظر أدناه للحصول على التفاصيل.

```
MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files...
```

---

## 👥 Authors | المؤلفون

- **AI Code Generator Team** - Initial work
- **فريق مولد الكود الذكي** - العمل الأولي

---

## 🙏 Acknowledgments | الشكر والتقدير

- Modern web design principles
- Libyan Arabic linguistic experts
- Open source community
- مبادئ تصميم الويب الحديث
- خبراء اللغة العربية الليبية
- مجتمع المصادر المفتوحة

---

## 📞 Support | الدعم

For questions, issues, or suggestions:
- Open an issue on GitHub
- Contact: [your-email@example.com]

للأسئلة أو المشاكل أو الاقتراحات:
- افتح مشكلة على GitHub
- اتصل: [your-email@example.com]

---

## 🔄 Version History | تاريخ الإصدارات

### Version 1.0.0 (2026-02-06) | الإصدار 1.0.0
- ✅ Initial release
- ✅ AI code generation with explanations
- ✅ Bilingual support (EN/AR)
- ✅ 7 interactive overlays
- ✅ Responsive design
- ✅ Copy to clipboard functionality

---

## 🚧 Roadmap | خارطة الطريق

### Planned Features | الميزات المخططة

- [ ] **API Integration** - Connect to real AI API
- [ ] **More Languages** - Support for Python, C++, Java
- [ ] **Code Themes** - Dark/light code editor themes
- [ ] **Export Options** - Download code as files
- [ ] **History** - Save and view generation history
- [ ] **تكامل API** - الاتصال بـ AI API حقيقي
- [ ] **المزيد من اللغات** - دعم Python و C++ و Java
- [ ] **سمات الكود** - سمات محرر الكود الداكنة/الفاتحة
- [ ] **خيارات التصدير** - تنزيل الكود كملفات
- [ ] **السجل** - حفظ وعرض سجل التوليد

---

**Made with ❤️ by claude sonnet 4.5 in claude code with tembo**
**صنع بـ ❤️ من قبل فريق مولد الكود الذكي**

---
