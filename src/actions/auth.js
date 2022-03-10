import Swal from 'sweetalert2';
import {firebase, googleAuthProvider} from '../firebase/firebaseConfig' ;
import { types } from "../types/types"
import { noteLogout } from './notes';
import { FinishLoading, StartLoading } from './ui';

export const startLoginEmailPassword = (email,password) => {
    return (dispatch) => {
        dispatch(StartLoading());
        firebase.auth().signInWithEmailAndPassword(email,password)
        .then (({user}) => { 
              
              dispatch(login(user.uid,user.displayName));
              dispatch(FinishLoading()); 
         })
         .catch(error => {
            dispatch(FinishLoading());
            Swal.fire('Error',error.message,'error');
             })
             
              
    }
}

export const startRegisterWithEmailPasswordName = (email,password,name) => {
    
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email,password)
        .then (async({user}) => {
           await user.updateProfile({displayName:name});
             console.log(user); 
             dispatch(login(user.uid,user.displayName)); 
        })
        .catch(error =>  Swal.fire('Error',error.message,'error') );
}}


export const startGoogleLogin = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup( googleAuthProvider)
            .then (({user}) => {
                
                dispatch(login(user.uid,user.displayName));
            })
    }
}
export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});

export const startLogout = () => {
    return async(dispatch ) => {
       await firebase.auth().signOut();
       dispatch(logout());
       dispatch(noteLogout());  
    }
}

export const logout = () => ({
    type: types.logout
})

