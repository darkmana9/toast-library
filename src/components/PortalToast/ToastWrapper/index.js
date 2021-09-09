import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from "react";
import { Toast } from "@/components/PortalToast/ToastWrapper/Toast";
import { Wrapper } from "@/components/PortalToast/ToastWrapper/components";
import { toast } from "@/service/ToastClass";
import { TOAST_GAP, TOAST_HEIGHT } from "@/constants/position";


const ToastWrapper = (props, ref) => {

    const [toasts, setToasts] = useState([])
    useEffect(() => {
        console.log('render')
    })
    useImperativeHandle(ref, () => ({
        showToast: () => {
            if (toasts.length < 3) {
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
                                relativePosition: toast.relativePosition,
                                id: toast.id,
                            }
                        ])
                })
                setTimeout(() => {
                    setToasts((prevState) => {
                        prevState.pop()
                        return [...prevState]
                    })
                }, toast.time)
            }
        },
        removeToast: (e) => {
            const el = toasts.find((el, i) => {
                return el.id === e.target.value
            })
            setToasts((prevState) => {
                prevState.splice(toasts.indexOf(el), 1)
                return [...prevState]
            })

        }
    }))
    return (
        <>
            {toasts.map((el, i) => {
                return (
                    <Wrapper relativePosition={i * (TOAST_HEIGHT + TOAST_GAP)} key={el.id} position={el.position}
                             backgroundColor={el.color}>
                        <Toast id={el.id} title={el.title} type={el.type}/>
                    </Wrapper>
                )
            })}
        </>
    )
}

export default forwardRef(ToastWrapper)


