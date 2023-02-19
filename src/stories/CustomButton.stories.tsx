import React from "react";
import { Button, ButtonProps } from "@mui/material";
import { ComponentStory, ComponentMeta } from "@storybook/react";

interface CustomButtonProps extends ButtonProps {
  label: string;
}

const StoryButton: React.FC<CustomButtonProps> = ({ label, ...muiProps }) => {
  return <Button {...muiProps}>{label}</Button>;
};

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "MUI Bucket/Button",
  component: StoryButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: 'color' },
    label: { control: "text" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof StoryButton> = (args) => (
  <Button {...args}>{args.label}</Button>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Secondary Button",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Large Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Small Button",
};
