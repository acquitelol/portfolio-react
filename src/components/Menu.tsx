import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { heartOutline, homeOutline, homeSharp, heartSharp, flameOutline, flameSharp, folderOpenOutline, folderOpenSharp} from 'ionicons/icons';
import './Menu.css';
import packageJson from './../../package.json'

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: 'Home',
    url: '/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'About Me',
    url: '/about',
    iosIcon: flameOutline,
    mdIcon: flameSharp
  },
  {
    title: 'Projects',
    url: '/projects',
    iosIcon: folderOpenOutline,
    mdIcon: folderOpenSharp
  },
  {
    title: 'Contact',
    url: '/contact',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  }
];

const routes: any = []
appPages.forEach((appPage) => {
    routes.push(appPage.url)
}) as any;


const Menu: React.FC = () => {

  const location = useLocation();

  const checkFor = () => {
    let checked = 0
    routes.forEach((key: any, index: any) => {
      console.log(location.pathname, key)
      if (location.pathname !== key) {checked++};
    })

    console.log(checked)
    if (checked===4) {window.location.reload()}
  }
  
  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <div data-type='title'>
            <IonListHeader id='logo'>Acquite</IonListHeader>
            <IonNote>Welcome to my Portfolio.</IonNote>
          </div>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false} onClick={() => checkFor()}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="forward" lines="inset" detail={true} button={true} type='button'>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
          
        </IonList>
        <div id='footer'>Created by Acquite. Version {packageJson.version}</div>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
