import path from 'path';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config.babel';

const HOST = 'localhost';
const PORT = 9487;

const server = new WebpackDevServer(webpack(config), {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: config.output.publicPath,
    hot: true,
    stats: {
        chunks: false,
        colors: true
    }
});

server.listen(PORT, HOST, (err) => {
    if (err) console.log(`Error: ${err}`);
    else console.log(`Server is running on ${HOST}:${PORT}`);
});