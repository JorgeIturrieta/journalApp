/** * @jest-environment node */
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { startLoadingNotes, startNewNote, startSaveNote, startUploading } from '../../actions/notes';
import { db } from "../../firebase/firebaseConfig";
import { types } from '../../types/types';
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initState = {
    auth: {
        uid: 'TESTING'
    },
    notes: {
        active: {
            id: 'RCCAFAkFj6znW8xZUXxd' ,
            title: 'Hola' ,
            body: 'Mundo'
        }
    }
}
let store = mockStore(initState);
describe('Pruebas en note actions', () => {
    beforeEach(() => {
        store = mockStore(initState);
    });
    test('debe de crear una nueva nota startNewNote ', async () => {

        await store.dispatch(startNewNote());
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.notesActive,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        });

        expect(actions[1]).toEqual({
            type: types.notesAddNew,
            payload: {
                id: expect.any(String),
                title: '',
                body: '',
                date: expect.any(Number)
            }
        })
        // Delete nota 
        const docId = actions[0].payload.id
        await db.doc(`TESTING/Journal/notes/${docId}`).delete();
    })

    test('startLoadinNotes debe de cargar los notas ', async () => {

        await store.dispatch(startLoadingNotes('TESTING'));
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: types.notesLoad,
            payload: expect.any(Array)
        });

        const expected = {
            id: expect.any(String),
            title: expect.any(String),
            body: expect.any(String),
            date: expect.any(Number)
        }

        expect(actions[0].payload[0]).toMatchObject(expected);
    });

    test('StartSaveNote debe de actualizar la nota', async () => {
        const note = {
            id: 'RCCAFAkFj6znW8xZUXxd',
            title: 'Titulo test save',
            body: 'Body test save'
        }
        await store.dispatch(startSaveNote(note));
        const actions = store.getActions();       
        expect(actions[0].type).toBe(types.notesUpdated);
        const docRef = await db.doc(`TESTING/Journal/notes/${note.id}`).get();
        expect(docRef.data().title).toEqual(note.title);
        expect(docRef.data().body).toEqual(note.body);    
    });
});
