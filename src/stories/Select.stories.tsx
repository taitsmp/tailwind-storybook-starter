import React from "react";
import { Meta, Story } from "@storybook/react";
import { StoryLayout } from "../components/StoryLayout";
import { Figma } from "../data";
import { Select, SelectProps, ISelectOption } from "../components/Select";
import { FiDollarSign } from "react-icons/fi";

const meta: Meta = {
  title: "Select",
  component: Select,
  parameters: {
    controls: {
      expanded: true,
    },
    design: {
      type: "figma",
      url: Figma.Select,
    },
  },
};

export default meta;

interface Props extends SelectProps<string> {
  darkMode: boolean;
}

const options = [
  {
    id: "tl",
    value: "Tait Larson",
  },
  {
    id: "al",
    value: "Abby Larson",
  },
] as ISelectOption<string>[];

const StorySelect: Story<Props> = (args) => {
  // should the component manage the state?
  // does this only work if

  return (
    <StoryLayout {...args} noPadding={false}>
      <div>
        <Select {...args}></Select>
      </div>
    </StoryLayout>
  );
};

export const Default = StorySelect.bind({});
Default.args = {
  options,
  initial: null,
  emptyButton: (
    <div>
      <FiDollarSign /> Select a price
    </div>
  ),
};
