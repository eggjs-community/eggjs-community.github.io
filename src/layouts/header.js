import React, { Component } from 'react';
import { Layout, Row, Col, Menu, Button } from 'antd';
import Link from 'umi/link';
import { formatMessage, setLocale, getLocale } from 'umi/locale';
import { menus, logo } from '../config';
import styles from './header.module.less';

const { Header } = Layout;

export default class HeaderComponent extends Component {
  changeLocale = () => {
    const locale = getLocale();
    setLocale(locale === 'en-US' ? 'zh-CN' : 'en-US');
  };

  render() {
    return (
      <Header className={styles.header}>
        <Row>
          <Col lg={2} md={20} xs={12}>
            <Link to="/" className={styles.logo}>
              <img src={logo} alt="logo" />
            </Link>
          </Col>
          <Col lg={20} md={0} xs={0}>
            <Menu theme="light" mode="horizontal" className={styles.menu}>
              {Object.entries(menus).map((item, index) => {
                const [title, url] = item;
                return (
                  <Menu.Item key={index}>
                    {url.startsWith('http') || url === '/api/' ? (
                      <a href={url}>{formatMessage({ id: `header.${title}` })}</a>
                    ) : (
                      <Link to={`${url}`}>{formatMessage({ id: `header.${title}` })}</Link>
                    )}
                  </Menu.Item>
                );
              })}
            </Menu>
          </Col>
          <Col
            lg={2}
            md={4}
            xs={12}
            style={{
              textAlign: 'right',
            }}
          >
            <Button onClick={this.changeLocale}>
              {formatMessage({ id: 'header.translations' })}
            </Button>
          </Col>
        </Row>
      </Header>
    );
  }
}
