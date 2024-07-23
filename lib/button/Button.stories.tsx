import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
  
};

export default meta;

type Story = StoryObj<typeof Button>;

export const PrimaryColor: Story = {
  args: { children: "Primary Button", color: "primary" },
};

export const SecondaryColor: Story = {
  args: { children: "Secondary Button", color: "secondary" },
};

export const DarkColor: Story = {
  args: { children: "Dark Button", color: "dark" },
};
