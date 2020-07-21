
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import Cookies from 'js-cookie';

import {
  MainLogin, MainSignup, Signup1, Loader, ForgetPassword, OperationsOverview, Mobile,
  ImportClearance1, ImportClearance2, Transport, Finance, Operations, Marine,
  Admin, HomeOverview, ImportClearance3, CustomClearance, Profile, NotFound
} from './import/.'

import { logInUserWithOauth, loadMe } from './store/actions/authActions';

const App = ({ logInUserWithOauth, auth, loadMe }) => {
  useEffect(() => {
    loadMe();
  }, [loadMe]);

  //redosled hookova
  useEffect(() => {
    if (window.location.hash === '#_=_') window.location.hash = '';

    const cookieJwt = Cookies.get('x-auth-cookie');
    if (cookieJwt) {
      Cookies.remove('x-auth-cookie');
      logInUserWithOauth(cookieJwt);
    }
  }, []);

  useEffect(() => {
    if (!auth.appLoaded && !auth.isLoading && auth.token && !auth.isAuthenticated) {
      loadMe();
    }
  }, [auth.isAuthenticated, auth.token, loadMe, auth.isLoading, auth.appLoaded]);

  return (
    <>
      {auth.appLoaded ? (
        <Switch>
          <Route path="/notfound" component={NotFound} />
          <Route path="/dashboard" component={HomeOverview} />
          <Route path="/login" component={MainLogin} />
          <Route path="/forget-password" component={ForgetPassword} />
          <Route path="/dashboard" component={HomeOverview} />
          <Route path="/mobile" component={Mobile} />
          <Route path="/transport" component={Transport} />
          <Route path="/finance" component={Finance} />
          <Route path="/operations" component={Operations} />
          <Route path="/marine" component={Marine} />
          <Route path="/admin" component={Admin} />
          <Route path="/operations-overview" component={OperationsOverview} />
          <Route path="/import-custom-clearance" component={ImportClearance1} />
          <Route path="/import-custom-clearance-2" component={ImportClearance2} />
          <Route path="/import-custom-clearance-3" component={ImportClearance3} />
          <Route path="/file-saved" component={CustomClearance} />
          <Route path="/loader" component={Loader} />
          <Route exact path="/:username" component={Profile} />
          <Route exact path="/" component={MainSignup} />
          <Route component={NotFound} />
        </Switch>
      ) : (
          <Loader />
        )}
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default compose(connect(mapStateToProps, { logInUserWithOauth, loadMe }))(App);
