import React from 'react';
import { storiesOf } from '@storybook/react';
import './index.scss';

storiesOf('Buttons', module)
  .add('btn', () => (
    <button className='btn'>Basic Button</button>
  ))
  .add('btn-default', () => (
    <div>
      <div className='mb3'>
        <button className='btn btn-default'>Default Button</button>
      </div>
      <div className='mb3'>
        <button className='btn btn-default hover'>Hover State</button>
      </div>
      <div className='mb3'>
        <button className='btn btn-default active'>Active State</button>
      </div>
      <div>
        <button className='btn btn-default disabled'>Disabled State</button>
      </div>
    </div>
  ))
  .add('btn-primary', () => (
    <div>
      <div className='mb3'>
        <button className='btn btn-primary'>Primary Button</button>
      </div>
      <div className='mb3'>
        <button className='btn btn-primary hover'>Hover State</button>
      </div>
      <div className='mb3'>
        <button className='btn btn-primary active'>Active State</button>
      </div>
      <div>
        <button className='btn btn-primary disabled'>Disabled State</button>
      </div>
    </div>
  ))
  .add('btn-success', () => (
    <div>
      <div className='mb3'>
        <button className='btn btn-success'>Success Button</button>
      </div>
      <div className='mb3'>
        <button className='btn btn-success hover'>Hover State</button>
      </div>
      <div className='mb3'>
        <button className='btn btn-success active'>Active State</button>
      </div>
      <div>
        <button className='btn btn-success disabled'>Disabled State</button>
      </div>
    </div>
  ))
  .add('btn-danger', () => (
    <div>
      <div className='mb3'>
        <button className='btn btn-danger'>Danger Button</button>
      </div>
      <div className='mb3'>
        <button className='btn btn-danger hover'>Hover State</button>
      </div>
      <div className='mb3'>
        <button className='btn btn-danger active'>Active State</button>
      </div>
      <div>
        <button className='btn btn-danger disabled'>Disabled State</button>
      </div>
    </div>
  ))
  .add('btn-lg', () => (
    <div>
      <button className='btn btn-lg'>Large Button</button>
    </div>
  ))
  .add('btn-sm', () => (
    <div>
      <button className='btn btn-sm'>Small Button</button>
    </div>
  ))
  .add('btn-group', () => (
    <div className='btn-group'>
      <button className='btn'>Left</button>
      <button className='btn'>Center</button>
      <button className='btn'>Right</button>
    </div>
  ))
  .add('btn-toolbar', () => (
    <div className='btn-toolbar'>
      <div className='btn-group mr2'>
        <button className='btn'>Button</button>
      </div>
      <div className='btn-group mr2'>
        <button className='btn'>Left</button>
        <button className='btn'>Center</button>
        <button className='btn'>Right</button>
      </div>
      <div className='btn-group'>
        <button className='btn'>Button</button>
      </div>
    </div>
  ))
