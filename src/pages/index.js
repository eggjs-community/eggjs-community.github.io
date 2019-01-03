import React, { Component } from 'react';
import { Card, Col, Row, Alert } from 'antd';

import styles from './index.css'

import { qrcode_dingtalk, qrcode_wechat_suyi, qrcode_wechat_duncup } from '../config';

const contacts = [
  {
    title: 'Egg 钉钉群',
    cover: qrcode_dingtalk,
  },
  {
    title: 'Egg.js 微信',
    cover: qrcode_wechat_duncup,
  },
  {
    title: 'Egg.js 微信',
    cover: qrcode_wechat_suyi,
  },
];

const message =
  '因微信群成员数已超过100，无法二维码邀请。请先加下面两位同学的微信，留言 `eggjs-community`';

// <ReactMarkdown source={data} />
export default class Home extends Component {
  render() {
    return (
      <div className="container">
        <Alert message={message} type="warning" style={{ marginBottom: '16px' }} closable />

        <Row gutter={32}>
          {contacts.map(contact => {
            const { title, cover } = contact;
            return (
              <Col span={8}>
                <Card title={title} bordered={false}>
                  <img className={styles.qrcode} src={cover} alt="" />
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
