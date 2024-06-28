import { Divider } from 'antd';
import styles from './Header.module.scss'
import Image from "next/image";
import Link from 'next/link';
import SideBar from 'components/SideBar';

export default function Header() {
    return (
        <header className={styles.head}>
            <Link href={'/'}>
                <div className={styles.center}>
                    <h2>PPC Rest API Frontend APP</h2>
                    <Image className={styles.logo} src="/WEG.svg" alt="Logotipo da WEG" width={180} height={37} priority />
                </div>
            </Link>
            <Divider />
        </header>
    )
}