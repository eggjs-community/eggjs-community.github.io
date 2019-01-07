import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col, Card } from 'antd';

import { token } from '../config';

const { Meta } = Card;

const query = `query {
  posts(where: {status: {_eq: 1}}) {
    id
    slug
    title
    status
    description
    cover
    content
  }
}`;

export default class Posts extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    this.load();
  }

  async load() {
    const response = await axios({
      method: 'post',
      url: 'https://hasura.implements.io/v1alpha1/graphql',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      data: {
        query,
      },
    });
    const { data } = response.data;

    this.setState({
      posts: data.posts,
    });
  }

  handleClick = slug => {
    window.location.href = `https://www.yuque.com/egg/nodejs/${slug}`;
  };

  render() {
    const posts = this.state.posts;
    return (
      <div className="container">
        <Row gutter={32}>
          {posts.map((post, index) => {
            const { slug, title, description, cover, content } = post;

            return (
              <Col span={8} style={{ marginBottom: '8px' }} key={index}>
                <Card
                  hoverable
                  title={title}
                  cover={<img alt="post" src={cover || null} />}
                  onClick={this.handleClick.bind(this, slug)}
                >
                  <Meta title={content} description={description} />
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
