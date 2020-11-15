import React from 'react';

import { Container } from './styles';

interface PropImages {
  desktop: string;
  mobile: string;
}
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  modelId: string;
  overlayNode: React.ReactNode;
  images: PropImages;
}

const ModelSection: React.FC<Props> = ({
  modelId,
  overlayNode,
  children,
  ...props
}) => {
  return <Container {...props}>{children}</Container>;
};

export default ModelSection;
