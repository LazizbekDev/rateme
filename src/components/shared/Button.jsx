import React from 'react'

export const Button = ({ children, version = 'primary', type, isDisabled }) => {
    return (
        <button
            type={type}
            disabled={isDisabled}
            className={`btn btn-${version}`}
        >
            {children}
        </button>
    )
}