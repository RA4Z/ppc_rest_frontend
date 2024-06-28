'use client'
import styles from './SideBar.module.scss'
import { Menu } from 'antd';
import { useRouter } from 'next/navigation'
import { items } from './items';
import { update_database } from 'services/functions';

export default function SideBar() {
    const router = useRouter()
    function clicou(e: { key: string }) {
        switch (e.key) {
            case 'WenIndicators_All_Update':
                return update_database('/update')
            case 'WenIndicators_List_Display':
                return router.push('/WenIndicators', { scroll: false })
            default:
                return
        }
    }
    return (
        <Menu
            className={styles.side}
            onClick={clicou}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items} />
    )
}