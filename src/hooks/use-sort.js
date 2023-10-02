import { useState } from 'react';

function useSort(data, config) {
  const [sortedOrder, setSortedOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const setSortColumn = (label) => {
    if (sortBy && label !== sortBy) {
      setSortedOrder('asc');
      setSortBy(label);
      return;
    }

    if (sortedOrder === null) {
      setSortedOrder('asc');
      setSortBy(label);
    } else if (sortedOrder === 'asc') {
      setSortedOrder('desc');
      setSortBy(label);
    } else if (sortedOrder === 'desc') {
      setSortedOrder(null);
      setSortBy(label);
    }
  };

  let sortedData = data;
  if (sortedOrder && sortBy) {
    const { sortValue } = config.find(
      (column) => column.label === sortBy
    );
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortedOrder === 'asc' ? 1 : -1;

      if (typeof valueA === 'string') {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  return {
    sortedOrder,
    sortBy,
    sortedData,
    setSortColumn,
  };
}

export default useSort;
