import {
  IonApp,
  IonRouterOutlet,
  IonSplitPane,
  setupIonicReact,
} from '@ionic/react';

import { IonReactRouter } from '@ionic/react-router';
import { Navigate, Route } from 'react-router-dom';

import Menu from './components/Menu';

import Dashboard from './pages/Dashboard';
import Dev from './pages/Dev';
import Product from './pages/Product';
import About from './pages/About';

import './global.css';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>

        <IonSplitPane contentId="main">

          <Menu />

          <IonRouterOutlet id="main">

            <Route
              path="/"
              element={<Dashboard />}
            />


            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            <Route
              path="/dev"
              element={<Dev />}
            />


            <Route
              path="/product"
              element={<Product/>}
            />

               <Route
              path="/about"
              element={<About/>}
            />


          </IonRouterOutlet>

        </IonSplitPane>

      </IonReactRouter>
    </IonApp>
  );
};

export default App;