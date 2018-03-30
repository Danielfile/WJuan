/**
 * Created by Daniel on 2018/3/30.
 */
import React from 'react';
import { TreeSelect, Tag } from 'antd';

const TreeNode = TreeSelect.TreeNode;

class ModuleSubmit extends React.Component {
	state = {
		value: undefined,
	}
	onChange = (value) => {
		console.log(arguments);
		this.setState({ value });
	}
	render() {
		return (<div>
		    <TreeSelect
				showSearch
				style={{ width: 300 }}
				value={this.state.value}
				size="large"
				dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
				placeholder="Please select"
				allowClear
				treeDefaultExpandAll
				onChange={this.onChange}
		    >
				<TreeNode value="parent 1" title="parent 1" key="0-1">
					<TreeNode value="parent 1-0" title="parent 1-0" key="0-1-1">
					<TreeNode value="leaf1" title="my leaf" key="random" />
					<TreeNode value="leaf2" title="your leaf" key="random1" />
					</TreeNode>
					<TreeNode value="parent 1-1" title="parent 1-1" key="random2">
					<TreeNode value="sss" title={<b style={{ color: '#08c' }}>sss</b>} key="random3" />
					</TreeNode>
				</TreeNode>
		    </TreeSelect>
		    <div>
				<h4 style={{ marginBottom: 16 }}>Presets:</h4>
				<div>
					<Tag color="magenta">magenta</Tag>
					<Tag color="red">red</Tag>
					<Tag color="volcano">volcano</Tag>
					<Tag color="orange">orange</Tag>
					<Tag color="gold">gold</Tag>
					<Tag color="lime">lime</Tag>
					<Tag color="green">green</Tag>
					<Tag color="cyan">cyan</Tag>
					<Tag color="blue">blue</Tag>
					<Tag color="geekblue">geekblue</Tag>
					<Tag color="purple">purple</Tag>
				</div>
				<h4 style={{ margin: '16px 0' }}>Custom:</h4>
				<div>
					<Tag color="#f50">#f50</Tag>
					<Tag color="#2db7f5">#2db7f5</Tag>
					<Tag color="#87d068">#87d068</Tag>
					<Tag color="#108ee9">#108ee9</Tag>
				</div>
		    </div>
		</div>);
	};
}

export default ModuleSubmit;