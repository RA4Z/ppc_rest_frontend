'use client'
import styles from 'app/WenIndicators/WenIndicators.module.scss'
import { Table, TableColumnsType } from "antd";
import { useEffect, useState } from "react"
import { get_data } from "services/functions"

const columns: TableColumnsType<any> = [
    {
        title: 'Texto Original',
        dataIndex: 'actual',
    },
    {
        title: 'Texto Novo',
        dataIndex: 'new',
    },
];

export default function Display() {
    const [data, setData] = useState([])

    useEffect(() => {
        async function coletarInfo() {
            if (data.length === 0) setData(await get_data(window.location.pathname))
            console.log(data)
        }
        coletarInfo()
    }, [])
    return (
        <div className={styles.table}>
            <Table style={{ width: '95%' }} columns={columns} dataSource={data} size="middle" />
        </div>
    )
}