/**
 * Created by Daniel on 2018/3/30.
 */
import React from 'react';
import { List, Avatar, Icon } from 'antd';

const listData = [];
for (let i = 0; i < 4; i++) {
  listData.push({
    href: '#',
    title: `ant design part ${i}`,
    avatar: 'http://a.hiphotos.baidu.com/image/pic/item/faf2b2119313b07eaad49f0c00d7912397dd8c4d.jpg',
    description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
    content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
  });
}

const pagination = {
  pageSize: 7,
  current: 1,
  total: listData.length,
  onChange: (() => {}),
};

const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

class RecDay extends React.Component {
	render(){
		return (
			<List
				itemLayout="vertical"
				size="large"
				pagination={pagination}
				dataSource={listData}
				renderItem={item => (
					<List.Item
						key={item.title}
						actions={[<IconText type="star-o" text="156" />, <IconText type="like-o" text="156" />, <IconText type="message" text="2" />]}
						extra={<img width={272} alt="logo" src={item.avatar} />}
					>
					<List.Item.Meta
						avatar={<Avatar src={item.avatar} />}
						title={<a href={item.href}>{item.title}</a>}
						description={item.description}
					/>
						{item.content}
					</List.Item>
				)}
			/>
		);
	};
}

export default RecDay;