import React from "react";
import ReactDOM from 'react-dom'

import { ToastWrapper } from "@/components/ToastWrapper";




ReactDOM.render(
    <ToastWrapper color='red' title='Error' description='You get an error' type={'error'}/>,
    document.getElementById('root'),
)
