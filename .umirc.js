// ref: https://umijs.org/config/
export default {
  theme: require('./theme-config'),
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: false,
        dynamicImport: false,
        title: 'eggjs-community',
        dll: false,
        locale: {
          default: 'zh-CN', //默认语言 zh-CN
          baseNavigator: true, // 为true时，用navigator.language的值作为默认语言
          antd: true, // 是否启用antd的<LocaleProvider />
        },
        hardSource: false,
        routes: {
          exclude: [/components/],
        },
      },
    ],
  ],
};
