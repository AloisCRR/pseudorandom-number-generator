import { useEffect, useState } from 'react';

type DefaultData = {
  iterations: number;
};

type MiddleSquare = DefaultData & {
  method: 'middle-square';
  seed: { seedOne: number };
};

type MiddleProduct = DefaultData & {
  method: 'middle-product';
  seed: { seedOne: number; seedTwo: number };
};

export type TableData = [number, number, number, string, string];

export default function usePseudorandomNumberGenerator(
  initialData: MiddleSquare | MiddleProduct,
) {
  const [tableData, setTableData] = useState<TableData[]>([]);

  const [seedAndIterations, setSeedAndIterations] = useState(initialData);

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

    let seed: number = 0;

    if (seedAndIterations.method === 'middle-product') {
      seed = seedAndIterations.seed.seedOne * seedAndIterations.seed.seedTwo;
    }

    for (let index = 0; index < seedAndIterations.iterations; index += 1) {
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

  return { tableData, setSeedAndIterations };
}
