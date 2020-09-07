import React, {useState} from 'react'
import Drawer from './Drawer';

const Layout = ({children})=>{
    const [drawer, setDrawer] = useState(false);
    return (
        <>
            <Drawer drawer={drawer} setDrawer={setDrawer}>
                {children[0]}
            </Drawer>
            <div className="p-3" style={{marginLeft: '50px'}}>
                {children[1]}
            </div>
        </>
    )
}

export default Layout;