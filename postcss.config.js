module.exports = {
    plugins: {
        'autoprefixer': {},
        'postcss-pxtorem': {
            'rootValue': 108,
            'propList': ['*'],
            'minPixelValue': 2,
            'selectorBlackList': [],
        },
    },
};