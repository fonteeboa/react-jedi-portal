import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NoData from '../components/NoData';
import Tables from '../components/Tables';
import { Button, Divider } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

const Home = () => {
  const [urlApi] = useState('https://swapi.dev/api/');
  const [data, setData] = useState([]);
  const [keys, setKeys] = useState([]);
  const [tableName, setTableName] = useState('home');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(urlApi);
        const data = res.data;
        const keys = Object.keys(data);
        keys.unshift('home');
        setData(data);
        setKeys(keys);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [urlApi]);

  const camelCase = (string) => {
    return string.toLowerCase().replace(/(?:(^.)|(\s+.))/g, match => match.charAt(match.length - 1).toUpperCase());
  };

  let width = `calc( 100% / ${keys.length} ) !important`;

  return (
    <div className="App">
      {keys.length === 0 && <NoData identify="home" />}
      {keys.length > 0 && (
        <>
          <div className="col-md-7 divBtn">
            {keys.map(element => (
              <Button className="btn-neon" style={{ width }} key={element} onClick={() => setTableName(element)} block>
                <small className="form-text">{camelCase(element)}</small>
              </Button>
            ))}
          </div>
          <Divider orientation="left" className="dividerCss">{camelCase(tableName)}</Divider>
          <Tables TableName={tableName} dataBase={data} menuKeys={keys} />
        </>
      )}
      <div className="footer">
        <p>
          <a className="footerIcon" href="https://github.com/fonteeboa" target="_blank" rel="noreferrer">
            <GithubOutlined style={{ fontSize: 15 }} className="bi-github" role="img" aria-label="GitHub" />
          </a>
        </p>
      </div>
    </div>
  );
};

export default Home;
