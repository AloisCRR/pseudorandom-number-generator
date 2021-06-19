import React from 'react';

type DefaultProps = {
  bgColor?: string;
};

type Props = {
  children: React.ReactElement | React.ReactElement[];
} & DefaultProps;

const PageBase = ({ children, bgColor }: Props) => (
  <article
    className={`${bgColor} h-screen w-screen flex flex-col items-center overflow-y-auto`}>
    {children}
  </article>
);

export default PageBase;
