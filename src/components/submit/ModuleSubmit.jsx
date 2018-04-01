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
		//console.log(arguments);
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
				placeholder="请选择"
				allowClear
				treeDefaultExpandAll
				onChange={this.onChange}
		    >
				<TreeNode value="color" title="color" key="0-1">
					<TreeNode value="Presets" title="Presets" key="0-1-1">
					<TreeNode value="red" title="red" key="random1" />
					<TreeNode value="volcano" title="volcano" key="random2" />
					<TreeNode value="orange" title="orange" key="random3" />
					<TreeNode value="gold" title="gold" key="random4" />
					<TreeNode value="lime" title="lime" key="random5" />
					<TreeNode value="green" title="green" key="random6" />
					<TreeNode value="cyan" title="cyan" key="random7" />
					<TreeNode value="geekblue" title="geekblue" key="random8" />
					<TreeNode value="purple" title="purple" key="random9" />
					<TreeNode value="magenta" title="magenta" key="random10" />
					</TreeNode>
					<TreeNode value="Custom" title="Custom" key="0-2">
					<TreeNode value="#2db7f5" title={<b style={{ color: '#08c' }}>#2db7f5</b>} key="random3" />
					</TreeNode>
				</TreeNode>
		    </TreeSelect>
		    <div>
				<h4 style={{ marginBottom: 16 }}>Presets:</h4>
				<div>
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
					<Tag color="magenta">magenta</Tag>
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