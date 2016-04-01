'use strict';

// ===============================================
// Basic config
// ===============================================
const NAME = 'sense-hat';
const VERSION = '0.1.0';
const DESCRIPTION = 'Control the Sense HAT add-on for the Raspberry Pi, in JavaScript!';
const KEYWORDS = ['raspberry', 'pi', 'sense', 'HAT',
  'GPIO', 'LEDs', 'matrix', 'accelerometer', 'gyroscope', 'IMU',
  'sensors', 'humidity', 'temperature'];

// ===============================================
// Helpers
// ===============================================
const runMultiple = arr => arr.join(' && ');
const runTestCov = env => {
  const envStr = env != null ? `${env} ` : '';
  return runMultiple([
    `cross-env ${envStr}nyc ava`,
    'mv .nyc_output/* .nyc_tmp/',
  ]);
};

// ===============================================
// Specs
// ===============================================
const specs = {

  // -----------------------------------------------
  // General
  // -----------------------------------------------
  name: NAME,
  version: VERSION,
  description: DESCRIPTION,
  main: 'lib/es5/index.js',
  author: 'Guillermo Grau Panea',
  license: 'MIT',
  keywords: KEYWORDS,
  homepage: `https://github.com/guigrpa/${NAME}#readme`,
  bugs: { url: `https://github.com/guigrpa/${NAME}/issues` },
  repository: {
    type: 'git',
    url: `git+https://github.com/guigrpa/${NAME}.git`,
  },

  // -----------------------------------------------
  // Scripts
  // -----------------------------------------------
  scripts: {

    // Top-level
    compile:                    runMultiple([
                                  'rm -rf ./lib',
                                  'mkdir lib',
                                  'babel -d lib/es5 src',
                                  'babel --no-babelrc --plugins transform-flow-strip-types -d lib/es6 src',
                                  'cp -r src lib/es6_flow'
                                ]),
    docs:                       'extract-docs --template docs/templates/README.md --output README.md',
    build:                      runMultiple([
                                  'npm run lint',
                                  'npm run flow',
                                  'npm run compile',
                                  'npm run test',
                                  'npm run docs',
                                ]),
    travis:                     runMultiple([
                                  'npm run compile',
                                  'npm run testCovFullExceptMin',
                                ]),

    // Static analysis
    lint:                       'eslint src',
    flow:                       'flow && test $? -eq 0 -o $? -eq 2',
    flowStop:                   'flow stop',

    // Testing - general
    test:                       'npm run testCovFull',
    testCovFull:                runMultiple([
                                  'npm run testCovPrepare',
                                  'npm run testDev',
                                  'npm run testProd',
                                  'npm run testMin',
                                  'npm run testCovReport',
                                ]),
    testCovFullExceptMin:       runMultiple([
                                  'npm run testCovPrepare',
                                  'npm run testDev',
                                  'npm run testProd',
                                  'npm run testCovReport',
                                ]),
    testCovFast:                runMultiple([
                                  'npm run testCovPrepare',
                                  'npm run testDev',
                                  'npm run testCovReport',
                                ]),

    // Testing - steps
    ava:                        'ava --watch',
    testCovPrepare:             runMultiple([
                                  'rm -rf ./coverage .nyc_output .nyc_tmp',
                                  'mkdir .nyc_tmp',
                                ]),
    testDev:                    runTestCov('NODE_ENV=development'),
    testProd:                   runTestCov('NODE_ENV=production'),
    testMin:                    runTestCov('TEST_MINIFIED_LIB=1'),
    testCovReport:              runMultiple([
                                  'cp .nyc_tmp/* .nyc_output/',
                                  'nyc report --reporter=html --reporter=lcov --reporter=text',
                                ]),
  },


  // -----------------------------------------------
  // Deps
  // -----------------------------------------------
  dependencies: {
    'storyboard-core': '^1.0.0',
    bluebird: '^3.3.4',
    tinycolor2: '^1.3.0',
  },

  devDependencies: {
    'extract-docs': '^1.0.0',
    'cross-env': '^1.0.7',
    'flow-bin': '^0.22.1',

    // Babel (except babel-eslint)
    'babel-cli': '^6.6.5',
    'babel-core': '^6.7.2',
    'babel-plugin-transform-flow-strip-types': '^6.7.0',
    'babel-preset-es2015': '^6.6.0',
    'babel-preset-stage-2': '^6.5.0',

    // Linting
    eslint: '^2.4.0',
    'eslint-config-airbnb': '^6.2.0',
    'eslint-plugin-flowtype': '^2.2.2',
    'eslint-plugin-react': '^4.2.3',  // so that eslint-config-airbnb doesn't complain
    'babel-eslint': '^6.0.0',

    // Testing
    ava: '^0.13.0',
    nyc: '^6.1.1',
  },
};

// ===============================================
// Build package.json
// ===============================================
const _sortDeps = deps => {
  const newDeps = {};
  for (const key of Object.keys(deps).sort()) {
    newDeps[key] = deps[key];
  }
  return newDeps;
};
specs.dependencies = _sortDeps(specs.dependencies);
specs.devDependencies = _sortDeps(specs.devDependencies);
const packageJson = `${JSON.stringify(specs, null, '  ')}\n`;
require('fs').writeFileSync('package.json', packageJson);
