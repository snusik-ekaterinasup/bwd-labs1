import './style.css'
import './header.css'
import './404.css'
import './main.css'
import './Landscape mode-cuate.png'
plugins: [
    new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: true,
        chunks: ['index'],
        filename: 'index.html'
    }),

 ]
 