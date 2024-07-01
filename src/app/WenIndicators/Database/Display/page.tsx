'use client'
import styles from 'app/WenIndicators/WenIndicators.module.scss'
import { useEffect, useState } from "react"
import { get_data } from "services/functions"
import { Table } from 'antd';
import { formatoMoneyBR } from 'utils';

export default function Display() {
    const [data, setData] = useState([]);
    const [tableData1, setTableData1] = useState([]);
    const [tableData2, setTableData2] = useState([]);

    useEffect(() => {
        async function coletarInfo() {
            if (data.length === 0) {
                const apiData = await get_data(window.location.pathname);
                setData(apiData);

                // Separa os dados em duas tabelas com base nas chaves
                const table1 = apiData
                    .filter((item: any) => item.hasOwnProperty('Concatenar'))
                    .map((item: any) => ({
                        ...item,
                        averages: item.KPIs.includes('Turns')
                            ? item.averages.map((val: any) => val !== null ? val.toFixed(1) : '-')
                            : item.averages.map((val: any) => val !== null ? formatoMoneyBR.format(val) : '-'),
                        data: item.KPIs.includes('Turns')
                            ? item.data.map((val: any) => val !== null ? val.toFixed(1) : '-')
                            : item.data.map((val: any) => val !== null ? formatoMoneyBR.format(val) : '-'),
                        last: item.KPIs.includes('Turns')
                            ? item.last.map((val: any) => val !== null ? val.toFixed(1) : '-')
                            : item.last.map((val: any) => val !== null ? formatoMoneyBR.format(val) : '-'),
                        target: item.KPIs.includes('Turns')
                            ? item.target.map((val: any) => val !== null ? val.toFixed(1) : '-')
                            : item.target.map((val: any) => val !== null ? formatoMoneyBR.format(val) : '-'),
                        Annualized: item.KPIs.includes('Turns')
                            ? item.Annualized.toFixed(1)
                            : formatoMoneyBR.format(item.Annualized)
                    }));
                const table2 = apiData
                    .filter((item: any) => item.hasOwnProperty('Indicador'))
                    .map((item: any) => ({
                        ...item,
                        Meta: item.Meta !== null ? (item.Meta * 100).toFixed(1) + '%' : '-',
                        averages: item.averages.map((val: any) => val !== null ? (val * 100).toFixed(1) + '%' : '-'),
                        data: item.data.map((val: any) => val !== null ? (val * 100).toFixed(1) + '%' : '-')
                    }));

                setTableData1(table1);
                setTableData2(table2);
            }
        }
        coletarInfo();
    }, []);

    // Função para gerar colunas dinamicamente (reutilizável)
    const generateColumns = (data: any) => data.length > 0
        ? Object.keys(data[0]).map((key) => ({
            title: key,
            dataIndex: key,
            key: key,
            render: (text: any) => (
                Array.isArray(text) ? (
                    <ul>
                        {text.map((item, index) => (
                            <li style={{ listStyle: 'none' }} key={index}>{item}</li> // Renderiza o item já formatado
                        ))}
                    </ul>
                ) : (
                    text
                ) // Renderiza o texto já formatado
            ),
        }))
        : [];

    return (
        <>
            <h2>Comissão de Estoques</h2>
            <div className={styles.table}>
                <Table style={{ width: '95%' }} dataSource={tableData1} columns={generateColumns(tableData1)} />
            </div>

            <h2>Atendimento das OVs</h2>
            <div className={styles.table}>
                <Table style={{ width: '95%' }} dataSource={tableData2} columns={generateColumns(tableData2)} />
            </div>
        </>
    );
}