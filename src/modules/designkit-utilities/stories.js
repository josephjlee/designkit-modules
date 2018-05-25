import React from 'react';
import { storiesOf } from '@storybook/react';
import './index.scss';

storiesOf('Utilities', module)
  .add('ba', () => (
    <div className='ba pa4 shadow'>Basic Box</div>
  ))
