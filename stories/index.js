import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import Button from './Button';
import Welcome from './Welcome';
import Name from './Name';

storiesOf('Welcome', module)
  .add('to Storybook', () => (
    <Welcome
      showApp={linkTo('Button')}/>
  ));

storiesOf('Button', module)
  .add('with text', () => (
    <Button
      onClick={action('clicked')}>
      Hello Button
    </Button>
  ))
  .add('with some emoji', () => (
    <Button
      onClick={action('clicked')}>
      😀 😎 👍 💯
    </Button>
  ));

storiesOf('Components', module)
  .add('Name', () => (
    <div>
      <h2>Normal</h2>
      <Name
        name="Guillaume" />

      <h2>Highlighted</h2>
      <Name
        name="Guillaume"
        type="highlight" />

      <h2>Disabled</h2>
      <Name
        name="Guillaume"
        type="disabled" />
    </div>
  ))