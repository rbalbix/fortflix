import styled, { css } from 'styled-components';

interface IProps {
  value: string;
}

export const InputBlock = styled.div`
  position: relative;
`;

export const LabelText = styled.span`
  color: var(--white);
  height: 5.6rem;
  position: absolute;
  top: 0;
  left: 1.6rem;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 1.8rem;

  transition: 0.1s ease-in-out;
`;

export const InputField = styled.input<IProps>`
  background: var(--color-input-background);
  color: var(--white);
  display: block;
  width: 100%;
  height: 5.6rem;
  font-size: 1.8rem;

  outline: 0;
  border: 0;
  border-top: 0.4rem solid transparent;
  border-bottom: 0.3rem solid var(--color-input-background);

  padding: 1.6rem 1.6rem;
  margin-bottom: 2rem;

  resize: none;
  border-radius: 0.4rem;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--color-primary-light);
  }
  &:focus:not([type='select']) + ${LabelText} {
    transform: scale(0.6) translateY(-1rem);
  }
  ${({ value }) => {
    return (
      value.length > 0 &&
      css`
        &:not([type='select']) + ${LabelText} {
          transform: scale(0.6) translateY(-1rem);
        }
      `
    );
  }}
`;
