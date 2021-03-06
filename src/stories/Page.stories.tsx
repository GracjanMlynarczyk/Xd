import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as HeaderStories from './Header.stories';
import { Page } from './Page';

export default {
  title: 'Example/Page',
  component: Page,
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <Page user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  ...HeaderStories.LoggedIn.args,
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {
  ...HeaderStories.LoggedOut.args,
};
