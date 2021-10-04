import React, { useState } from 'react'
import PropTypes from 'prop-types';

import toast from '@/service/ToastClass';
import PortalToast from '@/components/PortalToast';
import { LB, LT, RB, RT } from '@/constants/position';

export const App = ({title, type, animation, color, gap, positionProp, time}) => {
    const [position, setPosition] = useState({})

    const showToast = () => {
        switch (positionProp) {
            case 'LT': {
                setPosition(LT)
                break
            }
            case 'LB': {
                setPosition(LB)
                break
            }
            case 'RB': {
                setPosition(RB)
                break
            }
            case 'RT': {
                setPosition(RT)
                break
            }
        }
        toast.setTitle(title).setType(type).setAnimation(animation).setColor(color).setGap(gap).setTime(time).showToast()
    }
    return (
        <>
            <PortalToast position={position}/>
            <button onClick={showToast}>show toast</button>
        </>
    )
}

App.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    time: PropTypes.number,
    type: PropTypes.oneOf(['error', 'warning', 'success', 'info']),
    animation: PropTypes.oneOf(['fade', 'translate']),
    positionProp: PropTypes.oneOf(['LB', 'LT', 'RT', 'RB']),
    gap: PropTypes.number,
}

App.defaultProps = {
    title: 'tittle',
    type: 'error',
    color: '#37E29A',
    animation: 'translate',
    positionProp: 'RT',
    gap: 20,
    time: 5000,
}
