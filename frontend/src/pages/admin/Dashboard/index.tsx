import React from 'react'

import SidebarGeneric from  '../../Generic/SidebarGeneric'
import MainContentGeneric from  '../../Generic/MainContentGeneric'

const Dashboard: React.FC = () => {

    return (
        <>
            <SidebarGeneric></SidebarGeneric>
            <MainContentGeneric>
                <h1>Dashboard</h1>
            </MainContentGeneric>
        </>
    )
}

export default Dashboard
