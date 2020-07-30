import React from 'react';

import { FormFieldWrapper, Label, LabelText, Input } from './styles';

interface IProps {
  label: string;
  type?: string;
  name: string;
  value: any;
  onChange: any;
}

const FormField: React.FC<IProps> = ({
  label,
  type,
  name,
  value,
  onChange,
}: IProps) => {
  const fieldId = `id_${name}`;

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          id={fieldId}
          type={type ?? 'text'}
          name={name}
          value={value}
          onChange={onChange}
        />
        <LabelText>{label} </LabelText>
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
