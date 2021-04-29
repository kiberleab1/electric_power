import React from 'react';
import { Route, Switch } from 'react-router-dom';

import DefaultDashboard from '../../../Dashboards/OilGas/index';
import CryptoDashboardEdit from '../../../Dashboards/CryptoTableEdit/index';

export default () => (
  <Switch>
    <Route exact path="/dashboard_oil_gas" component={DefaultDashboard} />
    <Route path="/dashboard_crypto/edit/:index" component={CryptoDashboardEdit} />
  </Switch>
);
