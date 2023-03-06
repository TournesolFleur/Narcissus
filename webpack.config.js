const path = require('path');

module.exports= {
    entry:path.join(__dirname,'app','index.tsx'),
    resolve:{
        extensions:[
            ".ts",".tsx",".js",".jsx",".css"
        ]
    },
    devtool:"inline-source-map",
    module:{
        rules:[
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: '/node_modules/',
              },
              {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ],
              },
        ]
    },
    output:{
        filename:'bundle.js',
        path:path.resolve(__dirname,'out','app')
    }
}