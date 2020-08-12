import React from 'react';

import { Button } from './styles';

interface iLink {
  as?: any;
  to?: string;
  className?: string;
  type?: string;
}

const ButtonLink: React.FC<iLink> = (props) => {
  return (
    <Button
      as={props.as}
      to={props.to}
      className={props.className}
      type={props.type}
    >
      {props.children}
    </Button>
  );
};

export default ButtonLink;
