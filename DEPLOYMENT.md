# دليل النشر (Deployment Guide)

## نشر على Vercel

Vercel هي المنصة المثالية لنشر تطبيقات Next.js.

### الخطوات:

#### 1. ربط المستودع بـ Vercel
1. اذهب إلى [vercel.com](https://vercel.com)
2. اضغط على **"Add New" → "Project"**
3. اختر المستودع `hawa-ultra`
4. اضغط **"Import"**

#### 2. إعدادات البناء
- **Framework Preset:** Next.js
- **Build Command:** `next build` (افتراضي)
- **Output Directory:** `.next` (افتراضي)

#### 3. إضافة المتغيرات البيئية (إن وجدت)
إذا كان لديك متغيرات بيئية، أضفها في:
`Settings → Environment Variables`

#### 4. النشر
اضغط **"Deploy"** وسيتم نشر المشروع تلقائياً!

---

## ربط الدومين المخصص (hawa-ultra.com)

### الخطوة 1: شراء الدومين
- اشتر الدومين من أي مزود (GoDaddy, Namecheap, إلخ)

### الخطوة 2: ربط الدومين بـ Vercel
1. في لوحة تحكم Vercel، اذهب إلى المشروع
2. انقر على **"Settings" → "Domains"**
3. اضغط **"Add Domain"**
4. أدخل `hawa-ultra.com`

### الخطوة 3: تحديث DNS
Vercel سيعطيك تعليمات DNS مخصصة. أضفها في لوحة تحكم الدومين:

```
Name Servers (NS):
- ns1.vercel.com
- ns2.vercel.com
```

أو استخدم **CNAME** إذا لم تستطع تغيير NS:
```
CNAME: cname.vercel.com
```

### الخطوة 4: انتظر التحديث
قد يستغرق التحديث من 24 إلى 48 ساعة.

---

## النشر التلقائي

كل مرة تدفع (push) التغييرات إلى `main`:
1. Vercel ستكتشف التغييرات تلقائياً
2. ستقوم بـ Build والنشر
3. سيتم تحديث الموقع على hawa-ultra.com

---

## الأوامر الأخرى

```bash
# البناء المحلي
npm run build

# اختبار النسخة المبنية
npm run start

# الفحص (Lint)
npm run lint
```

---

## استكشاف الأخطاء

### الموقع لا يفتح بعد النشر
- تأكد من أن DNS محدث (قد يستغرق حتى 48 ساعة)
- تحقق من سجلات البناء في Vercel

### خطأ في البناء
- اضغط على الـ build الفاشل في Vercel
- اقرأ الأخطاء بعناية
- أصلح الأخطاء وادفع تحديثاً جديداً

### إعادة بناء يدوي
في Vercel: **"Deployments" → اختر الـ deployment → "Redeploy"**

---

## المراجع

- [Vercel Docs](https://vercel.com/docs)
- [Next.js Deployment](https://nextjs.org/learn/basics/deploying-nextjs-app)
- [DNS Setup Guide](https://vercel.com/docs/concepts/projects/domains/add-a-domain)
