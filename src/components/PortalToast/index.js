import React, { useRef } from "react";
import ReactDOM from 'react-dom';
import PropTypes from "prop-types";

import { toast } from "@/service/ToastClass";
import ToastsController from "@/components/PortalToast/ToastController";


export const PortalToast = ({position}) => {
    const controlRef = useRef()
    toast._setRef(controlRef)
    return (
        ReactDOM.createPortal(<ToastsController position={position}
            ref={controlRef}/>, document.body)
    )
}

PortalToast.propTypes = {
    position: PropTypes.object,
};