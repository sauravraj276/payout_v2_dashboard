import React from 'react'
import styles from './Mainsection.module.css'
import Overview from './Overview1'
import Table from './Table'

export default function Mainsection() {
  return (
    <div className={styles.mainsection}>
        <Overview/>
       <div className={styles.transactions}><p>Transactions | This Month</p>
       <Table/>
       </div>
    </div>
  )
}
