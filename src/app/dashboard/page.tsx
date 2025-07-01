'use client';
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./Dashboard.module.scss";

const DashboardPage: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    const user = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    if (!user) {
      router.replace('/auth');
    }
  }, [router]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Welcome to the Dashboard</h2>
    </div>
  );
};

export default DashboardPage;
