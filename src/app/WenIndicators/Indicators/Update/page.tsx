'use client'
import { useEffect, useState } from 'react'
import styles from 'app/WenIndicators/WenIndicators.module.scss'
import { get_data } from 'services/functions'
import { Avatar, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { getCountryImage } from 'utils';

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

const columns: TableColumnsType<ListIndicatorsType> = [
    {
        title: 'País',
        width: '25%',
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
        width: '25%',
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

export default function Display() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function coletarInfo() {
            if (data.length === 0) setData(await get_data(window.location.pathname))
        }
        coletarInfo()
    }, [])

    return (
        <div className={styles.table}>
            <Table style={{ width: '95%' }} scroll={{ x: 800 }} columns={columns} dataSource={data} size="middle" bordered />
        </div>
    )
}