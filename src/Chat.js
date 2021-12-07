/** @format */

import React from 'react'

export default function Chat({ contact, message, dispatch }) {
    const handleSend = () => {
        alert(`${message} send to ${contact.email}`)
        dispatch({
            type: 'edited_message',
            message: '',
        })
    }
    return (
        <section className="chat">
            <textarea
                value={message}
                placeholder={'Chat to ' + contact.name}
                onChange={(e) => {
                    dispatch({
                        type: 'edited_message',
                        message: e.target.value,
                    })
                    // TODO: dispatch edited_message
                    // (Read the input value from e.target.value)
                }}
            />
            <br />
            <button onClick={handleSend}>Send to {contact.email}</button>
        </section>
    )
}
