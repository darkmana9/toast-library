import React from "react";

import Close from '@/../public/svg/close.svg'
import { CloseIconWrapper } from "@/components/PortalToast/ToastController/ToastWrapper/CloseButton/components";

export const CloseButton = ({removeToast}) => {

    return (
        <CloseIconWrapper onClick={removeToast}>
            <Close/>
        </CloseIconWrapper>
    )
}
