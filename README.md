# Next.js Auth + Dashboard

این پروژه یک سیستم احراز هویت ساده با Next.js (App Router)، TypeScript و SCSS Module است.

## Features
- صفحه ورود با اعتبارسنجی شماره موبایل ایرانی
- دریافت کاربر تصادفی از API و ذخیره در localStorage
- ریدایرکت به داشبورد پس از ورود موفق
- صفحه داشبورد محافظت‌شده (redirect در صورت عدم ورود)
- کامپوننت‌های قابل استفاده مجدد Input و Button
- استایل‌دهی با SCSS Module و رعایت ریسپانسیو بودن

## Project Structure
```
/app
  /auth
    page.tsx
    Auth.module.scss
  /dashboard
    page.tsx
    Dashboard.module.scss
/components
  Input.tsx
  Input.module.scss
  Button.tsx
  Button.module.scss
/utils
  validatePhone.ts
```

## Development Steps (Checklist)
- [x] نصب sass و راه‌اندازی SCSS Module
- [x] ساخت فایل globals.scss و ایمپورت آن در layout
- [x] ساخت پوشه‌ها و فایل‌های اصلی پروژه طبق ساختار بالا
- [x] ساخت کامپوننت Input با قابلیت نمایش خطا و استایل ماژولار
- [x] ساخت کامپوننت Button با حالت loading و disabled و استایل ماژولار
- [x] ساخت helper اعتبارسنجی شماره موبایل ایرانی (validatePhone)
- [x] پیاده‌سازی صفحه /auth (فرم، ولیدیشن، ذخیره کاربر، ریدایرکت)
- [x] پیاده‌سازی صفحه /dashboard (چک کاربر، ریدایرکت، پیام خوش‌آمدگویی)
- [x] ریسپانسیو و تمیز کردن کد و استایل‌ها
- [x] تست نهایی و اطمینان از کارکرد صحیح
