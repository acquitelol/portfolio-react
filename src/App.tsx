import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact, IonPage } from '@ionic/react';
import React, { useState, useEffect } from 'react';
import { Redirect, Route, useLocation } from 'react-router-dom';

/* Required Page TypeScript Files */
import Menu from './components/Menu';
import Page from './pages/Page';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import InvalidContainer from './components/InvalidContainer'

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const getName = () => {
  let name = window.location.pathname
  let formatted = name.slice(1).replaceAll('%20', ' ')

  if (formatted==='') return "Invalid"

  let one = formatted.split('', 1)
  let two = [one[0], formatted.slice(1)]
  one[0] = one[0].toUpperCase();
  let final = one[0]+two[1]

  return final
}

setupIonicReact()

const App: React.FC = () => {
  let location = useLocation()
  const [name, setName] = useState(getName())

  useEffect(() => {
    setName(getName())
  }, [location])

  return (
    <IonApp>
      <IonPage>
          <IonSplitPane contentId="main">
            <Menu />
            <IonRouterOutlet id='main'>

              {/*Invalid Path */}
              <Route path='/:name' exact={true}>
                <Redirect to={window.location.pathname} />
                <IonPage>
                  <Page name={name} object={<InvalidContainer name={name} />}/>
                  
                </IonPage>
              </Route>

              {/*Default Path */}
              <Route path='/' exact={true}>
                <Redirect to='/home' />
                <IonPage>
                  <Page name={name} object={<Home />} />
                </IonPage>
              </Route>

              {/*Home Path */}
              <Route path="/home" exact={true}>
                <Redirect to='/home' />
                <IonPage>
                  <Page name={name} object={<Home />} />
                </IonPage>
              </Route>

              {/*About Path */}
              <Route path="/about" exact={true}>
                <Redirect to='/about' />
                <IonPage>
                  <Page name={name} object={<About />} />
                </IonPage>
              </Route>

              {/*Projects Path */}
              <Route path="/projects" exact={true}>
                <Redirect to='/projects' />
                <IonPage>
                  <Page name={name} object={<Projects />} />
                </IonPage>
              </Route>

              {/*Contact Path */}
              <Route path="/contact" exact={true}>
                <Redirect to='/contact' />
                <IonPage>
                  <Page name={name} object={<Contact />} />
                </IonPage>
              </Route>

            </IonRouterOutlet>
          </IonSplitPane>
      </IonPage>
    </IonApp>
  );
};

export default App;
