import React from "react";
import { ERROR_TOAST_BACKGROUND } from "@/constants/color";

export class ToastClass {

    constructor(title = '', type = 'error', color = ERROR_TOAST_BACKGROUND, position = 'RB', ref) {
        if (!!ToastClass.instance) {
            return ToastClass.instance
        }
        ToastClass.instance = this
        this.title = title
        this.type = type
        this.color = color
        this.position = position
        this.ref = ref
        return this
    }

    setTitle = (title) => {
        this.title = title
    }
    setRef = (ref) => {
        this.ref = ref
    }
    showToast = () => {
        this.ref.current.showToast()
    }
    removeToast = () => {
        this.ref.current.removeToast()
    }
}

export const toast = new ToastClass('asd', 'error',ERROR_TOAST_BACKGROUND,'RB')

