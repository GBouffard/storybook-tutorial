import React from 'react';
import { storiesOf, action, linkTo } from '@kadira/storybook';
import { text, select } from '@kadira/storybook-addon-knobs';
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
  .add('with link', () => (
    <Button
      onClick={linkTo('Components', 'Name')}>
      Go to Name
    </Button>
  ))
  .add('with some emoji', () => (
    <Button
      onClick={action('clicked')}>
      😀 😎 👍 💯
    </Button>
  ));

const types = {
  '': '',
  highlight: 'highlight',
  disabled: 'disabled'
};

storiesOf('Components', module)
  .addWithInfo(
    'Name with info', 
    `
    A component to display a colored name tag.
    `,
    () =>  (
      <Name
        name={text('Name', 'Guillaume')}
        type={select('Type', types)} />
    ),
    { inline: true }
  );
