/* eslint-disable global-require */

import {AppRegistry} from 'react-native';
import {configure, getStorybookUI} from '@storybook/react-native';

// import stories
configure(() => {
    require('./stories');
}, module);

// This assumes that storybook is running on the same host as your RN packager,
// to set manually use, e.g. host: 'localhost' option
const StorybookUI = getStorybookUI({});
AppRegistry.registerComponent('storybook', () => StorybookUI);
export default StorybookUI;
