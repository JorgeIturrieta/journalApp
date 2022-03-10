import { FinishLoading, RemoveError, setError, StartLoading } from "../../actions/ui"
import { types } from "../../types/types";

describe('Pruebas en ui-actions', () => {
    test('Todas las funciones deben de funcionar ', () => {
        const action = setError('Help!!');
        expect(action).toEqual({
            type: types.uiSetError ,
            payload: 'Help!!'
        });

        const removeErrorAction = RemoveError();
        const startLoadingAction = StartLoading();
        const finishLoadingAction = FinishLoading();

        expect(removeErrorAction).toEqual({
            type: types.uiRemoveError ,
           
        });

        expect(startLoadingAction).toEqual({
            type: types.uiStartLoading ,
        
        });
        expect(finishLoadingAction).toEqual({
            type: types.uiFinishLoading ,
         
        });     
        
    })
    
})
