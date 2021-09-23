import React, { useState } from 'react'
import PropTypes from "prop-types";

import { toast } from "@/service/ToastClass";
import { PortalToast } from "@/components/PortalToast";
import { LB, LT, RB, RT } from "@/constants/position";

export const App = ({title, type, animation, color, gap, position, time}) => {

    const [pos, setPos] = useState({})

    const showToast = () => {
        switch (position){
            case 'LT': {
                setPos(LT)
                break
            }
            case 'LB': {
                setPos(LB)
                break
            }
            case 'RB': {
                setPos(RB)
                break
            }
            case 'RT': {
                setPos(RT)
                break
            }
        }
        toast.setTitle(title).setType(type).setAnimation(animation).setColor(color).setGap(gap).setTime(time).showToast()
    }
    return (
        <>
            <PortalToast position={pos}/>
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
    position: PropTypes.oneOf(['LB', 'LT', 'RT', 'RB']),
    gap: PropTypes.number,
};

App.defaultProps = {
    title: 'tittle',
    type: 'error',
    color: '#37E29A',
    animation: 'translate',
    position: 'RT',
    gap: 20,
    time: 5000,
};
