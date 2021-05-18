import { ErrorMessage, useField } from 'formik';

import { Input } from './styles'

interface InputProps {
    label: string
    name: string
    type?: string
    placeholder?: string
}

export const InputField = ({ label, ...props }: InputProps) => {
    const [field, meta] = useField(props)
    return (
        <>
            <label htmlFor={field.name}>{label}</label>
            <Input
                className={`${meta.touched && meta.error}`}
                {...field} {...props}
                autoComplete="off"
            />
            <ErrorMessage component="div" name={field.name} className="error" />
        </>
    )
}
