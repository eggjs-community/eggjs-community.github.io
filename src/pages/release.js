import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import { Timeline, Icon, Card, Spin, message } from 'antd';
import octokit from '@octokit/rest';
import styles from './release.css';
import { github as config } from '../config';

export default class Release extends Component {
  state = {
    tags: [],
    loading: true,
  };

  componentDidMount() {
    this.github = new octokit();
    // this.github.authenticate({
    //   type: 'token',
    //   token: config.token,
    // });
    this.load();
  }

  load = async () => {
    try {
      const result = await this.github.repos.listReleases({
        ...config,
        per_page: 100,
        page: 1,
      });

      this.setState({
        tags: result.data || [],
        loading: false,
      });
    } catch (error) {
      console.error(error);
      message.error(error.message, 5);
      this.setState({
        loading: false,
      });
    }
  };

  render() {
    const tags = this.state.tags;
    const loading = this.state.loading;
    const pending = loading ? null : (
      <a href="https://github.com/eggjs/egg/releases" target="_blank" rel="noopener noreferrer">
        More Tags
      </a>
    );
    const pendingDot = loading ? null : <Icon type="tags" />;

    return (
      <div className="container">
        <Spin spinning={loading} className={styles.spin}>
          <Timeline mode="alternate" pending={pending} pendingDot={pendingDot}>
            {tags.map(tag => {
              const { id, name, body, html_url } = tag;
              const color = id % 2 ? 'red' : 'green';
              const title = (
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                  {name}
                </a>
              );
              return (
                <Timeline.Item color={color} key={id}>
                  <Card
                    title={title}
                    bordered={true}
                    bodyStyle={{ textAlign: 'left', overflow: 'scroll' }}
                  >
                    <ReactMarkdown source={body} />
                  </Card>
                </Timeline.Item>
              );
            })}
          </Timeline>
        </Spin>
      </div>
    );
  }
}
