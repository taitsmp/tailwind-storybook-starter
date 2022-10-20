import React from "react";
import classNames from "classnames";
import "../styles/tailwind.css";
import "../styles/styles.css";
import "@fontsource/inter";

// TODO: this could live in stories as it's not a real component.

interface IStoryArgs {
  darkMode: boolean;
  className?: string;
  children?: React.ReactNode;
  noPadding?: boolean;
}

export const StoryLayout = (props: IStoryArgs) => {
  return (
    <div className={classNames({ "dark bg-gray-900": props.darkMode }, "-m-4")}>
      <div className={classNames(props.className, { "p-4": !props.noPadding })}>
        {props.children}
      </div>
    </div>
  );
};
