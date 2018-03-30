/**
 *
 * 添加注释
 * Created by SEELE on 2018/1/12
 *
 */
import React, { Component } from 'react';
import { Col, Card, Row } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import styles from './index.module.less';

class CloudDisk extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom first="云盘" />
                <Row gutter={16}>
                    <Col md={24}>
                        <Card title="我的云盘" bordered={false}>
                            <div className={styles.header}>
                                <p>万卷云盘</p>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CloudDisk;