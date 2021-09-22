import React, { useCallback } from "react";

import Error from '@/../public/svg/error.svg'
import Info from '@/../public/svg/info.svg'
import Warning from '@/../public/svg/warning.svg'
import Success from '@/../public/svg/success.svg'
import { toast } from "@/service/ToastClass";
import { IconWrapper, Title } from "@/components/PortalToast/ToastController/ToastWrapper/Toast/components";
import { CloseButton } from "@/components/PortalToast/ToastController/ToastWrapper/CloseButton";

export const Toast = ({type, title, id}) => {

    const setSvg = (type) => {
        switch (type) {
            case 'info': {
                return <Info/>
            }
            case 'error': {
                return <Error/>
            }
            case 'warning': {
                return <Warning/>
            }
            case 'success': {
                return <Success/>
            }
        }
    }

    const onRemoveToast = useCallback((e) => {
        e.target.value = id
        toast._removeToast(e)
    }, [])

    return (
        <>
            <IconWrapper>{setSvg(type)}</IconWrapper>
            <Title>{title}</Title>
            {id}
            <CloseButton removeToast={onRemoveToast}/>
        </>
    )
}
