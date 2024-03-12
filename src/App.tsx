import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/home/home';
import Auth from './pages/auth/auth.js';
import Signin from './pages/signin/signin.js';
import Information from './pages/register/informations/information.js';
import Hobbies from './pages/register/hobbies/hobbies.js';
import SetGoal from './pages/register/setGoal/setGoal.js';
import Loading from './pages/register/loading/loading.js';
import Challenge from './pages/challenge/challenge.js';
import Discover from './pages/discover/discover.js';
import Friends from './pages/friends/friends.js';
import Settings from './pages/settings/settings.js';

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
import './theme/global.css';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/auth" />
        </Route>
        <Route exact path="/auth">
          <Auth />
        </Route>
        <Route exact path="/signin">
          <Signin />
        </Route>
        <Route exact path="/signup/informations">
          <Information />
        </Route>
        <Route exact path="/signup/hobbies">
          <Hobbies />
        </Route>
        <Route exact path="/signup/goal">
          <SetGoal />
        </Route>
        <Route exact path="/signup/loading">
          <Loading />
        </Route>
        <Route exact path="/discover">
          <Discover />
        </Route>
        <Route exact path="/friends">
          <Friends />
        </Route>
        <Route exact path="/challenge">
          <Challenge />
        </Route>
        <Route exact path="/settings">
          <Settings />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
