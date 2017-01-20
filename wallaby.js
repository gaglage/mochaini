
module.exports = function (wallaby) {
  return {
    files: [
      'src/**/*.js'
    ],

    tests: [
      'test/**/*.js'
    ],
    compilers: {
      '**/*.js': wallaby.compilers.babel({
        babelrc: true
      })
    },    

    env: {
      type: 'node'
    }
  };
};