/**
 * Created by Daniel on 2018/3/30.
 */
import React from 'react';
import { List, Avatar } from 'antd';

const listData = [
{
    href: 'http://z.arlmy.me/posts/Note/Note_TheNearestThingToLife/',
    title: '《最接近生活的事物》笔记',
    avatar: '',
    description: '“每个人都会死，但每个人又都活着，这同时也就意味着每个人都是死者。”（布朗肖）',
    content: '在书本的世界里，谎话（或是小说）被用来保护有意义的真相。我仍记得青少年时的震惊，那是当我郑重地发现小说和短篇故事是一个完全自由的空间的时候，在那里你可以有任何想法，表达任何观点。',
},{
    href: 'http://anzhu.net/?p=2410',
    title: '放假',
    avatar: 'http://anzhu.net/wp-content/uploads/2014/02/IMG_5185-300x224.jpg',
    description:'',
    content: '放假我离开了广州，回老家恩平住了七八天。恩平对我来说有一种特别的感觉，即熟悉又陌生。恩平对我来说有一种特别的感觉，即熟悉又陌生。首先，这是我出生的地方，'
    +'这里生活着我的父母和弟弟，每次见他们都是难得的亲近。但我自小就离开了恩平（从三、四岁开始），每年也只能回来两三次，这样的结果是我在恩平从来就没有过除家庭外的任何社会关系，这座小城市对我来'
    +'说只不过是另一个“异乡”，并且是一个不再感到好奇的“异乡”。每次回来，我唯一能做的就是呆在家里，吃饭睡觉看书看电影。',
},{
    href: 'http://z.arlmy.me/posts/SOLARIS/170717_Caffe/',
    title: '咖啡',
    avatar: '',
    description: '',
    content: '站在巷口，背后是一家本地的大型商超，人满为患，而面前的整条巷子都没有人。连着两天没有喝咖啡，头上像罩了个被不停敲击着的铁头盔，大脑发麻，运行迟缓。地图显示附近只有这条巷子里有咖啡厅。',
}
];

const pagination = {
  pageSize: 7,
  current: 1,
  total: listData.length,
  onChange: (() => {}),
};

class SubDay extends React.Component {
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

export default SubDay;