import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page}>
      <Image
        className={styles.background}
        src="/baza-bg.png"
        alt=""
        fill
        priority
        sizes="100vw"
      />

      <div className={styles.event}>
        <Image
          className={styles.title}
          src="/title.png"
          alt="Baza Centrum"
          width={1138}
          height={161}
          priority
        />
        <Image
          className={styles.date}
          src="/date.png"
          alt=""
          width={1091}
          height={67}
          priority
        />
        <a
          className={styles.registration}
          href="https://eventree.pl/sienna/baza-centrum-2026"
        >
          <span className={styles.registrationLabel}>rejestracja</span>
        </a>
      </div>

      <Image
        className={styles.logo}
        src="/logo.png"
        alt="Baza"
        width={727}
        height={288}
        priority
      />
    </main>
  );
}
