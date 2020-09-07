import React from 'react'
import Close from '../imgs/svg/close.svg'
import styles from '../styles/Drawer.module.scss'

const Drawer = ({drawer, setDrawer, foodtypes})=>{
    return (
        <>
            <input type="checkbox" id="menu-toggle" 
            className="is-hidden" 
            checked={drawer}
            style={{display:'none'}}
            onChange={()=>{setDrawer(!drawer)}}
            ></input>
            <div className='drawer d-fixed d-lg-none'>
                <Close height="20" width="20" className="nav-toggle m-3"  onClick={()=>{setDrawer(false)}}/>
            </div>
    </>
    )
}

export default Drawer;