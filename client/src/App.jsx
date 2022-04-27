import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ToastProvider } from 'react-toast-notifications';
import { Auth0Provider } from '@auth0/auth0-react';
import { AuthProvider } from "./contexts/auth.context";
import { UIProvider } from "./contexts/ui.context";
import { EventsProvider } from './contexts/events.context';

// CSS
import './App.css';

// PAGES
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import MakeEvent from './pages/MakeEvent/MakeEvent';
import EditEvent from './pages/EditEvent/EditEvent';
import FindEvent from './pages/FindEvent/FindEvent';
import ViewEvent from './pages/ViewEvent/ViewEvent';
import NotFound from './pages/NotFound/NotFound';

// COMPONENTS
import Auth0Wrapper from './components/Auth0Wrapper/Auth0Wrapper';
// import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

import history from './utils/history';
import { getConfig } from './config';

const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo
      ? appState.returnTo
      : window.location.pathname,
  );
};

const config = getConfig();
const providerConfig = {
  domain: config.domain,
  clientId: config.clientId,
  ...(config.audience ? { audience: config.audience } : null),
  redirectUri: `${window.location.origin}/dashboard/`,
  onRedirectCallback,
};

function App() {
  return (
    <Router>
      <Auth0Provider {...providerConfig}>
        <ToastProvider autoDismiss={true}>
          <AuthProvider>
            <UIProvider>
              <EventsProvider>
                  <Auth0Wrapper>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/dashboard" component={Dashboard} />
                      <Route path="/make-event/" component={MakeEvent} />
                      <Route path="/edit-event/:id" component={EditEvent} />
                      <Route path="/find-event" component={FindEvent} />
                      <Route path="/view-event/:id" component={ViewEvent} />
                      <Route path="*" component={NotFound} />
                    </Switch>
                  </Auth0Wrapper>
              </EventsProvider>
            </UIProvider>
          </AuthProvider>
        </ToastProvider>
      </Auth0Provider>
    </Router>
  );
}

export default App;
