import toast from '@/service/ToastClass'
import React, { forwardRef, useImperativeHandle, useState } from 'react'
import PropTypes from 'prop-types'

import { ToastWrapper } from '@/components/ToastWrapper'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { ListWrapper } from '@/components/ToastController/components'

const ToastsController = ({position}, ref) => {
    const [toasts, setToasts] = useState([])

    useImperativeHandle(ref, () => ({
        showToast: () => {
            if (toasts.length < 3) {
                let timeoutID = setTimeout(() => {
                    setToasts((prevState) => {
                        prevState.shift()
                        return [...prevState]
                    })
                }, toast.time)
                setToasts(prevState => {
                    return (
                        [
                            ...prevState,
                            {timeoutID, ...toast}
                        ])
                })

            }
        },
        removeToast: (e) => {
            const currentEl = toasts.find((el) => {
                return el.id === e.target.value
            })
            clearTimeout(currentEl.timeoutID)
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

ToastsController.propTypes = {
    position: PropTypes.object,
    ref: PropTypes.object,
}


