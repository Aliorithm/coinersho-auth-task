import Link from "next/link";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title} lang="en">
        Next.js Auth + Dashboard
      </h1>
      <div className={styles.links}>
        <Link href="/auth" className={`${styles.link} ${styles.linkAuth}`}>
          <span lang="fa">ورود</span>
          <span lang="en"> (Auth)</span>
        </Link>
        <Link href="/dashboard" className={`${styles.link} ${styles.linkDashboard}`}>
          <span lang="fa">داشبورد</span>
          <span lang="en"> (Dashboard)</span>
        </Link>
      </div>
      <p className={styles.desc}>
        <span lang="fa">پروژه احراز هویت ساده با </span>
        <br />
        <span lang="en">Next.js, TypeScript, SCSS Module</span>
        <br />
        <span lang="fa"> لطفاً برای شروع یکی از صفحات بالا را انتخاب کنید.</span>
      </p>
    </main>
  );
}
