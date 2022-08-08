import React, { memo } from 'react';
import {
  SelectContainer,
  SelectLabel,
  SelectWrapper
} from './style';
import { FlattenSimpleInterpolation } from 'styled-components';
import { SelectOption } from '../../../types/common';
import { PageSection } from '../../Styles/utils';

type Props = {
  id: string,
  options: SelectOption[],
  onChange: (value: string) => void,
  label?: string,
  section?: PageSection,
  defaultValue?: string,
  extraLabelStyles?: FlattenSimpleInterpolation,
  extraSelectStyles?: FlattenSimpleInterpolation,
  className?: string
};

const createOption = ({
  text,
  value
}: SelectOption) => (
  <option value={value} key={value}>
    {text}
  </option>
);

const Select: React.FC<Props> = ({
  id,
  options,
  onChange,
  label,
  section = 'main',
  defaultValue = '',
  extraLabelStyles,
  extraSelectStyles,
  className
}) => {
  let labelComponent = null;
  let labelId;

  if (label) {
    labelId = `${id}-label`;
    labelComponent = (
      <SelectLabel
        id={labelId}
        htmlFor={id}
        extraStyles={extraLabelStyles}
      >
        {label}
      </SelectLabel>
    );
  }

  const onSelectionChanged = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    onChange(e.currentTarget.value);
  }

  return (
    <SelectContainer
      section={section}
      className={className}
    >
      {labelComponent}
      <SelectWrapper
        id={id}
        aria-describedby={labelId}
        onChange={onSelectionChanged}
        defaultValue={defaultValue}
        section={section}
        extraStyles={extraSelectStyles}
      >
        {
          options.map(createOption)
        }
      </SelectWrapper>
    </SelectContainer>
  );
}

export default memo(Select);