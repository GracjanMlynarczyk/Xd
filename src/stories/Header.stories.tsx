import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: 'John Doe',
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
