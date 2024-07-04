'use client'
import styles from 'app/WenIndicators/WenIndicators.module.scss'
import { useEffect, useState } from "react"
import { get_data } from "services/functions"
import { Table, Radio } from 'antd';
import { formatoMoneyBR } from 'utils';

export default function Display() {
    const [data, setData] = useState([]);
    const [tableData, setTableData] = useState<any[]>([]);
    const [selectedTable, setSelectedTable] = useState('Comissão de Estoques');

    useEffect(() => {
        async function coletarInfo() {
            if (data.length === 0) {
                const apiData = await get_data(window.location.pathname);
                setData(apiData);
            }
        }
        coletarInfo();
    }, []);

    useEffect(() => {
        const filteredData = data.filter((item: any) => {
            if (selectedTable === 'Comissão de Estoques') {
                return item.hasOwnProperty('Concatenar');
            } else if (selectedTable === 'Global Efficiency') {
                return item.hasOwnProperty('Total_Efficiency_Registered');
            } else {
                return item.hasOwnProperty('Indicador');
            }
        }).map((item: any) => {
            if (item.hasOwnProperty('Concatenar')) {
                return {
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
                };
            } else {
                return {
                    ...item,
                    Meta: item.Meta !== null ? (item.Meta * 100).toFixed(1) + '%' : '-',
                    averages: item.averages.map((val: any) => val !== null ? (val * 100).toFixed(1) + '%' : '-'),
                    data: item.data.map((val: any) => val !== null ? (val * 100).toFixed(1) + '%' : '-')
                };
            }
        });
        setTableData(filteredData);
    }, [data, selectedTable]);

    // Função para gerar colunas dinamicamente, com filtro para 'Global Efficiency'
    const generateColumns = (data: any) => {
        if (data.length > 0) {
            const commonColumns = ['Empresa', 'Indicador', 'averages', 'data'];
            const allColumns = Object.keys(data[0]);

            const filteredColumns = selectedTable === 'Global Efficiency'
                ? commonColumns
                : allColumns;

            return data.length > 0
                ? filteredColumns.map((key) => ({
                    title: key,
                    dataIndex: key,
                    width: 100,
                    key: key,
                    render: (text: any) => (
                        Array.isArray(text) ? (
                            <ul>
                                {text.map((item: any, index: any) => (
                                    <li style={{ listStyle: 'none' }} key={item + index}>{item}</li>
                                ))}
                            </ul>
                        ) : (
                            text
                        )
                    ),
                }))
                : [];
        }
    }

    return (
        <>
            <Radio.Group style={{ margin: 15 }} value={selectedTable} onChange={(e) => setSelectedTable(e.target.value)}>
                <Radio.Button value="Comissão de Estoques">Inventory</Radio.Button>
                <Radio.Button value="Atendimento das OVs">On time Delivery</Radio.Button>
                <Radio.Button value="Global Efficiency">Global Efficiency</Radio.Button>
            </Radio.Group>

            <div className={styles.table}>
                <Table style={{ width: '95%' }} scroll={{ x: 750 }} dataSource={tableData} columns={generateColumns(tableData)} bordered />
            </div>
        </>
    );
}