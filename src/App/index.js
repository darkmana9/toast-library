import React from 'react'

import { toast } from "@/service/ToastClass";
import { PortalToast } from "@/components/PortalToast";


export const App = () => {

    const showToastHandler = () => {
        toast.setTitle('Error').showToast()
    }
    const showAnotherToastHandler = () => {
        toast.setTitle('Another').showToast()
    }
    return (
        <>
            <PortalToast/>
            <button onClick={showToastHandler}>Get toast</button>
            <button onClick={showAnotherToastHandler}>Get another toast</button>
        </>
    )
}
