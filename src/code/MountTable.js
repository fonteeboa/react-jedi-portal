import React from 'react';
import './../App.css';
import { Table } from 'antd';

class MountTable extends React.Component {

  camelCase = (string, element) => {
    var data = new Date(string);
    if (data.toLocaleDateString() === 'Invalid Date' && typeof string === 'string') {
      return string.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function(match) {
        return match.charAt(match.length-1).toUpperCase();
      });
    } else {
      if (typeof string === 'object' || !this.validIfDate(string)) {
        return string;
      } else {
        return data.toLocaleDateString();
      }
    }
  }

  validIfDate = (stringDate) => {
    return (typeof stringDate === 'string' && (stringDate.split('T')).length > 1 && (stringDate.split('Z')).length > 1) ? true : false;
  }

  formatData = (data, menuKeys) => {
    data = data.filter((item) => item !== 'url');
    let dataAux = [];
    data.forEach(element => {
      if (typeof element === 'object') {
        let arraAux = [];
        Object.keys(element).forEach(row => {
          let value = element[row];
          if (row === 'length') row = 'extension';
          if (!menuKeys.includes(element) && !['pilots', 'characters','residents', 'homeworld'].includes(element)) {
            arraAux[row] = this.camelCase(value);
            arraAux['key'] = value;
          }
        })
        dataAux.push(arraAux)
      } else {
        if (element === 'length') element = 'extension';
        if (!menuKeys.includes(element) && !['pilots', 'characters','residents', 'homeworld'].includes(element)) {
          dataAux.push({
            title: this.camelCase(element),
            key: element,
            dataIndex: element
          })
        }
      }
    });
    return dataAux;
  }

  render() {
    const {tableData, menuKey} = this.props;
    let columns = this.formatData(Object.keys(tableData[0]), menuKey);
    let data = this.formatData(tableData, menuKey);

    return (
      <Table 
        className='tablesClass'
        columns={columns} 
        pagination={true}
        dataSource={data} 
        size="small"
        scroll={{ x: 'calc(300px + 50%)', y:'20%' }}
      />
    )
  }
}

export default MountTable;
