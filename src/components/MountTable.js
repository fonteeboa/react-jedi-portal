import React from 'react';
import { Table } from 'antd';

const MountTable = ({ tableData, menuKey }) => {
  const camelCase = (string) => {
    const date = new Date(string);
    if (date.toLocaleDateString() !== 'Invalid Date') {
      return date.toLocaleDateString();
    }
    return string.toLowerCase().replace(/(?:(^.)|(\s+.))/g, match => match.charAt(match.length - 1).toUpperCase()).replaceAll('_', ' ');
  };

  const formatData = (data, menuKeys) => {
    return data.map(element => {
      if (typeof element === 'object') {
        const formattedElement = {};
        Object.keys(element).forEach(row => {
          let value = element[row];
          if (row === 'length') row = 'extension';
          if (!menuKeys.includes(row) && !['pilots', 'characters', 'residents', 'homeworld'].includes(row)) {
            formattedElement[row] = camelCase(value);
            formattedElement['key'] = element.url || value;
          }
        });
        return formattedElement;
      } else {
        if (element === 'length') element = 'extension';
        if (!menuKeys.includes(element) && !['pilots', 'characters', 'residents', 'homeworld'].includes(element)) {
          return {
            title: camelCase(element),
            key: element,
            dataIndex: element,
          };
        }
      }
      return null;
    }).filter(item => item !== null);
  };

  const columns = formatData(Object.keys(tableData[0]), menuKey);
  const data = formatData(tableData, menuKey);

  return (
    <Table
      className='tablesClass'
      columns={columns}
      pagination={true}
      dataSource={data}
      size="small"
      scroll={{ x: 'calc(300px + 50%)', y: '20%' }}
    />
  );
};

export default MountTable;
