import React from 'react';
import {IonHeader,IonTitle,IonToolbar} from '@ionic/react';

import {Link} from 'react-router-dom';
import './ExploreContainer.css';
const Header:React.FC=props=>{
    return(
        <IonHeader>
            <IonToolbar>
                <IonTitle className="header">
                    <Link to='/'>&larr; Home</Link>
                </IonTitle>
            </IonToolbar>
        </IonHeader>
);
}
export default Header;