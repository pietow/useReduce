/** @format */

import { useState } from 'react'

export function myReducer(reducer, initialState) {
    const [state, setState] = useState(initialState)

    function dispatch(actionObject) {
        const newState = reducer(state, actionObject)
        setState(newState)
    }

    return [state, dispatch]
}
