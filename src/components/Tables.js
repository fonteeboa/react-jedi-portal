import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoData from './NoData';
import HomePage from '../pages/HomePage';
import MountTable from './MountTable';

const Tables = ({ TableName, dataBase, menuKeys }) => {
  const [data, setData] = useState([]);
  const [tablesName, setTablesName] = useState('home');

  const fetchData = async (urlApi) => {
    if (urlApi) {
      try {
        const res = await axios.get(urlApi);
        setData(res.data.results);
      } catch (err) {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    if (TableName !== tablesName) {
      setTablesName(TableName);
      setData([]);
      fetchData(dataBase[TableName]);
    }
  }, [TableName, dataBase, tablesName]);

  return (
    <div className="divTables">
      {TableName === 'home' && <HomePage />}
      {TableName !== 'home' && data.length > 0 && <MountTable tableData={data} menuKey={menuKeys} />}
      {TableName !== 'home' && data.length === 0 && <NoData identify={'tables'} />}
    </div>
  );
};

export default Tables;
