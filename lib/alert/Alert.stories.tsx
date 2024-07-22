import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "dialect-ui";

const meta: Meta<typeof Alert> = {
  component: Alert,
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Main: Story = {
  args: {
    message: "This is an alert!",
  },
};

export const Error: Story = {
  args: {
    message: "This is an alert!",
    color: "error",
  },
};

export const Success: Story = {
  args: {
    message: "This is an alert!",
    color: "success",
  },
};

export const Info: Story = {
  args: {
    message: "This is an alert!",
    color: "info",
  },
};

export const Warning: Story = {
  args: {
    message: "This is an alert!",
    color: "warning",
  },
};