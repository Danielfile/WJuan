/**
 * Created by Daniel on 2018/3/30.
 */
import React from 'react';
import hpface from '../../style/imgs/b1.jpg';
import { List, Avatar, Button, Spin } from 'antd';

import reqwest from 'reqwest';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';

class HisPages extends React.Component {
	state = {
    loading: true,
    loadingMore: false,
    showLoadingMore: true,
    data: [],
	hpface:hpface,
  }
  componentDidMount() {
    this.getData((res) => {
      this.setState({
        loading: false,
        data: res.results,
      });
    });
  }
  getData = (callback) => {
    reqwest({
      url: fakeDataUrl,
      type: 'json',
      method: 'get',
      contentType: 'application/json',
      success: (res) => {
        callback(res);
      },
    });
  }
  onLoadMore = () => {
    this.setState({
      loadingMore: true,
    });
    this.getData((res) => {
      const data = this.state.data.concat(res.results);
      this.setState({
        data,
        loadingMore: false,
      }, () => {
        window.dispatchEvent(new Event('resize'));
      });
    });
  }
  render() {
    const { loading, loadingMore, showLoadingMore, data } = this.state;
    const loadMore = showLoadingMore ? (
      <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
        {loadingMore && <Spin />}
        {!loadingMore && <Button onClick={this.onLoadMore}>loading more</Button>}
      </div>
    ) : null;
    return (
      <List
        className="demo-loadmore-list"
        loading={loading}
        itemLayout="horizontal"
        loadMore={loadMore}
        dataSource={data}
        renderItem={item => (
          <List.Item actions={[<a>edit</a>, <a>more</a>]}>
            <List.Item.Meta
              avatar={<Avatar src={hpface} />}
              title={<a href="http://www.heiyour.com/WJuan">{item.name.last}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
            <div>content</div>
          </List.Item>
        )}
      />
    );
  }
}

export default HisPages;