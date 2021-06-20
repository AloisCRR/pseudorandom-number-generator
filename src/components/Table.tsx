import React from 'react';
import type { TableData } from '../hooks/usePseudorandomNumberGenerator';

type Props = {
  data: TableData[];
};

const Table = ({ data: tableData }: Props) => (
  <table className="table-fixed my-10 rounded-lg bg-white w-1/2">
    <caption className="text-lg text-white mb-3">Results</caption>
    <thead>
      <tr>
        <th className="py-4">n</th>
        <th className="py-4">R(n)</th>
        <th className="py-4">
          R(n)<sup>2</sup>
        </th>
        <th className="py-4">
          M.R(n)<sup>2</sup>
        </th>
        <th className="py-4">Value</th>
      </tr>
    </thead>
    <tbody>
      {tableData.map((row, idx) => (
        // eslint-disable-next-line react/no-array-index-key
        <tr key={`tr${idx}`}>
          {row.map((data, trIdx) => (
            // eslint-disable-next-line react/no-array-index-key
            <td className="text-center p-4" key={`td${trIdx}`}>
              {data}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
