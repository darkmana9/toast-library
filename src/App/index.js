import React from 'react'

import { toast } from "@/service/ToastClass";
import { PortalToast } from "@/components/PortalToast";


export const App = () => {
    return (
        <>
            <PortalToast/>
            <button onClick={toast.showToast}>Get toast</button>
        </>
    )
}
