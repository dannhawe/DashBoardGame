const path = require('path');

module.exports = {
  entry: './src/index.js', // Đường dẫn đến tệp tin gốc của ứng dụng
  output: {
    path: path.resolve(__dirname, 'dist'), // Đường dẫn đến thư mục đầu ra sau khi đóng gói
    filename: 'bundle.js' // Tên tệp tin đầu ra
  },
  module: {
    rules: [
      // Quy tắc để xử lý các tệp tin nguồn (ví dụ: JavaScript, CSS, hình ảnh, ...)
      // ...
    ]
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src') // Ánh xạ "@/" đến thư mục "src"
    }
  }
  // Các cấu hình khác cho Webpack
};
