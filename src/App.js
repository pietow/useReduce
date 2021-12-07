/** @format */

import React, { useReducer } from 'react'
import { useImmerReducer } from 'use-immer'
import Chat from './Chat.js'
import ContactList from './ContactList.js'
import { initialState, messengerReducer } from './messengerReducer'

export default function Messenger() {
    const [state, dispatch] = useReducer(messengerReducer, initialState)
    const message = state.message
    const contact = contacts.find((c) => c.id === state.selectedId)
    console.log(state)
    return (
        <div>
            <ContactList
                contacts={contacts}
                selectedId={state.selectedId}
                dispatch={dispatch}
            />
            <Chat message={message} contact={contact} dispatch={dispatch} />
        </div>
    )
}

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' },
]
