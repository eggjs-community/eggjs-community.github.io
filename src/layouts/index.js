import React from 'react';
import { Layout } from 'antd';
import Header from './header';
import Footer from './footer';
import styles from './index.module.less';

const { Content } = Layout;

export default props => {
  return (
    <Layout className="layout">
      <Header />
      <Content className={styles.content}>
        <div className={styles.content_block}>{props.children}</div>
      </Content>
      <Footer />
    </Layout>
  );
};
