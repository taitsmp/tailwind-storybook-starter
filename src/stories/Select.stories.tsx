import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { StoryLayout } from "../components/StoryLayout";
import { Select, SelectProps, IOption } from "../components/Select";
import { FiDollarSign } from "react-icons/fi";
import { countries, dates, prices, Figma } from "../data";

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

interface Props extends SelectProps {
  darkMode: boolean;
}

const StorySelect: Story<Props> = (args) => {
  // should the component manage the state?
  // does this only work if

  const [selectedCountry, setSelectedCountry] = useState<IOption>(countries[0]);
  const [selectedDate, setSelectedDate] = useState<IOption>();
  const [selectedPrice, setSelectedPrice] = useState<IOption>();

  const handleSelectCountry = (value: string) => {
    const country = countries.find((p) => p.value == value) as IOption;
    setSelectedCountry(country);
  };

  const handleSelectDate = (value: string) => {
    const date = dates.find((p) => p.value == value) as IOption;
    setSelectedDate(date);
  };

  return (
    <StoryLayout darkMode={args.darkMode} className={"space-x-3 space-y-3"}>
      <Select
        options={countries}
        selectedOption={selectedCountry}
        setSelectedOption={handleSelectCountry}
        placeholder="Select a Country"
        width="w-50"
      />
      <Select
        options={prices}
        LeadingIcon={<FiDollarSign />}
        selectedOption={selectedDate}
        setSelectedOption={handleSelectDate}
        placeholder="Select a Date"
        width="w-50"
      />
    </StoryLayout>
  );
};

export const Default = StorySelect.bind({});
