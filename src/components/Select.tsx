import React, { useState } from "react";
import { Listbox } from "@headlessui/react";

export interface ISelectOption<T> {
  id: T;
  value: React.ReactNode;
}

export interface SelectProps<T> {
  options: ISelectOption<T>[];
  initial: T | null;
  emptyButton: React.ReactNode;
}

export const Select = <T extends unknown>({
  options,
  initial,
  emptyButton,
}: SelectProps<T>) => {
  const [selected, setSelected] = useState<T | null>(initial);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {selected ? (
        <Listbox.Button>{selected}</Listbox.Button>
      ) : (
        <Listbox.Button>{emptyButton}</Listbox.Button>
      )}

      <Listbox.Options>
        {options.map((option) => (
          <Listbox.Option key={option.id as string} value={option}>
            {option.value}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
};
