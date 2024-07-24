import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import { MinusIcon } from "@heroicons/react/16/solid";

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
export const CustomIcon: Story = {
  args: {
    icon: <MinusIcon />,
  },
};
