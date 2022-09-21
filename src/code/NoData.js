import React from 'react';
import './../App.css';
import { Empty, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
            

class NoData extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loadingStyle: {
        fontSize: 350, 
        color: '#ff5d5d'
      }
    };
  }

  render() {
    const {identify} = this.props;
    const { loadingStyle } = this.state;
    return (
      <div className=''>
        {
          identify === 'home' &&  <div className="iniload">
            <h2 className='padding10 h2home'>Wait a moment, we are preparing everything for a better experience!</h2>
            <Spin className='padding5' indicator={<LoadingOutlined style={loadingStyle} spin />} />
            <footer className='padding100'></footer>
          </div>
        } 
        {identify === 'tables' &&
          <Empty
            className='padding10'
            image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
            imageStyle={{
              height: '350',
            }}
            description={<span>Sorry, no matching records found yet, we still looking for.</span>}
          ></Empty>
        }
      </div>
    );
  }
}

export default NoData;
