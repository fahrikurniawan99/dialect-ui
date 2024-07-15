import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "dialect-ui";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Main: Story = {
  args: {
    message: "This is an button!",
  },
};
