import React from 'react';

import { Button } from './styles';

interface iLink {
  href: string;
  className: string;
}

const ButtonLink: React.FC<iLink> = (props) => {
  return (
    <Button href={props.href} className={props.className}>
      {props.children}
    </Button>
  );
};

export default ButtonLink;
