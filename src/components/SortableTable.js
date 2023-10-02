import { useState } from 'react';
import Table from './Table';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

function SortableTable(props) {
  const [sortedOrder, setSortedOrder] = useState(null);
  const [sortBy, setSortBy] = useState(null);

  const { config, data } = props;

  const handleClick = (label) => {
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

  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => {
        return (
          <th
            className="cursor-pointer hover:bg-gray-100"
            onClick={() => handleClick(column.label)}
          >
            <div className="flex items-center">
              {getIcons(column.label, sortBy, sortedOrder)}
              {column.label}
            </div>
          </th>
        );
      },
    };
  });

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
  return (
    <div>
      <Table {...props} data={sortedData} config={updatedConfig} />
    </div>
  );
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div className="pr-1">
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  }
  if (sortOrder === null) {
    return (
      <div className="pr-1">
        <GoChevronUp />
        <GoChevronDown />
      </div>
    );
  } else if (sortOrder === 'asc') {
    return (
      <div className="pr-1">
        <GoChevronUp />
      </div>
    );
  } else if (sortOrder === 'desc') {
    return (
      <div className="pr-1">
        <GoChevronDown />
      </div>
    );
  }
}

export default SortableTable;
