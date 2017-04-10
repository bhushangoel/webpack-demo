//webpack is based on commonJs pattern therefore we need to use module.export

module.exports = {
    entry: ['./utils.js','./app.js'],              //entry point
    output: {
        filename: 'bundle.js'       //output file
    },
    watch: true                     //watch method, so that whenever we change anything inside our files, webpack would re-run the build
};