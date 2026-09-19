# Hawa Ultra 🚀

تطبيق Next.js حديث وقوي

## المتطلبات

- Node.js 16.8 أو أعلى
- npm أو yarn أو pnpm

## كيفية التشغيل

### 1. تثبيت المكتبات
```bash
npm install
# أو
yarn install
# أو
pnpm install
```

### 2. تشغيل في وضع التطوير
```bash
npm run dev
```

ثم افتح المتصفح على `http://localhost:3000`

### 3. البناء للإنتاج
```bash
npm run build
npm start
```

## البنية

```
app/              - صفحات التطبيق (App Router)
public/           - الملفات الثابتة
next.config.js    - إعدادات Next.js
package.json      - المكتبات والإعدادات
```

## الأوامر المتاحة

- `npm run dev` - تشغيل في وضع التطوير
- `npm run build` - بناء المشروع
- `npm start` - تشغيل المشروع المبني
- `npm run lint` - فحص الأخطاء
