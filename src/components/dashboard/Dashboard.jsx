/**
 * Created by hao.cheng on 2017/5/3.
 */
import React from 'react';
import { Row, Col, Card, Icon } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import EchartsViews from './EchartsViews';
import EchartsProjects from './EchartsProjects';
import b1 from '../../style/imgs/b1.jpg';
import b2 from '../../style/imgs/b2.jpg';


class Dashboard extends React.Component {
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom />
                <Row gutter={10}>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="heart" className="text-2x text-danger" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">收藏</div>
                                        <h2>301</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="cloud" className="text-2x" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">云数据</div>
                                        <h2>4122</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={4}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="pay-circle-o" className="text-2x text-info" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">积分</div>
                                        <h2>802</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="clear y-center">
                                    <div className="pull-left mr-m">
                                        <Icon type="mail" className="text-2x text-success" />
                                    </div>
                                    <div className="clear">
                                        <div className="text-muted">订阅</div>
                                        <h2>10</h2>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={16}>
                        <div className="gutter-box">
                            <Card bordered={false} className={'no-padding'}>
                                <EchartsProjects />
                            </Card>
                        </div>
                    </Col>
                </Row>
                <Row gutter={10}>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>向孔子学做人</h3>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <div>
                                    <img src={b2} className="img-responsive" alt="test" />
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>任务栏</h3>
                                    <small>以下任务已解决，刷新领取任务？</small>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <ul className="list-group no-border">
                                    <li className="list-group-item">
                                        <a href="" className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a href="http://www.cnblogs.com/eaglezb/p/6602123.html" className="block">鸣人</a>
                                            <span className="text-muted">如何用git命令行上传本地代码到github？</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="" className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a href="http://blog.renren.com/share/246512177/13927978645/1" className="block">佐助</a>
                                            <span className="text-muted">C盘哪些文件可以删除？</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="" className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a href="https://www.jianshu.com/p/a62da41dacce" className="block">小樱</a>
                                            <span className="text-muted">React环境搭建？</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="" className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a href="http://anzhu.net/?p=3079" className="block">雏田</a>
                                            <span className="text-muted">学习共同体？</span>
                                        </div>
                                    </li>
                                    <li className="list-group-item">
                                        <a href="" className="pull-left w-40 mr-m">
                                            <img src={b1} className="img-responsive img-circle" alt="test" />
                                        </a>
                                        <div className="clear">
                                            <a href="http://jiongks.name/blog/for-after-college/" className="block">天天</a>
                                            <span className="text-muted">走出校园要注意什么？</span>
                                        </div>
                                    </li>
                                </ul>
                            </Card>
                        </div>
                    </Col>
                    <Col className="gutter-row" md={8}>
                        <div className="gutter-box">
                            <Card bordered={false}>
                                <div className="pb-m">
                                    <h3>我的书签</h3>
                                    <small>最近7天用户访问量</small>
                                </div>
                                <a className="card-tool"><Icon type="sync" /></a>
                                <EchartsViews />
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Dashboard;