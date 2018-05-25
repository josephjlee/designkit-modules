import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import '../src/modules/designkit-global/index.scss';
import '../src/modules/designkit-typography/index.scss';
import '../src/modules/designkit-utilities/index.scss';

addDecorator(story => (
  <div className='pa4 sans'>
    {story()}
  </div>
));

const req = require.context("../src/modules", true, /stories.*\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
