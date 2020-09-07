import React, { useState } from 'react'
import styles from '../styles/Gas.module.scss'

const Gas = ()=>{
    return(
        <>
            <div className="d-flex justify-content-between mb-4">
                <div>
                    <span className="bold title">Расход газа Армада Парк</span>
                    <span className="link ml-3">Добавить</span>
                </div>
                <div className="bold title blue">
                    Сентябрь 2020
                </div>
            </div>
            <div className={styles['table-title']+" mb-3 pb-2 d-flex bold align-items-center"} style={{textAlign:'center'}}>
                <span style={{width:'9%', textAlign:'left'}}>Дата</span>
                <div style={{width:'9%'}}>Показания мех счётчика</div>
                <span style={{width:'9%'}}>T°C</span>
                <span style={{width:'9%'}}>м³, сут</span>
                <span style={{width:'9%'}}>Показания корректора Vpt-01</span>
                <span style={{width:'18%'}}>Разница В-Е</span>
                <span style={{width:'9%'}}>Vt-01</span>
                <span style={{width:'9%'}}>Дельта Vt</span>
                <span style={{width:'9%'}}>ГКал</span>
                <span style={{width:'9%', textAlign:'right'}}>Дельта ГКал</span>
            </div>
            {[1,2,3,4,5,6].map((el,i)=>(
                <div key={i} className={"mb-2 pb-2 d-flex align-items-center"} style={{textAlign:'center'}}>
                    <span style={{width:'9%', textAlign:'left'}}>30.09.2020</span>
                    <div style={{width:'9%'}}>717323.1</div>
                    <span style={{width:'9%'}}>18</span>
                    <span style={{width:'9%'}}>65,9</span>
                    <span style={{width:'9%'}}>717253,0</span>
                    <span style={{width:'9%'}}>65,9</span>
                    <span style={{width:'9%'}}>65,9</span>
                    <span style={{width:'9%'}}>813150.90</span>
                    <span style={{width:'9%'}}>0.204</span>
                    <span style={{width:'9%'}}>11747.13</span>
                    <span style={{width:'9%', textAlign:'right'}}>1,32</span>
                </div>
            ))}
        </>
    )
}

export default Gas;