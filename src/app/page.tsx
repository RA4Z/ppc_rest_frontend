import styles from "./page.module.css";

export default function Home() {
  const pages = [
    {
      nome: '',
      description: '',
      url: '',
    }
  ]

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        Olá mundo
      </div>
    </main>
  );
}
