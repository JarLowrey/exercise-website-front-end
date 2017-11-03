module.exports = {
    test: /\.(js|jsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
        loader: 'babel-loader',
        options: {
            "presets": [
                [
                    "env",
                    {
                        "modules": false,
                        "targets": {
                            "browsers": "> 1%",
                            "uglify": true
                        },
                        "useBuiltIns": true
                    }
                ],
                "react"
            ],
            "plugins": [
                "syntax-dynamic-import",
                "transform-object-rest-spread",
                "babel-plugin-styled-components", [
                    "transform-class-properties", {
                        "spec": true
                    }
                ]
            ]
        }

    }
}