import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import MethodTitle from '../components/MethodTitle';
import PageBase from '../components/PageBase';
import Table from '../components/Table';
import usePseudorandomNumberGenerator from '../hooks/usePseudorandomNumberGenerator';

const MiddleSquare = (): JSX.Element => {
  const { tableData, setSeedAndIterations } = usePseudorandomNumberGenerator({
    iterations: 0,
    method: 'middle-square',
    seed: { seedOne: 0 },
  });

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      seed: { value: number };
      iterations: { value: number };
    };

    setSeedAndIterations({
      iterations: target.iterations.value,
      method: 'middle-square',
      seed: { seedOne: target.seed.value },
    });

    console.log(tableData);
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
      <Table data={tableData} />
    </PageBase>
  );
};

export default MiddleSquare;
