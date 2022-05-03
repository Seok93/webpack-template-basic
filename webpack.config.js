//import
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
// export
module.exports = {
  // 파일 읽어들이기 시작하는 진입점 설정
  entry: './js/main.js',

  // 결과물(번들)을 반환하는 설정
  output: {
    // __dirname : 현재 파일이 있는 경로를 나타냄 (webpack.config.js의 현 위치)
    // 아래의 path와 filename 설정은 default로 기본적으로 webpack이 사용하는 설정이다.
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js',

    // 기존에 만둘어두었던 내용을 삭제
    clean: true,
  },

  module: {
    rules: [
      {
        // *.css로 끝나는 모든 파일들이 대상이 된다.
        test: /\.s?css$/,
        //순서는 아래에서 위로 올라오기에 sass-loader가 먼저 실행된다. (순서 중요)
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },

  // 번들링 후 결과물의 처리 방식 등에 필요한 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html',
    }),
    new CopyPlugin({
      patterns: [{ from: 'static' }],
    }),
  ],

  // 개발 서버 환경 설정
  devServer: {
    host: 'localhost',
  },
};
