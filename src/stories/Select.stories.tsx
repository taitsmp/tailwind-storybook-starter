import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { StoryLayout } from "../components/StoryLayout";
import { SelectV1, ISelectProps, ISelectOption } from "../components/Select";
import { FiDollarSign } from "react-icons/fi";
import { countries, dates, prices, Figma } from "../data";

const meta: Meta = {
  title: "Select",
  component: SelectV1,
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

interface Props extends ISelectProps<string> {
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

  const [selectedCountry, setSelectedCountry] = useState<IOption>(countries[0]);
  const [selectedDate, setSelectedDate] = useState<IOption>();
  const [selectedPrice, setSelectedPrice] = useState<IOption>();

  return (
    <StoryLayout darkMode={args.darkMode} className={"space-x-3 space-y-3"}>
      <SelectV1
        options={countries}
        selectedOption={selectedCountry}
        setSelectedOption={setSelectedCountry}
        placeholder="Select a Country"
        width="w-50"
      />
      <SelectV1
        options={prices}
        LeadingIcon={<FiDollarSign />}
        selectedOption={selectedDate}
        setSelectedOption={setSelectedDate}
        placeholder="Select a Date"
        width="w-50"
      />
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
