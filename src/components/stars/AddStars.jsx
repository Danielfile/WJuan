/**
 * Created by hao.cheng on 2017/5/8.
 */
import React from 'react';
import { Row, Col, Card, Table, Popconfirm, Button } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';


class AddStars extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: '书签名',
            dataIndex: 'name',
            width: '30%'
        }, {
            title: '内容',
            dataIndex: 'content',
			width: '50%'
        },{
            title: '数量',
            dataIndex: 'many',
			width: '10%'
        },{
            title: '操作',
            dataIndex: 'operation',
			width: '10%',
            render: (text, record, index) => {
                return (
                    this.state.dataSource.length > 1 ?
                        (
                            <Popconfirm title="删除?" onConfirm={() => this.onDelete(record, index)}>
                                <a>删除</a>
                            </Popconfirm>
                        ) : null
                );
            },
        }];
        this.state = {
            dataSource: [{
                key: '0',
                name: '学习',
                content: '我的学习之路，大学的这些年年月月',
				many: '42',
            }, {
                key: '1',
                name: '生活',
                content: '品一杯淡茶，诗意的栖居',
				many: '31',
            }],
            count: 2,
            deleteIndex: -1
        };
    }
    onDelete = (record, index) => {
        const dataSource = [...this.state.dataSource];
        dataSource.splice(index, 1);
        this.setState({ deleteIndex: record.key});
        setTimeout(() => {
            this.setState({ dataSource })
        }, 500);
    };
    handleAdd = () => {
        const { count, dataSource } = this.state;
        const newData = {
            key: count,
            name: `Edward King ${count}`,
            content: `London, Park Lane no. ${count}`,
			many: 0,
        };
        this.setState({
            dataSource: [newData, ...dataSource],
            count: count + 1,
        });
    };
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div className="gutter-example">
                <BreadcrumbCustom first="书签" second="书签名" />
                <Row gutter={16}>
                    <Col className="gutter-row" md={24}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <Button className="editable-add-btn mb-s" onClick={this.handleAdd}>添加</Button>
                                <Table
                                    bordered
                                    dataSource={dataSource}
                                    columns={columns}
                                    rowClassName={(record, index) => {
                                        if (this.state.deleteIndex === record.key) return 'animated zoomOutLeft min-black';
                                        return 'animated fadeInRight';
                                    }}
                                />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default AddStars;