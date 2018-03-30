/**
 * Created by hao.cheng on 2017/4/16.
 */
import React from 'react';
import { Input, Table, Button} from 'antd';

const data = [{
    key: '1',
    name: '百度',
    content:'点我，百度。我是百度！',
    date: '2018-3-28',
}, {
    key: '2',
    name: '阿里巴巴',
    content:'点我，阿里巴巴。我是阿里巴巴！',
    date: '2018-3-29',
}, {
    key: '3',
    name: '腾讯',
    content:'点我，腾讯。我是腾讯！',
    date: '2018-3-30',
}, {
    key: '4',
    name: '京东',
    content:'点我，京东。我是京东！',
    date: '2018-3-31',
}];


class SearchTable extends React.Component {
	state = {
		data,
		searchText:'',
		filtered: false,
	};
	onInputChange = (e) => {
        this.setState({ searchText: e.target.value });
    };
	onSearch = () => {
        const { searchText } = this.state;
        const reg = new RegExp(searchText, 'gi');
        this.setState({
			filtered: !!searchText,
            data: data.map((record) => {
                const match = record.name.match(reg);
                if (!match) {
                    return null;
                }
                return {
                    ...record,
                    name: (
                        <span>
              {record.name.split(reg).map((text, i) => (
                  i > 0 ? [<span className="highlight">{match[0]}</span>, text] : text
              ))}
            </span>
                    ),
                };
            }).filter(record => !!record),
        });
    };
    render() {
	  const columns = [{
			title:'记录名',
            dataIndex: 'name',
            key: 'name',
        }, {
			title:'内容',
            dataIndex: 'content',
            key: 'content',
        }, {
			title:'时间',
            dataIndex: 'date',
            key: 'date',
        }];
	    return (
		<div>
			<div className="custom-filter-dropdown">
				<Input
					ref={ele => this.searchInput = ele}
					placeholder="互联网公司"
					value={this.state.searchText}
					onChange={this.onInputChange}
					onPressEnter={this.onSearch}
				/>
				<Button type="primary" onClick={this.onSearch}>搜索</Button>
			</div>
			<Table columns={columns} dataSource={this.state.data} />
			<style>{`
				.custom-filter-dropdown {
				  padding: 0;
				  margin:0;
				}
				.custom-filter-dropdown input {
				  width: 75%;
				  margin: 1% 0 0 5%;
				}
				.custom-filter-dropdown Button {
				  width: 15%;
				  margin: 1% 5% 0 0;
				}
				.highlight {
				  color: #f50;
				}
			`}</style>
		</div>
		);
	    }
}

export default SearchTable;