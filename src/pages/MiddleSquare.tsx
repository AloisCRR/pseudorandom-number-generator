import React, { useState } from 'react';
import PageBase from '../components/PageBase';
import MethodTitle from '../components/MethodTitle';
import Input from '../components/Input';
import Button from '../components/Button';
import Table from '../components/Table';

const MiddleSquare = (): JSX.Element => {
  const [seedAndIterations, setSeedAndIterations] = useState<[number, number]>([
    0, 0,
  ]);

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      seed: { value: number };
      iterations: { value: number };
    };

    setSeedAndIterations([target.seed.value, target.iterations.value]);
  };

  return (
    <PageBase bgColor="bg-green-600">
      <MethodTitle title="Middle square method" />
      <form onSubmit={handleFormSubmit}>
        <div className="flex ">
          <Input label="Seed" name="seed" />
          <Input label="Iterations" name="iterations" />
        </div>
        <div className="flex justify-end">
          <Button text="Generate" isGenerate />
          <Button text="Clear" />
        </div>
      </form>
      <Table iterations={seedAndIterations[0]} seed={seedAndIterations[1]} />
    </PageBase>
  );
};

export default MiddleSquare;
