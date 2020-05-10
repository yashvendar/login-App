import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import fbImg from '../components/images/fb-mess.jpg';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <IonPage className="scroll">
      
      
      <IonContent>
      <div className="img-md">
                <img src={fbImg} alt="User" className="userImg"/></div>
        <div id="langMenu">
          <Link to="/">English </Link>
          <Link to="/">&#8226; हिन्दी</Link>
          <Link to="/"> &#8226;More..</Link>
        </div>
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;
