import { withBackgrounds } from '@storybook/addon-ondevice-backgrounds';
import { ViewDecorator } from './decorators/ViewDecorator';

export const decorators = [withBackgrounds, ViewDecorator];
export const parameters = {
  backgrounds: [
    { name: 'plain', value: 'white', default: true },
    { name: 'warm', value: 'hotpink' },
    { name: 'cool', value: 'deepskyblue' },
  ],
};
