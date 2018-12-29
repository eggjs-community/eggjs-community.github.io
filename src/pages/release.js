import { Timeline, Icon } from 'antd';
import styles from './release.css';

import axios from 'axios';

import React, { Component } from 'react';

export default class release extends Component {
  state = {
    tags: [],
  };

  componentDidMount() {
    this.load();
  }

  load = async () => {
    const { data } = await axios.get('https://api.github.com/repos/eggjs/egg/releases');
    console.log(tags);
    this.setState({
      tags: data,
    });
  };

  render() {
    const tags = this.state.tags;
    return (
      <div>
        <Timeline mode="alternate">
          {tags.map(tag => {
            const { name, tag_name, url } = tag;
            return <Timeline.Item>{name}</Timeline.Item>;
          })}
        </Timeline>
      </div>
    );
  }
}
