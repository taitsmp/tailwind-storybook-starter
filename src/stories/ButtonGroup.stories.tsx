import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { StoryLayout } from "../components/StoryLayout";
import { ButtonGroup, ButtonGroupProps } from "../components/ButtonGroup";
import { Figma } from "../data";
import { options1 } from "../data/options";
import { options2 } from "../data/options";
import { FiList, FiGrid } from "react-icons/fi";

const meta: Meta = {
  title: "ButtonGroup",
  component: ButtonGroup,
  parameters: {
    controls: {
      expanded: true,
    },
    design: {
      type: "figma",
      url: Figma.ButtonGroup,
    },
  },
};

export default meta;

interface Props extends ButtonGroupProps {
  darkMode: boolean;
}

const StoryButtonGroup: Story<Props> = (args) => {
  const [active1, setActive1] = useState<string>(options1[1].value);
  const [active2, setActive2] = useState<string>(options2[1].value);
  const [view, setView] = useState<ViewOption>("list");

  type ViewOption = "list" | "grid";

  const handleActiveItem = (value: string) => {
    setActive1(value);
  };

  const handleActiveItem2 = (value: string) => {
    setActive2(value);
  };
  const handleViewOption = (value: string) => {
    setView(value as ViewOption);
  };

  return (
    <StoryLayout {...args} className="space-y-4">
      <div>
        <ButtonGroup
          activeOption={active1}
          setActiveOption={handleActiveItem}
          options={options1}
        ></ButtonGroup>
      </div>
      <div>
        <ButtonGroup
          activeOption={active2}
          setActiveOption={handleActiveItem2}
          options={options2}
        ></ButtonGroup>
      </div>
      <div>
        <ButtonGroup
          activeOption={view}
          setActiveOption={handleViewOption}
          options={[
            {
              content: <FiList size={20} />,
              value: "list",
            },
            {
              content: <FiGrid size={20} />,
              value: "grid",
            },
          ]}
        ></ButtonGroup>
      </div>
    </StoryLayout>
  );
};

export const Default = StoryButtonGroup.bind({});
