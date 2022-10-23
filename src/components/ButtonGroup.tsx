import React from "react";
import classNames from "classnames";

export interface IButtonItem {
  value: string;
  content: React.ReactNode;
}

export interface ButtonGroupProps {
  options: IButtonItem[];
  activeOption: string;
  setActiveOption: (activeOption: string) => void;
}

export const ButtonGroup = ({
  options,
  activeOption,
  setActiveOption,
}: ButtonGroupProps) => {
  return (
    <>
      {options.map((option, index) => {
        return (
          <button
            className={classNames("buttonGI-base", {
              "buttonGI-left": index === 0,
              "buttonGI-right": index === options.length - 1,
              "buttonGI-middle": index !== 0 && index !== options.length - 1,
              "buttonGI-selected": activeOption === option.value,
            })}
            key={option.value}
            onClick={() => setActiveOption(option.value)}
          >
            {option.content}
          </button>
        );
      })}
    </>
  );
};
