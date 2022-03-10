import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";
import { authDemo } from "../fixtures/authDemo";

describe('Pruebas en authReducer', () => {

    test('Debe realizar acción login ', () => {
        const initState = {} 
        const action = {
            type: types.login,
            payload: authDemo
        }
       const newState = authReducer(initState, action);
       expect(newState).toEqual({
           uid:authDemo.uid ,
           name: authDemo.displayName
       });
 
    });

    test('Debe realizar acción logout retornar objeto vacío', () => {
        const action = {
            type: types.logout,
            payload:  authDemo          
        }
        const newState = authReducer({}, action);      
        expect(newState).toEqual({});       
    });

    test('Debe  de retornar el state si ninguna accion coincide', () => {
        
        const action = {
            type: 'cualquier cosa',
            payload:  authDemo          
        }
        const newState = authReducer(authDemo, action);
        expect(newState).toEqual(authDemo);

    })



})
