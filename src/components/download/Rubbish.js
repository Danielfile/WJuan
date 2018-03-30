/**
 * Created by 叶子 on 2017/7/31.
 */
import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import BreadcrumbCustom from '@/components/BreadcrumbCustom';
import AuthWidget from '@/components/widget/AuthWidget';
import beauty from '@/style/imgs/beauty.jpg';

class Rubbish extends Component {
    render() {
        return (
            <div>
                <BreadcrumbCustom first="下载" second="垃圾箱" />
                <AuthWidget
                    children={auth => (
                        <Row>
                            <Col span={24}>
                                <Card bordered={false} bodyStyle={{minHeight: 600}}>
                                    {!auth.uid && <h2 style={{height: 500}} className="center">垃圾箱</h2>}
                                    {
                                        auth.permissions && auth.permissions.includes('auth/authPage/visit') &&
                                        <div style={{textAlign: 'center'}}>
                                            <img src={beauty} alt="" style={{height: 400}} />
                                            {(auth.permissions.includes('auth/authPage/edit') &&
                                            <div>
                                                <p>看啥子美女，看点美景就行啦~<span role="img" aria-label="" aria-labelledby="">😄😄</span></p>
                                                <p>管理员身份登录才能看到这两段话</p>
                                            </div>) ||
                                            <div>
                                                <p>管理员登录将看到不一样的效果</p>
                                            </div>
                                            }
                                        </div>

                                    }
                                </Card>
                            </Col>
                        </Row>
                    )}
                />
            </div>

        )
    }
}

export default Rubbish;