import React from 'react';

import {
    ERROR_TOAST_BACKGROUND,
    INFO_TOAST_BACKGROUND,
    SUCCESS_TOAST_BACKGROUND,
    WARNING_TOAST_BACKGROUND
} from '@/constants/colors';
import { defaultConfig } from '@/constants/config';

export class ToastClass {
    constructor(options) {
        if (Boolean(ToastClass.instance)) {
            return ToastClass.instance
        }
        ToastClass.instance = this
        this.toasts = []
        this.title = options.title
        this.type = options.type
        this.color = options.color
        this.ref = options.ref
        this.time = options.time
        this.id = options.id
        this.animation = options.animation
        this.gap = options.gap
        return this
    }

    setTitle = title => {
        this.title = title
        return this
    }

    setType = type => {
        try {
            switch (type) {
                case 'error': {
                    this.type = 'error'
                    this.color = ERROR_TOAST_BACKGROUND
                    break
                }
                case 'info': {
                    this.type = 'info'
                    this.color = INFO_TOAST_BACKGROUND
                    break
                }
                case 'warning': {
                    this.type = 'warning'
                    this.color = WARNING_TOAST_BACKGROUND
                    break
                }
                case 'success': {
                    this.type = 'success'
                    this.color = SUCCESS_TOAST_BACKGROUND
                    break
                }
                default: {
                    throw 'invalid type of toast'
                }
            }
            return this
        } catch (e) {
            console.log(e)
        }
    }

    setColor = color => {
        try {
            if (/^#[0-9a-f]{3}([0-9a-f]{3})?$/i.test(color)) {
                this.color = color
            } else {
                throw 'invalid color of toast'
            }
            return this
        } catch (e) {
            console.log(e)
        }
    }

    setAnimation = animation => {
        try {
            if (animation === 'fade' || animation === 'translate') {
                this.animation = animation
                return this
            } else {
                throw `invalid animation name - ${animation}`
            }
        } catch (e) {
            console.log(e)
        }

    }

    setGap = gap => {
        try {
            if (isNaN(gap)) {
                throw 'invalid toast gap'
            } else {
                this.gap = gap
            }
            return this
        } catch (e) {
            console.log(e)
        }
    }

    setTime = time => {
        try {
            if (isNaN(time)) {
                throw 'invalid toast time'
            } else {
                this.time = time
            }
            return this
        } catch (e) {
            console.log(e)
        }
    }

    showToast = () => {
        this.id++
        this.ref.current.showToast()
    }

    _setRef = ref => {
        this.ref = ref
    }

    _removeToast = e => {
        this.ref.current.removeToast(e)
    }
}

const toast = new ToastClass(defaultConfig)

export default toast

