import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CancelTransferModal from ".";

export default {
  title: "organisms/CancelTransferModal",
  component: CancelTransferModal,
} as Meta<typeof CancelTransferModal>;

const template: StoryFn<typeof CancelTransferModal> = (args) => (
  <CancelTransferModal {...args} />
);

export const CancelTransfer = template.bind({});
CancelTransfer.args = {
  accounts: ["4656", "4242"],
  transferId: "3227627272",
  username: "Ross Gener",
};
