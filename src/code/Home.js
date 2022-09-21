import React from 'react';
import './../App.css';
import axios from 'axios';
import NoData from './NoData';
import Tables from './Tables';
import { Button, Divider } from 'antd';
import { GithubOutlined } from '@ant-design/icons';

class Home extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        urlApi: 'https://swapi.dev/api/', 
        data: [],
        keys: [],
        tableName: 'home'
      };
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = () => {
        axios.get(this.state.urlApi)
        .then(res => {
            const data = res.data;
            const keys = (Object.keys(res.data));
            keys.unshift('home');
            this.setState({ data: data, keys:keys });
        }).catch(err => {
            console.log(err)
        })
    }
    
    onClickButton = (e) => {
        this.setState({ tableName: e});
    }

    camelCase = (string) => {
        return string.toLowerCase().replace(/(?:(^.)|(\s+.))/g, function(match) {
            return match.charAt(match.length-1).toUpperCase();
        });
    }

    render() {
        const {data,keys, tableName} = this.state;
        let width = "calc( 100% / " + keys.length + ") !important";
        return (
            <div className="App">
                {keys.length === 0 && <NoData identify={'home'}></NoData>}
                {
                    keys.length > 0 && <>
                        <div className="col-md-7 divBtn">
                                {keys.map(element=> (
                                    <Button className="btn-neon" style={{width: width}} key={element} onClick={() => this.onClickButton(element)} block>
                                        <small className="form-text">{this.camelCase(element)}</small>
                                    </Button>
                                ))}
                        </div>
                        <Divider orientation="left" className="dividerCss">{this.camelCase(tableName)}</Divider>
                        <Tables TableName={tableName} dataBase={data} menuKeys={keys}></Tables>
                    </>
                }
                <div className="footer">
                    <p><a className="footerIcon" href="https://github.com/galvao845" target="_blank" rel="noreferrer"><GithubOutlined style={{fontSize: 15}} className="bi-github" role="img" aria-label="GitHub" /></a></p>
                </div>
            </div>
        );
    }
}

export default Home;
