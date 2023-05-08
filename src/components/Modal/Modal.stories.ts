import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    $backgroundColor: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    isModalVisible: true,
    $position: "bottom",
    children: "This is sample Modal",
  },
};
