import React, { Dispatch, SetStateAction } from "react";
import classNames from "classnames";

export interface IButtonItem<T> {
  value: T;
  content: React.ReactNode;
}

export interface ButtonGroupProps<T> {
  options: IButtonItem<T>[];
  activeOption: T;
  setActiveOption: Dispatch<SetStateAction<T>>;
}

export const ButtonGroup = <T extends unknown>({
  options,
  activeOption,
  setActiveOption,
}: ButtonGroupProps<T>) => {
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
            key={option.value as string}
            onClick={() => setActiveOption(option.value)}
          >
            {option.content}
          </button>
        );
      })}
    </>
  );
};
