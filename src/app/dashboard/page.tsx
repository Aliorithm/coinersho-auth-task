'use client';
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./Dashboard.module.scss";

const DashboardPage: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const user = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    if (!user) {
      router.replace('/auth');
      return;
    }
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className={styles.container}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
          <span className={styles.spinner}></span>
        </div>
      </div>
    );
  }
  return (
    <div className={styles.container}>
      <h2 className={styles.title} lang="en">Welcome to the Dashboard</h2>
    </div>
  );
};

export default DashboardPage;
