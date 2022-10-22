import React from "react";
import { Meta, Story } from "@storybook/react";
import { StoryLayout } from "../components/StoryLayout";

import { ColorBox } from "../components/ColorBox";

import { colors, Figma } from "../data";

const meta: Meta = {
  title: "Colors",
  parameters: {
    controls: {
      expanded: true,
    },
    design: {
      type: "figma",
      url: Figma.Colors,
    },
  },
};

export default meta;

interface Props {
  darkMode: boolean;
}

export const StoryColors: Story<Props> = (args) => (
  <StoryLayout
    {...args}
    className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-11"
  >
    {colors.map((color) => (
      <ColorBox key={color.bgClass} color={color} />
    ))}
  </StoryLayout>
);
