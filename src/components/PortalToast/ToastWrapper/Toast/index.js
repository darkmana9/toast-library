import React from "react";

import Error from '@/../public/svg/error.svg'
import Info from '@/../public/svg/info.svg'
import Warning from '@/../public/svg/warning.svg'
import Success from '@/../public/svg/success.svg'
import Close from '@/../public/svg/close.svg'
import { CloseIconWrapper, IconWrapper, Title } from "@/components/PortalToast/ToastWrapper/Toast/components";


export const Toast = ({type, title}) => {

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

    return (
        <>
            <IconWrapper>{setSvg(type)}</IconWrapper>
            <Title>{title}</Title>
            <CloseIconWrapper><Close/></CloseIconWrapper>
        </>
    )
}
