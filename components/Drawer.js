import React, { useState } from 'react'
import Close from '../imgs/svg/close.svg'
import styles from '../styles/Drawer.module.scss'

const Drawer = ({drawer, setDrawer, children})=>{
    return (
        <>

            <div className={[styles.drawer, !drawer?styles['drawer-closed']:null, 'd-fixed'].join(' ')}>
                <label className={styles['nav-toggle']} onClick={()=>{setDrawer(!drawer)}}>
                    <span className={drawer?styles['top-checked']:null}/>
                    <span className={drawer?styles['middle-checked']:null}/>
                    <span className={drawer?styles['bottom-checked']:null}/>
                </label>
                {children}
            </div>
        </>
    )
}

export default Drawer;