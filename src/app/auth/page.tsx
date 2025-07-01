'use client';
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Input from "@/components/Input";
import Button from "@/components/Button";
import styles from "./Auth.module.scss";
import { validatePhone } from "@/utils/validatePhone";

const AuthPage: React.FC = () => {
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!validatePhone(phone)) {
      setError("شماره موبایل معتبر وارد کنید (مثال:‌ 09123456789)");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const data = await res.json();
      if (data?.results?.[0]) {
        localStorage.setItem("user", JSON.stringify(data.results[0]));
        router.push("/dashboard");
      } else {
        setError("خطا در دریافت اطلاعات کاربر");
      }
    } catch {
      setError("خطا در ارتباط با سرور");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <h2 className={styles.title}>ورود به حساب کاربری</h2>
        <Input
          label="شماره موبایل"
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="09xxxxxxxxx"
          error={error}
          name="phone"
          type="tel"
        />
        <Button type="submit" loading={loading}>
          ورود
        </Button>
      </form>
    </div>
  );
};

export default AuthPage;
