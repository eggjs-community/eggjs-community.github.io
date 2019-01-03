import React from 'react';
import { Layout } from 'antd';
import styles from './footer.module.less';

const { Footer } = Layout;

export default () => {
  return (
    <Footer className={styles.footer}>
      <div>
        <iframe
          title="star"
          frameBorder="0"
          scrolling="0"
          width="170px"
          height="20px"
          src="https://ghbtns.com/github-btn.html?user=eggjs&repo=egg&type=star&count=true"
        />
      </div>
      <div style={{ marginTop: '0.6em' }}>
        <p className={styles.footer_desc}>
          Copyright © 2018-{new Date().getFullYear()} . <br /> Maintained By{' '}
          <a href="https://github.com/thonatos" rel="noopener noreferrer" target="_blank">
            Suyi (Thonatos.Yang)
          </a>{' '}
          .
        </p>
      </div>
    </Footer>
  );
};
