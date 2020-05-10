import React,{useState} from 'react';
import { IonGrid, IonRow, IonItem, IonLabel, IonInput, IonHeader, IonToolbar, IonTitle, IonButton, IonDatetime, IonContent, IonText } from '@ionic/react';
import { Link } from 'react-router-dom';
import Header from '../components/header';
import './Home.css';
const SignUp : React.FC=()=>{
    const [page,setPage] = useState<'page1'|'page2'|'page3'>('page1');
    const changePage=(pageN:'page1'|'page2'|'page3')=>{
        setPage(pageN);
    }
    return(
        <div>
            {page==='page1' &&(
                <form onSubmit={()=>changePage('page2')}>
                    <Header />
                    <div className="inpt">
                        <IonItem>
                            <IonLabel position="floating">First Name</IonLabel>
                            <IonInput required></IonInput>
                        </IonItem>
                        <IonItem>
                            <IonLabel position="floating">Surname</IonLabel>
                            <IonInput required></IonInput>
                        </IonItem>
                    
                    </div>
                    <IonButton type='submit'> Next</IonButton>
                </form>
            )}
            {page==='page2' &&(<div>
                <Header />
                <form onSubmit={()=>changePage('page3')}>
                        <IonText>What's your data of birth?</IonText>
                        <IonDatetime displayFormat="MM-DD-YYYY" min="1994-03-14" max="2012-12-09" value="1994-03-14" ></IonDatetime>   
                        <div>
                            <IonButton type='submit'> Next</IonButton>
                        </div>
                </form> </div>
            )}
        </div>
    );
}
export default SignUp;