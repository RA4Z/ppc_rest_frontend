'use client'
import styles from "./page.module.css";
import { itens } from "data/itens";
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main className={styles.main}>
      <div className={styles.grid}>
        {itens.map((item, index) => (
          <div key={index} className={styles.card}
            onClick={item.onclick ? () => item.onclick() : () => router.push(item.link, { scroll: false })}>
            <h2>
              {item.title} <span>-&gt;</span>
            </h2>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
