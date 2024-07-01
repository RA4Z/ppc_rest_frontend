'use client'
import styles from './SideBar.module.scss'
import { Menu, notification } from 'antd';
import { useRouter } from 'next/navigation'
import { items } from './items';
import { update_database } from 'services/functions';
import type { NotificationArgsProps } from 'antd';

type NotificationPlacement = NotificationArgsProps['placement'];

export default function SideBar() {
    const router = useRouter()

    const openNotification = (placement: NotificationPlacement, title: string, content: string) => {
        notification.open({
            message: title,
            description: content,
            placement,
        });
    };

    async function clicou(e: { key: string }) {
        switch (e.key) {
            case 'WenIndicators_All_Update':
                const result = await update_database('/update')
                if (result) {
                    return openNotification('bottom', 'Dados Atualizados', 'Os dados foram atualizados com sucesso no servidor PCP!')
                } else {
                    return openNotification('bottom', 'Erro Inesperado', 'Ocorreu algum erro ao tentar atualizar os dados! Tente novamente mais tarde!')
                }
                
            default:
                return router.push('/' + e.key.replaceAll('_', '/'), { scroll: false })
        }
    }
    return (
        <>
            <Menu
                className={styles.side}
                onClick={clicou}
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                mode="inline"
                items={items} />
        </>
    )
}