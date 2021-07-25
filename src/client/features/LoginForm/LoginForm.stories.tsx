import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {LoginForm} from './LoginForm';
import { UserStatus } from '../../reducers/UserReducer';

export default {
    title: 'Client/LoginForm',
    component: LoginForm,
    decorators: [story => <div>{story()}</div>],
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {
    status:UserStatus.LOGGED_OFF,
    error:null
};

export const Loading = Template.bind({});
Loading.args = {
    status:UserStatus.LOGGING_IN,
    error:null
};

export const Error = Template.bind({});
Error.args = {
    status:UserStatus.LOGGED_OFF,
    error:"500: Cannot login."
};