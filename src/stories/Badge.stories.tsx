import React from "react";
import { Meta, Story } from "@storybook/react";
import { StoryLayout } from "../components/StoryLayout";

import { Badge, BadgeProps } from "../components/Badge";

import { Figma } from "../data";
import { FiArrowRight, FiStar } from "react-icons/fi";
import classNames from "classnames";

const meta: Meta = {
  title: "Badges",
  component: Badge,
  parameters: {
    controls: {
      expanded: true,
    },
    design: {
      type: "figma",
      url: Figma.Badge,
    },
  },
};

export default meta;

interface Props extends BadgeProps {
  darkMode: boolean;
}

const StoryBadge: Story<Props> = (args) => (
  <StoryLayout {...args}>
    <div className={classNames("my-4")}>
      <Badge {...args}>Label</Badge>
    </div>
    <div className={classNames("my-4")}>
      <Badge {...args} LeadingIcon={<FiStar />}>
        Label
      </Badge>
    </div>
    <Badge {...args} TrailingIcon={<FiArrowRight />}>
      Label
    </Badge>
  </StoryLayout>
);

export const Default = StoryBadge.bind({});

Default.args = {
  variant: "primary",
  size: "md",
  darkMode: false,
};

// https://storybook.js.org/docs/react/writing-stories/parameters
Default.parameters = {
  controls: { exclude: ["LeadingIcon", "TrailingIcon", "className"] },
};
