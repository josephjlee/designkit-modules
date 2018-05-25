import React from 'react';
import { storiesOf } from '@storybook/react';
import './index.scss';

storiesOf('Labels', module)
  .add('Label', () => (
    <div className="mb4">
      <span className="label">Default Label</span>
    </div>
  ))
  .add('Label Small', () => (
    <div className="mb4">
      <span className="label label--small">Small Label</span>
    </div>
  ))
  .add('Label Theme Green', () => (
    <div className="mb4">
      <span className="label label--green">Green Label</span>
    </div>
  ))
  .add('Label Theme Yellow', () => (
    <div className="mb4">
      <span className="label label--yellow">Yellow Label</span>
    </div>
  ))
  .add('Label Theme Red', () => (
    <div className="mb4">
      <span className="label label--red">Red Label</span>
    </div>
  ))
  .add('Label Theme Orange', () => (
    <div className="mb4">
      <span className="label label--orange">Orange Label</span>
    </div>
  ))
  .add('Label Theme Purple', () => (
    <div className="mb4">
      <span className="label label--purple">Purple Label</span>
    </div>
  ))
  .add('Label Theme Blue', () => (
    <div className="mb4">
      <span className="label label--blue">Blue Label</span>
    </div>
  ))
  .add('Label Theme Dark', () => (
    <div className="mb4">
      <span className="label label--sith">Dark Label</span>
    </div>
  ))
  .add('Label Outline', () => (
    <div>
      <div className="mb3">
        <span className="label label--outline">Outline Label</span>
      </div>
      <div>
        <span className="label label--small label--outline">Small Outline Label</span>
      </div>
    </div>
  ));
