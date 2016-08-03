/**
 * Created by Scott on 8/2/2016.
 */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

Meteor.startup(() => {
    ReactDOM.render(<App />, document.querySelector('.render-target'));
});