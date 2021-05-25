import React, { useEffect } from 'react'
import { FiAlertCircle, FiCheckCircle, FiInfo, FiXCircle } from 'react-icons/fi'

import { ToastMessage, useToast } from '../../../context/ToastContext'
import { Container } from './styles'

interface ToastProps {
    message: ToastMessage
}

const icons = {
    info: <FiInfo size={20} />,
    success: <FiCheckCircle size={20} />,
    error: <FiAlertCircle size={20} />,
}

const Toast: React.FC<ToastProps> = ({ message }) => {
    const { removeToast } = useToast()

    useEffect(() => {
        const timer = setTimeout(() => {
            removeToast(message.id)
        }, 4000)

        return () => {
            clearTimeout(timer)
        }
    }, [message.id, removeToast])

    return (
        <Container 
            type={message.type} 
            hasDescription={!!message.description}
        >
            {icons[message.type || 'info']}

            <div>
                <strong>{message.title}</strong>
                {message.description && <p>{message.description}</p>}
            </div>

            <button onClick={() => removeToast(message.id)} type="button">
                <FiXCircle size={18} />
            </button>
        </Container>
    )
}

export default Toast