import React, { InputHTMLAttributes, useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { Input } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string
}

const InputComponent: React.FC<InputProps> = ({ name, ...rest }) => {
    const inputRef = useRef(null)
    const { fieldName, defaultValue, error, registerField } = useField(name)

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value'
        })
    }, [fieldName, registerField])

    return (
        <Input ref={inputRef} defaultValue={defaultValue} {...rest} />
    )
}

export default InputComponent