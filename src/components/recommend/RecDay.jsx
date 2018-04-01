/**
 * Created by Daniel on 2018/3/30.
 */
import React from 'react';
import { List, Avatar, Icon } from 'antd';

const listData = [
{
    href: 'http://jiongks.name/blog/apple-is-about-to-do-something-their-programmers-definitely-dont-want/',
    title: '苹果正在做一些他们的程序员明摆着不想要的东西',
    avatar: 'http://jiongks-typecho.stor.sinaapp.com/usr/uploads/2017/08/2254787802.jpg',
    description: '苹果在 Apple Park 这个漂亮的新办公楼上花了 50 亿美金，却犯了一个完全可以避免的极其昂贵的错误：让他们的程序员工作在一个开放式的格局中。这真让人惊讶。',
    content: '我在 Fog Creek Software 工作，我们的联合创始人兼前 CEO Joel Spolsky 在至少 17 年前就已经针对开放式办公室对于程序员产能的糟糕影响撰文了。他在这方面的洞察基于了 Tom DeMarco 和 Tim Lister 的经典书籍《Peopleware》——该书已经出版了三十年。所以这其实不是什么全新的观点。当然在这数十年里，也已经有无数'
    +'的学术研究确认了同一个结论：人们在开放式空间办公是烦躁的、注意力不集中的、常常不开心的。',
    star:'233',
    support:'879',
    talk:'1000+',
},{
    href: 'http://jiongks.name/blog/why-i-dont-unpaid-overtime-and-neither-should-you/',
    title: '为什么我不会无偿加班且你也不应该',
    avatar: '',
    description: '',
    content: '我并不是针对自营或创业等多干活儿就能得到更多回报的情况。我曾经在 80 年代中期到 90 年代开过两个小的软件公司，并且工作时间也很长，'
    +'但是我们会共享全部的成果，而第二家公司我们在合同里就定好了多劳多得的规矩。当然这不是我们今天讨论的重点。',
    star:'210',
    support:'736',
    talk:'933',
},{
    href: 'http://zxkh19501.blog.163.com/blog/static/123785179201761582459382/',
    title: '严首辅这点事',
    avatar: '',
    description:'现在北京有个老字号，六必居。其字号来因却有渊源的。',
    content: '严嵩是明代嘉靖朝权相，任内阁首辅二十年，后被能隐能忍能让的高人徐阶给扳倒了，他那又坏又聪明的儿'
    +'子严世蕃在这场斗争中死了。严嵩擅长拍马，伺候皇帝水平高，总能让嘉靖感觉很舒服。因此，皇帝念着旧情保了其活命，仅是活命而已，官位家产自然是木有了。',
    star:'164',
    support:'759',
    talk:'856',
},{
    href: 'http://anzhu.net/?p=3079',
    title: '第四个实验：一个学习共同体',
    avatar: 'http://anzhu.net/wp-content/uploads/2016/07/1-300x169.jpg',
    description:'当然我在大学的时候，还不可能把从前的点点滴滴串连起来，但是当我十年后回顾这一切的时候，真的豁然开朗了……你必须相信这些片断会在你未来的某一天串连起来。',
    content: '在著名的斯坦福演讲中，乔布斯说，他曾上过一个学费超贵的大学，因为看不到学校的价值，于是退了学，百无聊赖之下开始学字体设计。在当时看来，这些经历似乎毫无意义，'
    +'既不赚钱，也不能让他找到好工作，但是——十年后，乔布斯在自己创办的苹果公司开始设计第一Macintosh电脑时，这些经历发挥了作用：他把在字体设计课程中所学到的知识用在了电脑上。于是，我们今天才可以在Mac上看到这么多丰富的字体，以及令人赏心悦目的字体间距。',
    star:'117',
    support:'698',
    talk:'756',
}
];

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
						actions={[<IconText type="star-o" text={item.star} />, <IconText type="like-o" text={item.support} />, <IconText type="message" text={item.talk} />]}
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