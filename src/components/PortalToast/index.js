import React, { useMemo, useRef } from "react";
import ReactDOM from 'react-dom'

import { toast } from "@/service/ToastClass";
import ToastWrapper from "@/components/PortalToast/ToastWrapper";
import { ERROR_TOAST_BACKGROUND } from "@/constants/color";

export const PortalToast = () => {
    const controlRef = useRef()
    toast.setRef(controlRef)
    return (
        ReactDOM.createPortal(<ToastWrapper
            ref={controlRef}/>, document.body)
    )
}