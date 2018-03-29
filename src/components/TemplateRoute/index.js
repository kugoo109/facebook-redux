import React from 'react';
import { Route } from 'react-router';

import TemplateComponent from './TemplateComponent';

function TemplateRoute({ template: Template, component: Component, requireAuth, ...rest }) {
  return (
    <Route {...rest} component={TemplateComponent(Template, Component, requireAuth)} />
  );
}

export default TemplateRoute;
