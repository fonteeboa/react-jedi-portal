import './../App.css';
import React from 'react';
import axios from 'axios';
import NoData from './NoData';
import HomePage from './HomePage';
import MountTable from './MountTable';

class Tables extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      tablesName: 'home'
    };
  }

  fetchData = (urlApi) => {
    if (urlApi !== '') {
      axios.get(urlApi)
      .then(res => {
          const data = res.data.results;
          this.setState({ data: data });
      }).catch(err => {
          console.log(err)
      })
    }
  }

  camelCase = (string) => {
    return string.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function(match) {
        return match.charAt(match.length-1).toUpperCase();
    });
  }

  validTableName = (TableName, tableData) => {
    if (TableName !== this.state.tablesName) {
      this.setState({ tablesName: TableName, data: []});
      this.fetchData(tableData);
    }
  }


  render() {
    const {TableName, dataBase, menuKeys} = this.props;
    const {data} = this.state;
    const tableData = dataBase[TableName];
    this.validTableName(TableName, tableData);
    return (
      <div className="divTables">
        {TableName === 'home' && <HomePage></HomePage>}
        {TableName !== 'home' && data.length > 0 && <MountTable tableData={data} menuKey={menuKeys}></MountTable>}
        {TableName !== 'home' && data.length === 0 && <NoData identify={'tables'}></NoData>}
      </div>)
  }
}

export default Tables;
