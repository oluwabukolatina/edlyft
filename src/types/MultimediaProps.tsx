import { ReactChild, ReactFragment, ReactPortal } from 'react';
export type MultimediaProps = {
  images: { [x: string]: { url: string } };
  title: ReactChild | ReactFragment | ReactPortal;
  programType: string;
  releaseYear: number;
};
