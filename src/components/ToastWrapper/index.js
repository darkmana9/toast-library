import React from "react";

import { Toast } from "@/components/Toast";
import { Wrapper } from "@/components/ToastWrapper/components";

export const ToastWrapper = ({
                                 position,
                                 type,
                                 time,
                                 title,
                                 description,
                                 indent,
                                 color,
                                 animation
                             }) => {

    return (
        <Wrapper backgroundColor={color}>
            <Toast title={title} description={description} type={type}/>
        </Wrapper>
    )
}
