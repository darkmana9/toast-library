import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import babel from '@rollup/plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import alias from "@rollup/plugin-alias";
import path from 'path';

const root = path.resolve(__dirname);
const svgr = require('@svgr/rollup').default

export default {
    input: "src/index.js",
    output: {
        file: "dist/bundle.js",
        format: "iife",
        sourcemap: true,
    },
    plugins: [
        svgr(),
        alias(
            {
                resolve: ['*', '.js', '.jsx', '.svg'],
                entries: [{
                    find: '@',
                    replacement: path.resolve(root, './src'),
                }]
            }
        ),
        nodeResolve({
            extensions: [".js"],
        }),
        replace({
            'process.env.NODE_ENV': JSON.stringify('development'),
            preventAssignment: true
        }),
        babel({
            presets: ["@babel/preset-react"],
            babelHelpers: "runtime",
            exclude: '/node_modules/**',
        }),
        commonjs(),
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