# AI Code Generator - Instruction Set
# مجموعة تعليمات مولد الكود الذكي

## Overview | نظرة عامة

This document outlines the comprehensive instruction set used by the AI Code Generator to produce high-quality code with detailed explanations in both English and Libyan Arabic.

هذا المستند يوضح مجموعة التعليمات الشاملة المستخدمة من قبل مولد الكود الذكي لإنتاج كود عالي الجودة مع شروحات تفصيلية بالإنجليزية والعربية الليبية.

---

## Core Principles | المبادئ الأساسية

### 1. Code Quality | جودة الكود

**INSTRUCTION:** Generate clean, readable, and maintainable code following industry best practices.

**التعليمات:** توليد كود نظيف وقابل للقراءة والصيانة يتبع أفضل ممارسات الصناعة.

**Implementation Details:**
- Use descriptive variable and function names
- Follow consistent indentation (2 or 4 spaces)
- Avoid deeply nested code blocks
- Keep functions focused on single responsibilities
- Use modern language features and syntax

**تفاصيل التنفيذ:**
- استخدام أسماء وصفية للمتغيرات والدوال
- اتباع مسافات بادئة متسقة (2 أو 4 مسافات)
- تجنب كتل الكود المتداخلة بشكل عميق
- الحفاظ على تركيز الدوال على مسؤوليات واحدة
- استخدام ميزات وصيغة اللغة الحديثة

---

### 2. Comprehensive Explanations | الشروحات الشاملة

**INSTRUCTION:** Add detailed inline comments explaining the purpose and functionality of each code section.

**التعليمات:** إضافة تعليقات توضيحية مفصلة تشرح الغرض والوظيفة لكل قسم من الكود.

**Comment Structure:**
```javascript
// ===========================
// SECTION TITLE IN ENGLISH
// Brief description of what this section does
// عنوان القسم بالعربية
// وصف مختصر لما يفعله هذا القسم
// ===========================

// STEP 1: Description of first step
// الخطوة 1: وصف الخطوة الأولى
[code here]

// STEP 2: Description of second step
// الخطوة 2: وصف الخطوة الثانية
[code here]
```

---

### 3. Bilingual Support | الدعم ثنائي اللغة

**INSTRUCTION:** Provide all explanations, comments, and documentation in both English and Libyan Arabic dialect.

**التعليمات:** توفير جميع الشروحات والتعليقات والوثائق بالإنجليزية واللهجة العربية الليبية.

**Language Guidelines:**
- **English:** Use clear, technical terminology
- **Libyan Arabic:** Use accessible, everyday dialect while maintaining technical accuracy
- Place English text first, followed by Arabic
- Ensure both versions convey the same meaning

**إرشادات اللغة:**
- **الإنجليزية:** استخدام مصطلحات تقنية واضحة
- **العربية الليبية:** استخدام لهجة يومية سهلة الفهم مع الحفاظ على الدقة التقنية
- وضع النص الإنجليزي أولاً، يليه العربي
- التأكد من أن النسختين تنقلان نفس المعنى

---

## Code Generation Process | عملية توليد الكود

### Phase 1: Request Analysis | المرحلة 1: تحليل الطلب

**INSTRUCTION:** Thoroughly analyze the user's request to understand requirements and context.

**التعليمات:** تحليل طلب المستخدم بشكل شامل لفهم المتطلبات والسياق.

**Analysis Steps:**

1. **Identify the Programming Task**
   - What type of functionality is requested?
   - What is the primary goal of the code?

   **تحديد مهمة البرمجة**
   - ما نوع الوظيفة المطلوبة؟
   - ما هو الهدف الأساسي للكود؟

2. **Determine the Appropriate Language**
   - JavaScript, Python, C++, etc.
   - Based on context clues in the request

   **تحديد اللغة المناسبة**
   - جافا سكريبت، بايثون، سي++، إلخ
   - بناءً على قرائن السياق في الطلب

3. **Identify Key Requirements**
   - Input/output specifications
   - Performance constraints
   - Edge cases to handle

   **تحديد المتطلبات الرئيسية**
   - مواصفات الإدخال/الإخراج
   - قيود الأداء
   - الحالات الحدية للتعامل معها

4. **Extract Keywords and Patterns**
   - Sort, fetch, API, class, function, etc.
   - Map keywords to code templates

   **استخراج الكلمات المفتاحية والأنماط**
   - ترتيب، جلب، API، فئة، دالة، إلخ
   - ربط الكلمات المفتاحية بقوالب الكود

---

### Phase 2: Structure Design | المرحلة 2: تصميم الهيكل

**INSTRUCTION:** Design the overall structure of the code before implementation.

**التعليمات:** تصميم الهيكل العام للكود قبل التنفيذ.

**Design Elements:**

1. **Function/Class Architecture**
   ```
   - Main function name and purpose
   - Parameters and their types
   - Return value and type
   - Helper functions if needed
   ```

   **هندسة الدالة/الفئة**
   ```
   - اسم والغرض من الدالة الرئيسية
   - المعاملات وأنواعها
   - القيمة المرجعة ونوعها
   - دوال مساعدة إذا لزم الأمر
   ```

2. **Error Handling Strategy**
   - Input validation
   - Try-catch blocks
   - Error messages

   **استراتيجية معالجة الأخطاء**
   - التحقق من صحة الإدخال
   - كتل try-catch
   - رسائل الخطأ

3. **Logic Flow**
   - Step-by-step execution order
   - Conditional branches
   - Loops and iterations

   **تدفق المنطق**
   - ترتيب التنفيذ خطوة بخطوة
   - الفروع الشرطية
   - الحلقات والتكرارات

---

### Phase 3: Implementation | المرحلة 3: التنفيذ

**INSTRUCTION:** Write the actual code following the designed structure with comprehensive inline comments.

**التعليمات:** كتابة الكود الفعلي متبعاً الهيكل المصمم مع تعليقات توضيحية شاملة.

**Implementation Rules:**

1. **Comment Every Section**
   - Add section headers with separators
   - Explain the purpose before the code
   - Include bilingual descriptions

   **التعليق على كل قسم**
   - إضافة رؤوس الأقسام مع فواصل
   - شرح الغرض قبل الكود
   - تضمين أوصاف ثنائية اللغة

2. **Explain Complex Logic**
   - Why this approach was chosen
   - How the algorithm works
   - What each condition checks

   **شرح المنطق المعقد**
   - لماذا تم اختيار هذا النهج
   - كيف تعمل الخوارزمية
   - ما الذي يتحقق منه كل شرط

3. **Add Step-by-Step Comments**
   ```javascript
   // STEP 1: Validate input
   // الخطوة 1: التحقق من صحة الإدخال
   if (!input) return null;

   // STEP 2: Process data
   // الخطوة 2: معالجة البيانات
   const result = processData(input);

   // STEP 3: Return result
   // الخطوة 3: إرجاع النتيجة
   return result;
   ```

4. **Include Technical Details**
   - Time complexity (O notation)
   - Space complexity
   - Edge cases handled

   **تضمين التفاصيل التقنية**
   - التعقيد الزمني (الترميز O)
   - التعقيد المكاني
   - الحالات الحدية المتعامل معها

---

### Phase 4: Documentation | المرحلة 4: التوثيق

**INSTRUCTION:** Provide comprehensive documentation including usage examples and best practices.

**التعليمات:** توفير وثائق شاملة تشمل أمثلة الاستخدام وأفضل الممارسات.

**Documentation Components:**

1. **Usage Examples**
   ```javascript
   // ===========================
   // USAGE EXAMPLE / مثال الاستخدام
   // ===========================
   const input = [1, 2, 3];
   const result = myFunction(input);
   console.log(result); // Output: ...
   ```

2. **Best Practices Section**
   - List of best practices implemented
   - Coding standards followed
   - Security considerations

   **قسم أفضل الممارسات**
   - قائمة بأفضل الممارسات المطبقة
   - معايير البرمجة المتبعة
   - الاعتبارات الأمنية

3. **Performance Notes**
   - Time complexity analysis
   - Memory usage considerations
   - Optimization opportunities

   **ملاحظات الأداء**
   - تحليل التعقيد الزمني
   - اعتبارات استخدام الذاكرة
   - فرص التحسين

---

## Code Templates by Category | قوالب الكود حسب الفئة

### Template 1: Array Operations | العمليات على المصفوفات

**KEYWORDS:** sort, filter, map, array, list, ترتيب, مصفوفة

**TEMPLATE STRUCTURE:**
```javascript
// Function declaration with descriptive name
function operationName(array) {
    // Input validation
    // Error handling
    // Main operation logic
    // Return result
}

// Usage example
// Performance notes
```

**USE CASES:**
- Sorting arrays
- Filtering elements
- Mapping transformations
- Reducing values

---

### Template 2: Asynchronous Operations | العمليات غير المتزامنة

**KEYWORDS:** async, await, fetch, api, promise, ajax, جلب, طلب

**TEMPLATE STRUCTURE:**
```javascript
// Async function with error handling
async function fetchOperation(url) {
    try {
        // API call
        // Response validation
        // Data parsing
        // Return data
    } catch (error) {
        // Error handling
    }
}

// Usage with .then() or await
```

**USE CASES:**
- API calls
- Database queries
- File operations
- Network requests

---

### Template 3: Object-Oriented Code | الكود الكائني

**KEYWORDS:** class, object, constructor, method, فئة, كائن

**TEMPLATE STRUCTURE:**
```javascript
// Class definition
class ClassName {
    // Constructor
    constructor(params) {
        // Initialize properties
    }

    // Methods
    methodName() {
        // Method logic
    }
}

// Instantiation and usage
```

**USE CASES:**
- Data models
- Encapsulation
- Inheritance
- Polymorphism

---

### Template 4: Validation Functions | دوال التحقق

**KEYWORDS:** validate, check, verify, test, تحقق, فحص

**TEMPLATE STRUCTURE:**
```javascript
// Validation function
function validateInput(input) {
    // Type checking
    // Format validation
    // Range checking
    // Return boolean or throw error
}
```

**USE CASES:**
- Email validation
- Password strength
- Data format checking
- Input sanitization

---

### Template 5: Utility Functions | الدوال المساعدة

**KEYWORDS:** helper, utility, format, convert, مساعدة, تحويل

**TEMPLATE STRUCTURE:**
```javascript
// Utility function
function utilityName(input) {
    // Transformation logic
    // Return transformed value
}
```

**USE CASES:**
- Date formatting
- String manipulation
- Number conversions
- Data transformations

---

## Error Handling Guidelines | إرشادات معالجة الأخطاء

### 1. Input Validation | التحقق من صحة الإدخال

**INSTRUCTION:** Always validate inputs before processing.

**التعليمات:** التحقق دائماً من صحة المدخلات قبل المعالجة.

```javascript
// STEP 1: Check if input exists
// الخطوة 1: التحقق من وجود الإدخال
if (!input) {
    throw new Error('Input is required');
}

// STEP 2: Validate input type
// الخطوة 2: التحقق من نوع الإدخال
if (typeof input !== 'string') {
    throw new Error('Input must be a string');
}

// STEP 3: Validate input format
// الخطوة 3: التحقق من صيغة الإدخال
if (!isValidFormat(input)) {
    throw new Error('Invalid input format');
}
```

---

### 2. Try-Catch Blocks | كتل Try-Catch

**INSTRUCTION:** Use try-catch for operations that may fail.

**التعليمات:** استخدام try-catch للعمليات التي قد تفشل.

```javascript
try {
    // STEP 1: Attempt operation
    // الخطوة 1: محاولة العملية
    const result = riskyOperation();

    // STEP 2: Process result
    // الخطوة 2: معالجة النتيجة
    return processResult(result);

} catch (error) {
    // STEP 3: Handle error
    // الخطوة 3: معالجة الخطأ
    console.error('Operation failed:', error);
    return null;
}
```

---

### 3. Error Messages | رسائل الخطأ

**INSTRUCTION:** Provide clear, actionable error messages.

**التعليمات:** توفير رسائل خطأ واضحة وقابلة للتنفيذ.

**Good Error Message:**
```javascript
throw new Error('Email validation failed: Invalid format. Expected: user@domain.com');
// رسالة خطأ جيدة: فشل التحقق من البريد: صيغة غير صحيحة. المتوقع: user@domain.com
```

**Bad Error Message:**
```javascript
throw new Error('Error'); // Too vague / غامض جداً
```

---

## Performance Optimization | تحسين الأداء

### 1. Time Complexity | التعقيد الزمني

**INSTRUCTION:** Always consider and document time complexity.

**التعليمات:** دائماً ضع في الاعتبار ووثق التعقيد الزمني.

```javascript
// ===========================
// TIME COMPLEXITY: O(n log n)
// This function uses QuickSort algorithm
// التعقيد الزمني: O(n log n)
// تستخدم هذه الدالة خوارزمية QuickSort
// ===========================
function efficientSort(arr) {
    return arr.sort((a, b) => a - b);
}
```

---

### 2. Memory Efficiency | كفاءة الذاكرة

**INSTRUCTION:** Use memory-efficient approaches when possible.

**التعليمات:** استخدام نهج فعال للذاكرة عندما يكون ذلك ممكناً.

```javascript
// GOOD: Creates shallow copy (efficient)
// جيد: ينشئ نسخة سطحية (فعال)
const newArr = [...oldArr];

// AVOID: Creates unnecessary intermediate arrays
// تجنب: ينشئ مصفوفات وسيطة غير ضرورية
const result = arr.map(...).filter(...).reduce(...);
```

---

## Security Best Practices | أفضل ممارسات الأمان

### 1. Input Sanitization | تنقية الإدخال

**INSTRUCTION:** Sanitize all user inputs to prevent injection attacks.

**التعليمات:** تنقية جميع مدخلات المستخدم لمنع هجمات الحقن.

```javascript
// STEP 1: Escape HTML characters
// الخطوة 1: إفلات أحرف HTML
function escapeHTML(str) {
    return str.replace(/[&<>"']/g, (char) => {
        const escapeChars = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        };
        return escapeChars[char];
    });
}
```

---

### 2. Sensitive Data Handling | التعامل مع البيانات الحساسة

**INSTRUCTION:** Never log or expose sensitive information.

**التعليمات:** لا تسجل أو تكشف أبداً المعلومات الحساسة.

```javascript
// GOOD: Hide sensitive data
// جيد: إخفاء البيانات الحساسة
console.log('User logged in:', { username: user.name });

// BAD: Exposes password
// سيء: يكشف كلمة المرور
console.log('User data:', user); // Contains user.password
```

---

## Testing Guidelines | إرشادات الاختبار

### 1. Unit Tests | اختبارات الوحدة

**INSTRUCTION:** Include test cases in documentation when appropriate.

**التعليمات:** تضمين حالات الاختبار في الوثائق عند الاقتضاء.

```javascript
// ===========================
// TEST CASES / حالات الاختبار
// ===========================

// Helper function for deep array comparison
// دالة مساعدة للمقارنة العميقة للمصفوفات
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    return arr1.every((value, index) => value === arr2[index]);
}

// Test 1: Normal input
// الاختبار 1: إدخال عادي
console.assert(arraysEqual(sort([3,1,2]), [1,2,3]));

// Test 2: Empty array
// الاختبار 2: مصفوفة فارغة
console.assert(arraysEqual(sort([]), []));

// Test 3: Single element
// الاختبار 3: عنصر واحد
console.assert(arraysEqual(sort([5]), [5]));
```

---

## Accessibility Guidelines | إرشادات إمكانية الوصول

### 1. Code Readability | قابلية قراءة الكود

**INSTRUCTION:** Write code that is accessible to developers of all skill levels.

**التعليمات:** كتابة كود يمكن لمطورين من جميع مستويات المهارة الوصول إليه.

- Use descriptive names (استخدام أسماء وصفية)
- Avoid abbreviations (تجنب الاختصارات)
- Keep functions short (الحفاظ على الدوال قصيرة)
- One purpose per function (غرض واحد لكل دالة)

---

### 2. Bilingual Accessibility | إمكانية الوصول ثنائية اللغة

**INSTRUCTION:** Ensure both English and Libyan Arabic speakers can understand the code.

**التعليمات:** التأكد من أن المتحدثين بالإنجليزية والعربية الليبية يمكنهم فهم الكود.

- Use simple, clear language (استخدام لغة بسيطة وواضحة)
- Avoid idioms and slang (تجنب التعابير والعامية)
- Consistent terminology (مصطلحات متسقة)
- Cultural sensitivity (حساسية ثقافية)

---

## Summary | الملخص

This instruction set guides the AI Code Generator to produce:

1. **Clean, readable code** following best practices
2. **Comprehensive explanations** for every section
3. **Bilingual support** in English and Libyan Arabic
4. **Security-conscious** implementations
5. **Performance-optimized** solutions
6. **Well-documented** with examples and notes

تقود مجموعة التعليمات هذه مولد الكود الذكي لإنتاج:

1. **كود نظيف وقابل للقراءة** يتبع أفضل الممارسات
2. **شروحات شاملة** لكل قسم
3. **دعم ثنائي اللغة** بالإنجليزية والعربية الليبية
4. **تطبيقات واعية بالأمان**
5. **حلول محسنة للأداء**
6. **موثق جيداً** مع أمثلة وملاحظات

---

**Generated by AI Code Generator | تم التوليد بواسطة مولد الكود الذكي**
**Version 1.0 | الإصدار 1.0**
