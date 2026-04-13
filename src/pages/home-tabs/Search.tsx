
import { IonButtons, IonContent, IonSearchbar, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react";
const Search: React.FC = () => {
   return(
    <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonButtons>
                    <IonMenuButton>

                    </IonMenuButton>
                </IonButtons>
                <IonTitle>Search</IonTitle>
                <IonSearchbar></IonSearchbar>
            </IonToolbar>
        </IonHeader>
        <IonContent fullscreen >

        </IonContent>
    </IonPage>

   );

}

export default Search;