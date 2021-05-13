import React from 'react'

import SidebarGeneric from  '../../../components/CMS/SidebarGeneric'
import MainContentGeneric from  '../../../components/CMS/MainContentGeneric'

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
