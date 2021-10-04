import React from 'react';

import Close from '../../../public/svg/close.svg'
import { CloseIconWrapper } from '@/components/CloseButton/components'

export const CloseButton = (props) => {
    return (
        <CloseIconWrapper onClick={props.onRemoveToast}>
            <Close/>
        </CloseIconWrapper>
    )
}
