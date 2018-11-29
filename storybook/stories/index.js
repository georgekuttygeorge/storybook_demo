import React from 'react';
import Button from './Button/index';
import {storiesOf} from '@storybook/react-native';
import {action} from '@storybook/addon-actions';
import {boolean, color, text, withKnobs} from '@storybook/addon-knobs';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('with knobs', () => (
        <Button onClick={action('Login')} title={text('Name', 'Sign In')} color={color('buttonColor', 'blue')}
                type={boolean('Fetch', false)}/>
    ));
