import { types } from "../types/types";

/* 
    {
        notes: [] ,
        active: null,
        active: {
            id: 'sdfgdfhgh123asf'
            title: ''
            body: '' 
            imageUrl: ''
            date: 2132355641 

        }
    }
*/
const initialState = {
    notes: [],
    active: null,
}
export const noteReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.notesActive:
            return ({
                ...state,
                active: {
                    ...action.payload
                }
            })
        case types.notesLoad:
            return ({
                ...state,
                notes: action.payload

            });

        case types.notesUpdated:
            return ({
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id
                      ? action.payload.note
                      : note
                )

            })

        case types.notesDelete :
            return ({
                ...state ,
                active: null ,
                notes: state.notes.filter( note => 
                        note.id !== action.payload.id
                )
            });
        case types.notesLogoutClean :
            return ({                
                active: null ,
                notes: [] 
            });

        case types.notesAddNew :            
        return ({                
            active: null ,
            notes: [ action.payload, ...state.notes] 
        });



        default:
            return state;
    }

}