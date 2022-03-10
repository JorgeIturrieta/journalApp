import { types } from "../../types/types"

describe('Pruebas en en test.js', () => {

    const testMock = {
        login: '[Auth] Login',
        logout: '[Auth] Logout',

        uiSetError: '[UI] Set Error',
        uiRemoveError: '[UI] Remove Error',

        uiStartLoading: '[UI] Start loading',
        uiFinishLoading: '[UI] Finish loading',

        notesAddNew: '[Notes] New note',
        notesActive: '[Notes] Set active note',
        notesLoad: '[Notes] Load notes',
        notesUpdated: '[Notes] Updated note',
        notesFileUrl: '[Notes] Updated image url',
        notesDelete: '[Notes] Delete note',
        notesLogoutClean: '[Notes] Loguot Cleaning',
    }
    test('Debe ser igual al objeto proporcionado', () => {
        expect(types).toEqual(testMock);
    })

})
