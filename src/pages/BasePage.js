import React, { Component, useEffect, useState } from 'react';

import { auth, db } from '../utils/firebase';
import { User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';

class BasePage extends Component{
    constructor(props){
        super(props);
        this.state = {
            userInfo: undefined 
        }
    }

    signOut(){
    }

    onLoggedIn(user) {
        this.setState({userInfo: user});
    }

    componentDidMount() {
        auth.onAuthStateChanged(async (user) => {
            
            if (user) {
                const usersRef = doc(db, "users", user.uid);
                const docSnap  = await getDoc(usersRef);
                if(docSnap.exists()){
                    const data = docSnap.data();
                    if(data.lat && data.long && data.address) {
                        this.setState({userInfo: data});
                        this.onLoggedIn(data);
                    }    
                }
            }else{
                this.props.navigate('/auth/login')
            }
        });
    }
    render() {

        return (
           <>
           </>
        )
    }
}

export default BasePage;