import React, { useRef, useState } from 'react';

import { Wrapper } from "@/components/PortalToast/ToastController/components";
import { Toast } from "@/components/PortalToast/ToastController/ToastWrapper/Toast";
import { toast } from "@/service/ToastClass";

export const ToastWrapper = ({el, position}) => {

    const [left, setLeft] = useState(0)

    const isDragging = useRef(false)
    const prevLeft = useRef(0)
    const startLeft = useRef(0)

    const pointerMoveHandler = (e) => {
        if (!isDragging.current) {
            return
        }
        const delta = extractPositionDelta(e)
        if (position.name.match(/L/)) {
            if ((startLeft.current - e.pageX) > 0) { // POSITION
                setLeft((prev) => prev + delta)
            }
        } else {
            if ((startLeft.current - e.pageX) < 0) { // POSITION
                setLeft((prev) => prev + delta)
            }
        }
    }

    const pointerDownHandler = (e) => {
        isDragging.current = true
        startLeft.current = e.pageX
        e.target.setPointerCapture(e.pointerId)
        extractPositionDelta(e)
    }

    const extractPositionDelta = e => {
        const left = e.pageX
        const delta = left - prevLeft.current
        prevLeft.current = left
        return delta
    }

    const pointerUpHandler = e => {
        isDragging.current = false
        if (Math.abs(startLeft.current - e.pageX) < 100) {
            setLeft(0)
        } else {
            e.target.value = el.id
            toast._removeToast(e)
        }
    }

    return (
        <Wrapper onPointerMove={pointerMoveHandler}
                 onPointerDown={pointerDownHandler}
                 onPointerUp={pointerUpHandler}
                 onPointerCancel={pointerUpHandler}
                 animation={el.animation}
                 gap={el.gap}
                 backgroundColor={el.color}
                 left={left}
                 position={position}>
            <Toast id={el.id}
                   title={el.title}
                   type={el.type}/>
        </Wrapper>
    );
};

