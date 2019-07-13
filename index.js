#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

const cardText = fs.readFileSync(path.join(__dirname, 'cart-text'), 'utf8');
console.log(cardText);
