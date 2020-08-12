import React from 'react';

import { FormFieldWrapper, Label, LabelText, Input } from './styles';

interface IProps {
  label: string;
  type?: string;
  name: string;
  value: any;
  onChange: any;
  suggestions?: any;
}

const FormField: React.FC<IProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  suggestions,
}: IProps) => {
  const fieldId = `id_${name}`;
  let hasSuggestions;
  if (suggestions) hasSuggestions = Boolean(suggestions.length);

  return (
    <FormFieldWrapper>
      <Label htmlFor={fieldId}>
        <Input
          id={fieldId}
          type={type ?? 'text'}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
        />
        <LabelText>{label} </LabelText>
        {hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions.map((suggestion: any) => (
              <option
                value={suggestion}
                key={`suggestionFor_${fieldId}_option${suggestion}`}
              >
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </FormFieldWrapper>
  );
};

export default FormField;
