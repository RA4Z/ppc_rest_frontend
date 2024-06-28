'use client'
import { useEffect, useState } from 'react'
import styles from './WenIndicators.module.scss'
import { get_data } from 'services/functions'
import { Divider, Table } from 'antd';
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

const columns: TableColumnsType<ListIndicatorsType> = [
    {
        title: 'País',
        dataIndex: 'country',
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
            if (data.length === 0) setData(await get_data('/wen_indicators'))
        }
        coletarInfo()
    }, [])

    return (
        <div className={styles.container}>
            <h2>WEN INDICATORS</h2>
            <Divider />
            <div className={styles.table}>
                <Table style={{ width: '80%' }} columns={columns} dataSource={data} size="middle" />
            </div>
        </div>
    )
}