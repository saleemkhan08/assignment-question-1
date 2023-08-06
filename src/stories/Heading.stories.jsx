import React from "react";

import { Heading } from "./Heading";

export default {
    title: 'Ashish/Heading',
    component: Heading,
    argsTypes: {
        color: { control: 'color' },
    },
};

const Template = (args) => <Heading {...args}/>;


export const Small = Template.bind({});
Small.args = {
    size: 'small',
    heading: 'Head',
}

export const Medium = Template.bind({});
Medium.args = {
    size: 'medium',
    heading: 'Head',
}

export const Large = Template.bind({});
Large.args = {
    size: 'large',
    heading: 'Head',
}
