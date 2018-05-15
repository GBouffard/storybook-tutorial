import { configure, addDecorator, setAddon } from '@kadira/storybook';
import { withKnobs } from '@kadira/storybook-addon-knobs';
import infoAddon from '@kadira/react-storybook-addon-info';
import React from 'react';

addDecorator(withKnobs);
setAddon(infoAddon);

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
