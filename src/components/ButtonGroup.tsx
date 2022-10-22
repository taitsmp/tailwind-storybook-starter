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

///-mine---

type Button = {
  text?: string;
  Icon?: React.ReactElement;
  active: boolean;
};

export interface BGProps {
  buttons: Button[];
  children: string | React.ReactElement;
  className?: string;
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
              "buttonGI-middle": index !== 0 && index === options.length - 1,
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

//mine
export const ButtonGroup2 = ({ className, buttons, children }: BGProps) => {
  return (
    <div className={classNames("buttonGI-base", className)}>
      {buttons.map((but) => {
        const { Icon, text, active } = but;
        <div className={classNames()}>
          {Icon ? (
            <Icon.type
              {...Icon.props}
              className={classNames("mr-1.5", Icon.props.className)}
            />
          ) : null}
          {text}
        </div>;
      })}
    </div>
  );
};
