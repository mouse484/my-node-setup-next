require('source-map-support').install();
require('ts-node').register({ project: '../tsconfig.json' });

require('../src/index')();
