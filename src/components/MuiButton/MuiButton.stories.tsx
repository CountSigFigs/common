import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import MuiButton from "./MuiButton";
import Stack from "@mui/material/Stack";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "ReactComponentLibrary/MuiButton",
    component: MuiButton,
} as ComponentMeta<typeof MuiButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof MuiButton> = (args) => <MuiButton {...args}>hello</MuiButton>;

export const Sandbox = Template.bind({});
Sandbox.args = {
    label: "Click me!",
};

export const Colors: ComponentStory<typeof MuiButton> = () => (
    <Stack spacing={2} maxWidth={300}>
        <MuiButton variant="contained" label="Primary" />
        <MuiButton variant="contained" color="secondary" label="Secondary" />
        <MuiButton variant="contained" color="success" label="Success" />
        <MuiButton variant="contained" color="error" label="Error" />
    </Stack>
)