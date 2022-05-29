import { IonApp, IonRouterOutlet, IonSplitPane, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

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

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id='main'>
            <Route path='/' exact={true}>
              <Redirect to='/pages/home' />
            </Route>
            <Route path='/pages/:name' exact={true}>
              <Redirect to={window.location.pathname} />
              <Page />
            </Route>
            <Route path="/pages/home" exact={true}>
              <Redirect to='/pages/home' />
              <Home />
            </Route>
            <Route path="/pages/about" exact={true}>
              <Redirect to='/pages/about' />
              <About />
            </Route>
            <Route path="/pages/projects" exact={true}>
              <Redirect to='/pages/projects' />
              <Projects />
            </Route>
            <Route path="/pages/contact" exact={true}>
              <Redirect to='/pages/contact' />
              <Contact />
            </Route>
            
            
          </IonRouterOutlet>
          
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
