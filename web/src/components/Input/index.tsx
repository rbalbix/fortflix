import React, { InputHTMLAttributes } from 'react';

import { InputBlock, LabelText, InputField } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  value: string;
  suggestions?: any;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  value,
  suggestions,
  ...rest
}) => {
  const fieldId = `id_${name}`;
  let hasSuggestions;
  if (suggestions) hasSuggestions = Boolean(suggestions.length);

  return (
    <InputBlock>
      <label htmlFor={name}>
        <InputField
          type='text'
          id={name}
          value={value}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
          {...rest}
        />
        <LabelText>{label}</LabelText>
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
      </label>
    </InputBlock>
  );
};

export default Input;
