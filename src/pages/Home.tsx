import {
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonIcon,
  IonLabel
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import { homeOutline, search, star } from "ionicons/icons";


import Feed from "./home-tabs/Feed";
import Search from "./home-tabs/Search";
import Favorites from "./home-tabs/Favorites";

const Home: React.FC = () => {
  const tabs = [
    { name: "Feed", url: "/app/home/feed", icon: homeOutline },
    { name: "Search", url: "/app/home/search", icon: search },
    { name: "Favorites", url: "/app/home/favorites", icon: star },
  ];

  return (
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/app/home/feed" component={Feed} />
          <Route exact path="/app/home/search" component={Search} />
          <Route exact path="/app/home/favorites" component={Favorites} />
          <Route exact path="/app/home">
            <Redirect to="/app/home/feed" />
          </Route>
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          {tabs.map((item, index) => (
            <IonTabButton key={index} tab={item.name} href={item.url}>
              <IonIcon icon={item.icon} />
              <IonLabel>{item.name}</IonLabel>
            </IonTabButton>
          ))}
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
};

export default Home;
