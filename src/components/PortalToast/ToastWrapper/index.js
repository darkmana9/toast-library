import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { Toast } from "@/components/PortalToast/ToastWrapper/Toast";
import { Wrapper } from "@/components/PortalToast/ToastWrapper/components";
import { toast } from "@/service/ToastClass";


const ToastWrapper = (props, ref) => {

    const [toasts, setToasts] = useState([])

    useImperativeHandle(ref, () => ({
        showToast: () => {
            setToasts(prevState => {
                return (
                    [
                        ...prevState,
                        {
                            position: toast.position,
                            type: toast.type,
                            time: toast.time,
                            title: toast.title,
                            indent: toast.indent,
                            color: toast.color,
                            animation: toast.animation,
                        }
                    ])
            })
        },
        removeToast: () => {
            setToasts((prevState) => {
                prevState.pop()
                return [...prevState]
            })
        }
    }))
    return (
        <>
            {toasts.map((el) => {
                    console.log('render')
                    return (
                        <Wrapper key={Math.random()} position={el.position} backgroundColor={el.color}>
                            <Toast title={el.title} type={el.type}/>
                        </Wrapper>
                    )
                })}
        </>
    )
}

export default forwardRef(ToastWrapper)


