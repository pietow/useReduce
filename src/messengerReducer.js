/** @format */

export const initialState = {
    selectedId: 0,
    messages: 'Hello',
    drafts: ['HelloWorld', '', ''],
}

export function messengerReducer(state, action) {
    console.log(state)
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
                messages: state.drafts[action.contactId],
            }
        }
        case 'edited_message': {
            return {
                ...state,
                messages: action.message,
                drafts: state.drafts.map((x, i) => {
                    if (i === action.contactId) {
                        return action.message
                    } else {
                        return x
                    }
                }),
            }
        }
        case 'sent_message': {
            return {
                ...state,
                messages: '',
                drafts: state.drafts.map((x, i) => {
                    if (i === action.contactId) {
                        return ''
                    } else {
                        return x
                    }
                }),
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }
}
