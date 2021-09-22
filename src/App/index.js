import React, { useState } from 'react'

import { toast } from "@/service/ToastClass";
import { PortalToast } from "@/components/PortalToast";
import { LB, LT, RB, RT } from "@/constants/position";


export const App = () => {

    const [pos, setPos] = useState({})

    const showLB = () => {
        setPos(LB)
        toast.setTitle('LB').setType('error').setAnimation('fade').showToast()
    }
    const showRB = () => {
        setPos(RB)
        toast.setTitle('RB').setType('info').setAnimation('translate').showToast()
    }
    const showLT = () => {
        setPos(LT)
        toast.setTitle('LT').setType('success').setAnimation('translate').showToast()
    }
    const showRT = () => {
        setPos(RT)
        toast.setTitle('RT').setType('warning').setAnimation('fade').showToast()
    }

    return (
        <>
            <PortalToast position={pos}/>
            <button onClick={showLB}>LB</button>
            <button onClick={showRB}>RB</button>
            <button onClick={showLT}>LT</button>
            <button onClick={showRT}>RT</button>
        </>
    )
}
