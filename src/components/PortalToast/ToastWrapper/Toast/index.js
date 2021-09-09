import React, { useCallback } from "react";

import Error from '@/../public/svg/error.svg'
import Info from '@/../public/svg/info.svg'
import Warning from '@/../public/svg/warning.svg'
import Success from '@/../public/svg/success.svg'
import { IconWrapper, Title } from "@/components/PortalToast/ToastWrapper/Toast/components";
import { CloseButton } from "@/components/PortalToast/ToastWrapper/CloseButton";
import { toast } from "@/service/ToastClass";


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
        console.log(id)
        e.target.value = id
        toast.removeToast(e)
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
