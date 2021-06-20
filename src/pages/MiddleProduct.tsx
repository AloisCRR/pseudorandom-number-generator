import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import MethodTitle from '../components/MethodTitle';
import PageBase from '../components/PageBase';
import Table from '../components/Table';
import usePseudorandomNumberGenerator from '../hooks/usePseudorandomNumberGenerator';

const MiddleProduct = (): JSX.Element => {
  const { tableData, setSeedAndIterations } = usePseudorandomNumberGenerator({
    iterations: 0,
    method: 'middle-product',
    seed: { seedOne: 0, seedTwo: 0 },
  });

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      seed1: { value: number };
      seed2: { value: number };
      iterations: { value: number };
    };

    setSeedAndIterations({
      iterations: target.iterations.value,
      method: 'middle-product',
      seed: { seedOne: target.seed1.value, seedTwo: target.seed2.value },
    });
  };

  return (
    <PageBase bgColor="bg-blue-600">
      <MethodTitle title="Middle product method" />
      <form onSubmit={handleFormSubmit}>
        <div className="flex ">
          <Input label="Seed 1" name="seed1" />
          <Input label="Seed 2" name="seed2" />
          <Input label="Iterations" name="iterations" />
        </div>
        <div className="flex justify-end">
          <Button text="Generate" isGenerate />
          <Button text="Clear" />
        </div>
      </form>
      <Table data={tableData} />
    </PageBase>
  );
};

export default MiddleProduct;
