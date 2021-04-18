import Swal from "sweetalert2";
import { db } from "../firebase/firebaseConfig";
import { fileUpload } from "../helpers/fileUpload";
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

//react-journal

export const startNewNote = () => {
    return async (dispatch, getSate) => {
        const { uid } = getSate().auth;
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/Journal/notes`).add(newNote);

        dispatch(activeNote(doc.id, newNote));
        dispatch(addNewNote(doc.id,newNote));

    }
}

export const activeNote = (id, note) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});

export const addNewNote = (id,note) => ({
    type: types.notesAddNew ,
    payload: {
        id ,
        ...note
    }

})

export const startLoadingNotes = (uid) => {
    return async (dispatch) => {
        const notes = await loadNotes(uid);
        dispatch(setNotes(notes));
    }
}

export const setNotes = (notes) => ({
    type: types.notesLoad,
    payload: notes
});

export const startSaveNote = (note) => {

    return async (dispatch, getSate) => {
        const { uid } = getSate().auth;
        if (!note.url) {
            delete note.url
        }
        const noteToFireStore = { ...note };
        delete noteToFireStore.id;
        await db.doc(`${uid}/Journal/notes/${note.id}`).update(noteToFireStore);
        dispatch(refreshNote(note.id, noteToFireStore));
    
        Swal.fire('Saved', note.title, 'success');
    }
}

export const refreshNote = (id, note) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
});

export const startUploading = (file) => {
    return async (dispatch, getSate) => {
        const { active: activeNote } = getSate().notes;
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload(file);
        activeNote.url = fileUrl;
        dispatch(startSaveNote(activeNote));
        Swal.close();
    }
}

export const startDeleting = (id) => {
    return async (dispatch, getState) => {
        const { uid } = getState().auth;
        await db.doc(`${uid}/Journal/notes/${id}`).delete();
        dispatch( deleteNote(id));

        Swal.fire('Deleted', 'Note Deleted', 'success');

    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: {
        id
    }

})

export const noteLogout = () => ({
    type: types.notesLogoutClean
})
