export { default as logo } from './assets/logo.svg';

export const menus = {
  posts: '/posts',
  plugins: '/plugins',
  tutorials: '/tutorials',
  release: '/release',
};

export const github = {
  owner: 'eggjs',
  repo: 'egg',
  token: process.env.github_token || '',
};
