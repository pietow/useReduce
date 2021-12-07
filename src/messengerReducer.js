/** @format */

export const initialState = {
    selectedId: 0,
    message: 'Hello',
    drafts: ['Hello','',''],
}

export function messengerReducer(state, action) {
    switch (action.type) {
        case 'changed_selection': {
            return {
                ...state,
                selectedId: action.contactId,
                message: state.drafts[action.contactId],
            }
        }
        case 'edited_message': {
            state.drafts[state.selectedId] = action.message   //Mutation ---> use useImmerReducer
            return {
                ...state,
                message: action.message,
            }
        }
        default: {
            throw Error('Unknown action: ' + action.type)
        }
    }
}
