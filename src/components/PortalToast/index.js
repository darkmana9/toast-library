import React, { useRef } from "react";
import ReactDOM from 'react-dom'

import { toast } from "@/service/ToastClass";
import ToastWrapper from "@/components/PortalToast/ToastWrapper";

export const PortalToast = () => {
    const controlRef = useRef()
    toast.setRef(controlRef)
    return (
        ReactDOM.createPortal(<ToastWrapper ref={controlRef}/>, document.body)
    )
}