import { IonButton, IonButtons,IonIcon, IonContent, IonHeader, IonItem, IonMenu, IonMenuButton, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, useIonRouter } from "@ionic/react";
import { Redirect, Route } from "react-router";
import {homeOutline, informationCircleOutline, logOutOutline} from "ionicons/icons";
import Home from "./Home";
import About from "./About";

const Menu: React.FC = () => {

    const path = [
        {name : 'Home' , url:'/app/home', icon:homeOutline},
        {name : 'About' , url:'/app/about', icon:informationCircleOutline}
    ]
    
      
    
   return(
    <IonPage>
       <IonSplitPane contentId="main">
        <IonMenu contentId="main">

            <IonHeader>               
                <IonToolbar>
                    <IonTitle>
                        Menu
                    </IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>

                {path.map((item,index) => (
                    <IonMenuToggle key={index}>
                        <IonItem routerLink={item.url} routerDirection="forward">
                            <IonIcon icon={item.icon} slot="start">
                                {item.name}
                            </IonIcon>
                        </IonItem>
                    </IonMenuToggle>
                ))}
                <IonButton routerLink="/" routerDirection="back" expand= "full">
                <IonIcon icon={logOutOutline} slot= "start" ></IonIcon>
                Logout
                </IonButton>

            </IonContent>
        </IonMenu>

        <IonRouterOutlet id="main">
            <Route exact path="/app/Home" component ={Home}/>
              <Route exact path="/app/About" component ={About}/>

            <Route exact path="/app">
                 <Redirect to="/app/Home" />
                  
                   
            </Route>

        </IonRouterOutlet>

       </IonSplitPane>
    </IonPage>

   );

};
export default Menu;