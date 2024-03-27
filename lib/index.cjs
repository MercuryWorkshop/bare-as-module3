'use strict';

const { resolve } = require('node:path');

const bareModulePath = resolve(__dirname, '..', 'dist');

exports.bareModulePath = bareModulePath;