import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import alias from '@rollup/plugin-alias';
import path from 'path';

const root = path.resolve(__dirname);
const svgr = require('@svgr/rollup').default

export default {
    input: "src/index.js",
    output: {
        file: "dist/index.js",
        format: "esm",
        globals: { react: 'React', 'react-dom': 'ReactDom', 'styled-components': 'styled',  'react-transition-group': 'ReactTransitionGroup', 'prop-types': 'propTypes'},
    },
    external: ['react', 'react-dom', 'styled-components', 'react-transition-group','prop-types'],
    plugins: [
        svgr(),
        alias(
            {
                resolve: ['*', '.js', '.jsx'],
                entries: [{
                    find: '@',
                    replacement: path.resolve(root, './src'),
                }]
            }
        ),
        nodeResolve({
            extensions: [".js"],
        }),
        babel({
            presets: ["@babel/preset-react"],
            babelHelpers: "bundled",
            exclude: '/node_modules/**',
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        serve({
            open: true,
            verbose: true,
            contentBase: ["", "public"],
            host: "localhost",
            port: 3000,
        }),
        livereload({watch: "src"}),
       ]
}
