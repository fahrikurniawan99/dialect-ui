import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "../lib/avatar/Avatar";

const meta: Meta<typeof Avatar> = {
  component: Avatar,
};

export default meta;

type Story = StoryObj<typeof Avatar>;

export const Main: Story = {
  args: {
    src: "https://via.placeholder.com/150",
    alt: "Avatar",
  },
};
