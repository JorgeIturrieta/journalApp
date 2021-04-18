import firebase from 'firebase/app';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch
} from "react-router-dom";
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [checking, setChecking] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName));                
                dispatch(startLoadingNotes(user.uid));
                setIsLoggedIn(true);
             
              
            } else {
                setIsLoggedIn(false);
            }
            setChecking(false);
        })

    }, [dispatch, setChecking, setIsLoggedIn])

    if (checking) {
        return (
            <h1>Please wait...</h1>
        )
    }
    return (
        <Router>
            <div>

                {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
                <Switch>
                    <PublicRoute
                        path="/auth"
                        component={AuthRouter}
                        isAuthenticated={isLoggedIn}
                    />
                    <PrivateRoute
                        path="/"
                        component={JournalScreen}
                        isAuthenticated={isLoggedIn}
                    />



                    {/*       <Route 
                        path="/auth" 
                        component = {AuthRouter} 
                    />
                    <Route 
                        exact 
                        path="/" 
                        component = {JournalScreen}
                    />

                    <Redirect to="/auth/login" />  */}
                </Switch>
            </div>
        </Router>
    )
}
