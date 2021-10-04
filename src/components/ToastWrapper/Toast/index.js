import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import Error from '../../../../public/svg/error.svg'
import Info from '../../../../public/svg/info.svg'
import Warning from '../../../../public/svg/warning.svg'
import Success from '../../../../public/svg/success.svg'
import toast from '@/service/ToastClass'
import { IconWrapper, Title } from '@/components/ToastWrapper/Toast/components'
import { CloseButton } from '@/components/CloseButton'
import { error, info, success, warning } from '@/constants/types'

export const Toast = ({type, title, id}) => {
    const setSvg = (type) => {
        switch (type) {
            case info: {
                return <Info/>
            }
            case error: {
                return <Error/>
            }
            case warning: {
                return <Warning/>
            }
            case success: {
                return <Success/>
            }
        }
    }

    const handleRemoveToast = useCallback((e) => {
        e.target.value = id
        toast._removeToast(e)
    }, [])

    return (
        <>
            <IconWrapper>{setSvg(type)}</IconWrapper>
            <Title>{title}</Title>
            {id}
            <CloseButton onRemoveToast={handleRemoveToast}/>
        </>
    )
}

Toast.propTypes = {
    type: PropTypes.string,
    title: PropTypes.string,
    id: PropTypes.number
}