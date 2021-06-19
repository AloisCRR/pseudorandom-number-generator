import React, { useEffect, useState } from 'react';
import PageBase from '../components/PageBase';
import MethodTitle from '../components/MethodTitle';
import Input from '../components/Input';
import Button from '../components/Button';
import Table from '../components/Table';

export type TableData = [number, number, number, string, string];

const MiddleSquare = (): JSX.Element => {
  const [seedAndIterations, setSeedAndIterations] = useState<[number, number]>([
    0, 0,
  ]);

  const [tableData, setTableData] = useState<TableData[]>([]);

  const handleFormSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      seed: { value: number };
      iterations: { value: number };
    };

    setSeedAndIterations([target.seed.value, target.iterations.value]);
  };

  const middleSquare = (
    generatedSeed: string,
    squaredSeed: string,
    middle: number,
  ) =>
    generatedSeed.length % 2 !== 0 && squaredSeed.length % 2 === 0
      ? squaredSeed.substr(middle - 1, generatedSeed.length)
      : squaredSeed.substr(middle, generatedSeed.length);

  const wordMiddleIndex = (longerWord: string, shorterWord: string) => {
    const result = longerWord.length - shorterWord.length;

    return result / 2;
  };

  const getMethodResult = () => {
    const dataResult: TableData[] = [];

    let seed = seedAndIterations[0];

    for (let index = 0; index < seedAndIterations[1]; index += 1) {
      const seedSquared = seed ** 2;

      const middleIndex = wordMiddleIndex(
        seedSquared.toString(),
        seed.toString(),
      );

      const result = middleSquare(
        seed.toString(),
        seedSquared.toString(),
        middleIndex,
      );

      const data: [number, number, number, string, string] = [
        index,
        seed,
        seedSquared,
        result,
        result,
      ];

      const newSeed = middleSquare(
        seed.toString(),
        seedSquared.toString(),
        middleIndex,
      );

      seed = parseInt(newSeed, 10);

      dataResult.push(data);
    }

    setTableData(dataResult);
  };

  useEffect(() => {
    getMethodResult();
  }, [seedAndIterations]);

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
