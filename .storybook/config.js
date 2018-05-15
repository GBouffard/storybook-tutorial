import { configure, addDecorator } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import React from 'react';

addDecorator(withKnobs);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
