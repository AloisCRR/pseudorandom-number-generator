import React from 'react';

type Props = {
  title: string;
};

const MethodTitle = ({ title }: Props): JSX.Element => (
  <header>
    <h2 className="text-5xl text-white mt-32 mb-14 font-bold">{title}</h2>
  </header>
);

export default MethodTitle;
