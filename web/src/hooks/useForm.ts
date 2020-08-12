import { useState, ChangeEvent } from 'react';

export interface IFormCategory {
  titulo: string;
  description: string;
  color: string;
}

export interface IFormVideo {
  titulo: string;
  url: string;
  categoria: string;
}

export function useForm(initialValues: any) {
  const [values, setValues] = useState<any>(initialValues);

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { value } = event.target;
    setValues({
      ...values,
      [String(event.target.getAttribute('name'))]: value,
    });
  }

  function clearForm() {
    setValues(initialValues);
  }

  return {
    values,
    handleChange,
    clearForm,
  };
}
