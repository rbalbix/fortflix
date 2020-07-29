import React from 'react';

// import { Container } from './styles';

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
  return (
    <div>
      <label>
        {label}:
        <input
          type={type ?? 'text'}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default FormField;
