import React from 'react';
import './ExploreContainer.css';
import { IonItem, IonLabel, IonInput, IonGrid, IonRow, IonButton, IonCol } from '@ionic/react';
import { Link } from 'react-router-dom';
interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container ion-padding signIn">
      <form method="get" >
        <IonItem>
          <IonLabel position="floating">Username or email address</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput></IonInput>
        </IonItem>
        <IonGrid >
          <IonRow>
            <IonButton className="form-button" type="submit" color="primary">
              Log In
            </IonButton>
          </IonRow>
          <IonRow >
            <Link to="/" className="text-center"><i>Forget Password</i></Link>
          </IonRow>
        </IonGrid>
      </form>
      <div className="md-text">
        <span><hr /></span>
        <span>OR</span>
        <span><hr /></span> 
      </div>
      <IonButton className="create-button" color="none">
              Create New Account
        </IonButton>
    </div>
  );
};

export default ExploreContainer;
