import React, { forwardRef, useImperativeHandle, useState } from "react";
import { toast } from "@/service/ToastClass";
import { ToastWrapper } from "@/components/PortalToast/ToastController/ToastWrapper";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { ListWrapper } from "@/components/PortalToast/ToastController/components";

const ToastsController = ({position}, ref) => {

    const [toasts, setToasts] = useState([])

    useImperativeHandle(ref, () => ({
        showToast: () => {
            if (toasts.length < 3) {
                setToasts(prevState => {
                    return (
                        [
                            ...prevState,
                            {
                                type: toast.type,
                                time: toast.time,
                                title: toast.title,
                                indent: toast.indent,
                                color: toast.color,
                                animation: toast.animation,
                                relativePosition: toast.relativePosition,
                                id: toast.id,
                                gap: toast.gap,
                            }
                        ])
                })

                setTimeout(() => {
                    setToasts((prevState) => {
                        prevState.shift()
                        return [...prevState]
                    })
                }, toast.time)
            }
        },
        removeToast: (e) => {
            const currentEl = toasts.find((el) => {
                return el.id === e.target.value
            })
            setToasts((prevState) => {
                prevState.splice(toasts.indexOf(currentEl), 1)
                return [...prevState]
            })
        }
    }))
    return (
        <ListWrapper position={position}>
            <TransitionGroup component={null}>
                {toasts.map((el) => {
                    return (
                        <CSSTransition key={el.id} timeout={500} classNames={el.animation}>
                            <ToastWrapper position={position} el={el}/>
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>
        </ListWrapper>
    )
}

export default forwardRef(ToastsController)


