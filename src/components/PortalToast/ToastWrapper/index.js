import React, { forwardRef, useCallback, useImperativeHandle, useState } from "react";


import { ERROR_TOAST_BACKGROUND } from "@/constants/color";
import { Toast } from "@/components/PortalToast/ToastWrapper/Toast";
import { Wrapper } from "@/components/PortalToast/ToastWrapper/components";


const ToastWrapper = ({
                          position,
                          type = 'error',
                          time = 300000,
                          title = 'Error',
                          indent,
                          color = ERROR_TOAST_BACKGROUND,
                          animation
                      }, ref) => {

    const [isActive, setIsActive] = useState(false)



    useImperativeHandle(ref, () => ({

        showToast: () => {
            setIsActive(true)
            setTimeout(() => {
                setIsActive(false)
            }, time)
        },
        removeToast: () => {
            setIsActive(false)
        }
    }))
    return (
        isActive ?
            <Wrapper position={position} backgroundColor={color}>
                <Toast title={title} type={type} onRemoveToast/>
            </Wrapper>
            : <></>
    )
}

export default forwardRef(ToastWrapper)


