'use client'
import { useEffect, useState } from 'react'
import styles from 'app/WenIndicators/WenIndicators.module.scss'
import { get_data } from 'services/functions'
import { Avatar, Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface ListIndicatorsType {
    id: string,
    country: string,
    empresa: string,
    indicadores: string[]
}

interface IndicadorProps {
    nome: string;
    valor: string | number | undefined;
}

const getCountryImage = (country: string) => {
    switch (country) {
        case 'Brasil':
            return '/flags/bandeira brasil.png';
        case 'Estados Unidos':
            return '/flags/bandeira usa.png';
        case 'Portugal':
            return '/flags/bandeira portugal.png';
        case 'Índia':
            return '/flags/bandeira india.png';
        case 'África do Sul':
            return '/flags/bandeira africa.png';
        case 'China':
            return '/flags/bandeira china.png';
        case 'Alemanha':
            return '/flags/bandeira alemanha.png';
        case 'Global':
            return '/flags/global.png';
        default:
            return '/flags/global.png';
    }
};

const columns: TableColumnsType<ListIndicatorsType> = [
    {
        title: 'País',
        dataIndex: 'country',
        render: (country: string) => (
            <span>
                <Avatar src={getCountryImage(country)} style={{ marginRight: '8px' }} />
                {country}
            </span>
        ),
    },
    {
        title: 'Empresa',
        dataIndex: 'empresa',
    },
    {
        title: 'Indicadores',
        dataIndex: 'indicadores',
        key: 'indicadores',
        render: (indicadores: string[]) => {
            const indicadoresFormatados: IndicadorProps[] = indicadores.map(
                (indicador) => ({ nome: indicador, valor: '' }) // Inicializa valor como vazio
            );
            return (
                <ul>
                    {indicadoresFormatados.map((indicador, index) => (
                        <li style={{ listStyle: 'none' }}>
                            <strong key={index}>{indicador.nome}</strong>
                        </li>
                    ))}
                </ul>
            );
        },
    },
];

export default function WenIndicators() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function coletarInfo() {
            if (data.length === 0) setData(await get_data(window.location.pathname))
        }
        coletarInfo()
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.table}>
                <Table style={{ width: '80%' }} columns={columns} dataSource={data} size="middle" />
            </div>
        </div>
    )
}