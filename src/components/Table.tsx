import React from 'react';

type Props = {
  seed: number;
  iterations: number;
};

const Table = ({ iterations, seed }: Props) => {
  console.log(iterations, seed);

  return (
    <table className="table-fixed mt-10 rounded-lg bg-white w-1/2">
      <caption className="text-lg text-white mb-3">Results</caption>
      <thead>
        <tr>
          <th className="py-2">n</th>
          <th className="py-2">R(n)</th>
          <th className="py-2">
            R(n)<sup>2</sup>
          </th>
          <th className="py-2">
            M.R(n)<sup>2</sup>
          </th>
          <th className="py-2">Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Hola</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table;
