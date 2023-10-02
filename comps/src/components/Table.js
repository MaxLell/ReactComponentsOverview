import { Fragment } from 'react';

function Table({ data, keyFunction, config }) {
  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((columnEntry) => {
      return (
        <td className="p-2" key={columnEntry.label}>
          {columnEntry.render(rowData)}
        </td>
      );
    });

    return (
      <tr key={keyFunction(rowData)} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return (
        <Fragment key={column.label}>{column.header()}</Fragment>
      );
    }

    return <th key={column.label}>{column.label}</th>;
  });

  return (
    <table className="table-auto border-spacing-2">
      <thead>
        <tr className="border-b-2">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}
export default Table;
