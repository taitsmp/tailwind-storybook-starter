import React, { Dispatch, SetStateAction, useState } from "react";
import { Listbox } from "@headlessui/react";
import classNames from "classnames";
import { FiCheck, FiChevronDown } from "react-icons/fi";

// I could have imported this. Decided not to. Hoping to make it a generic.
export interface IOption {
  value: string;
  label: string | React.ReactNode;
}

export interface SelectProps {
  options: IOption[];
  selectedOption: IOption | undefined;
  setSelectedOption: Dispatch<SetStateAction<IOption | undefined>>;
  placeholder?: string;
  LeadingIcon?: React.ReactElement;
  width?: string;
}

export const Select = ({
  options,
  selectedOption,
  setSelectedOption,
  placeholder,
  LeadingIcon,
  width,
}: SelectProps) => {
  return (
    <div className={classNames("relative inline-block", width)}>
      <Listbox value={selectedOption} onChange={setSelectedOption}>
        {({ open }) => (
          <>
            <Listbox.Button
              className={classNames(
                "select-button",
                {
                  "select-selected": selectedOption,
                  "select-not-selected": !selectedOption,
                },
                width,
              )}
            >
              {LeadingIcon ? (
                <div className="w-5 h-5 mr-2 overflow-hidden">
                  <LeadingIcon.type size={20} className="text-gray-400" />
                </div>
              ) : null}
              {selectedOption ? selectedOption.value : placeholder}
              <FiChevronDown
                size={20}
                className={classNames(
                  "text-gray-50 dark:text-gray-300 transform duration-100 ease-out",
                  {
                    "-rotate-180": open,
                    "ml-auto": width,
                    "ml-3.5": width,
                  },
                )}
              />
            </Listbox.Button>
            <Listbox.Options className="select-options">
              {options.map((option, index) => {
                <Listbox.Option
                  as={React.Fragment}
                  key={option.value}
                  value={option}
                >
                  {({ active, selected }) => (
                    <li
                      className={classNames("selected-option", {
                        "bg-primary-25 dark:bg-gray-100 dark:bg-opacity-10":
                          active,
                        "rounded-t-lg": index === 0,
                        "rounded-b-lg": index === options.length - 1,
                      })}
                    >
                      <div className="flex items-center">{option.label}</div>
                      {selected ? (
                        <FiCheck className="ml-5 text-primary-600 dark:text-white" />
                      ) : null}
                    </li>
                  )}
                </Listbox.Option>;
              })}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
};
