'use client'
import { useEffect, useState } from 'react'
import styles from './WenIndicators.module.scss'
import api from 'services/api'

export default function WenIndicators() {
    const [data, setData] = useState([])
    useEffect(() => {
        async function coletarInfo() {
            if (data.length === 0) setData(await api.GET.get_data('/wen_indicators'))
        }
        coletarInfo()
    }, [])
    return (
        <div className={styles.container}>
            <h2>WEN INDICATORS</h2>
        </div>
    )
}