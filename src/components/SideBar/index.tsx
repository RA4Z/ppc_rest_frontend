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
    const [api, contextHolder] = notification.useNotification();

    const openNotification = (title: string, content: string) => {
        api.info({
            message: title,
            description: content,
            placement: 'bottom',
        });
    };

    async function clicou(e: { key: string }) {
        switch (e.key) {
            case 'WenIndicators_All_Update':
                const result = await update_database('/update')
                if (result) {
                    return () => openNotification('Dados Atualizados', 'Os dados foram atualizados com sucesso no servidor PCP!')
                } else {
                    return () => openNotification('Erro Inesperado', 'Ocorreu algum erro ao tentar atualizar os dados! Tente novamente mais tarde!')
                }
            case 'WenIndicators_List_Display':
                return router.push('/WenIndicators', { scroll: false })
            default:
                return
        }
    }
    return (
        <>
            {contextHolder}
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