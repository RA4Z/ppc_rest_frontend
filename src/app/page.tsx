'use client'
import Image from "next/image";
import styles from "./page.module.css";
import { get_data, update_database } from 'services/api'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <h2>PPC Rest API Frontend APP</h2>
        <Image className={styles.logo} src="/WEG.svg" alt="Logotipo da WEG" width={180} height={37} priority />
      </div>

      <div className={styles.grid}>
        <div className={styles.card} onClick={() => get_data('/wen_indicators')}>
          <h2>
            Display WEN Indicadors <span>-&gt;</span>
          </h2>
          <p>Listar todos os indicadores cadastrados na página WEN Indicators.</p>
        </div>

        <div className={styles.card} onClick={() => update_database('/update')}>
          <h2>
            Update WEN Indicadors <span>-&gt;</span>
          </h2>
          <p>Atualizar dados de WEN Indicators.</p>
        </div>

      </div>
    </main>
  );
}
