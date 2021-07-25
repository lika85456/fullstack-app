import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AppBar from './AppBar';
import { HashRouter } from 'react-router-dom';


export default {
    title: 'Client/AppBar',
    component: AppBar,
    decorators: [story => <HashRouter>{story()}</HashRouter>]
} as ComponentMeta<typeof AppBar>;

const Template: ComponentStory<typeof AppBar> = (args) => <AppBar {...args} />;

export const Default = Template.bind({});
Default.args = {

};
