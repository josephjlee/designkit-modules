import React from 'react';
import { storiesOf } from '@storybook/react';
import './index.scss';

storiesOf('Tooltips', module)
  .add('Basic tooltips', () => (
    <div class="flex flex-row">
      <div class="pa3 mr3 ba">
        <span class="tooltipped tooltipped-n" aria-label="This is the tooltip from the north">Tooltip North</span>
      </div>
      <div class="pa3 mr3 ba">
        <span class="tooltipped tooltipped-e" aria-label="This is the tooltip from the east">Tooltip East</span>
      </div>
      <div class="pa3 mr3 ba">
        <span class="tooltipped tooltipped-s" aria-label="This is the tooltip from the south">Tooltip South</span>
      </div>
      <div class="pa3 mr3 ba">
        <span class="tooltipped tooltipped-w" aria-label="This is the tooltip from the west">Tooltip West</span>
      </div>
    </div>
  ));
