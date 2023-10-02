import useSort from '../hooks/use-sort';
import Table from './Table';
import { GoChevronDown, GoChevronUp } from 'react-icons/go';

function SortableTable(props) {
  const { config, data } = props;

  const { sortedOrder, sortedData, sortBy, setSortColumn } = useSort(
    data,
    config
  );

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
            onClick={() => setSortColumn(column.label)}
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
