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
    url: '/pages/home',
    iosIcon: homeOutline,
    mdIcon: homeSharp
  },
  {
    title: 'About Me',
    url: '/pages/about',
    iosIcon: flameOutline,
    mdIcon: flameSharp
  },
  {
    title: 'Projects',
    url: '/pages/projects',
    iosIcon: folderOpenOutline,
    mdIcon: folderOpenSharp
  },
  {
    title: 'Contact',
    url: '/pages/contact',
    iosIcon: heartOutline,
    mdIcon: heartSharp
  }
];


const Menu: React.FC = () => {
  const location = useLocation();

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
              <IonMenuToggle key={index} autoHide={false}>
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
