export function validatePhone(phone: string): boolean {
  const enPhone = faToEnDigits(phone);
  return /^09\d{9}$/.test(enPhone);
}

// convert persian digits to english digits
function faToEnDigits(str: string): string {
  return str.replace(/[۰-۹]/g, d => String("۰۱۲۳۴۵۶۷۸۹".indexOf(d)));
}
