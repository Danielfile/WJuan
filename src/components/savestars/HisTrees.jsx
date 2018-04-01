/**
 * Created by Daniel on 2018/3/30.
 */
import React from 'react';
import { Row, Col, Card } from 'antd';
import b3 from '../../style/imgs/b3.jpg';
import b4 from '../../style/imgs/b4.jpg';

class RecDay extends React.Component {
	render(){
		return (
			<Row gutter={10}>
                <Col className="gutter-row" md={8}>
                    <div className="gutter-box">
                        <Card bordered={false}>
                            <div className="pb-m">
                                <h3>物态和物态变化</h3>
                            </div>
                            <div>
                                <img src={b3} className="img-responsive" alt="test" />
                            </div>
                        </Card>
                    </div>
                </Col>
                <Col className="gutter-row" md={8}>
                    <div className="gutter-box">
                        <Card bordered={false}>
                            <div className="pb-m">
                                <h3>思维导图，开启人的智慧</h3>
                            </div>
                            <div>
                                <img src={b4} className="img-responsive" alt="test" />
                            </div>
                        </Card>
                    </div>
                </Col>
            </Row>
		);
	};
}

export default RecDay;