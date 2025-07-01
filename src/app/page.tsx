import Link from "next/link";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>
        Next.js Auth + Dashboard MVP
      </h1>
      <div className={styles.links}>
        <Link href="/auth" className={`${styles.link} ${styles.linkAuth}`}>
          ورود (Auth)
        </Link>
        <Link href="/dashboard" className={`${styles.link} ${styles.linkDashboard}`}>
          داشبورد (Dashboard)
        </Link>
      </div>
      <p className={styles.desc}>
        پروژه احراز هویت ساده با Next.js، TypeScript و SCSS Module<br />
        لطفاً برای شروع یکی از صفحات بالا را انتخاب کنید.
      </p>
    </main>
  );
}
