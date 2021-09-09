import React from "react";
import { ERROR_TOAST_BACKGROUND } from "@/constants/color";
import { TOAST_GAP, TOAST_HEIGHT } from "@/constants/position";

export class ToastClass {

    constructor(title = '', type = 'error', color = ERROR_TOAST_BACKGROUND, position = 'RB', ref, id) {
        if (!!ToastClass.instance) {
            return ToastClass.instance
        }
        ToastClass.instance = this
        this.toasts = []
        this.title = title
        this.type = type
        this.color = color
        this.position = position
        this.ref = ref
        this.id = id
        return this
    }

    setTitle = (title) => {
        this.title = title
        console.log(this.title)
        return this
    }
    setRef = (ref) => {
        this.ref = ref
    }
    showToast = () => {
        this.id++
        this.ref.current.showToast()
    }
    removeToast = () => {
        this.ref.current.removeToast()
    }

}

export const toast = new ToastClass('default', 'error',ERROR_TOAST_BACKGROUND,'RB', null, 0)

