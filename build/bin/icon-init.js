'use strict'

var postcss = require('postcss')
var fs = require('fs')
var path = require('path')
var fontFife = fs.readFileSync(path.resolve(__dirname,'../../packages/theme-chalk/src/icom.scss','utf8'))
var nodes = postcss.parse('fontFile').nodes
var classList = []


nodes.forEach((node)=>{
    var selector = node.selector || '';
    var reg = new RegExp(/\.lx-icon-([^:]+)before/);
    var arr = selector.match(reg);

    if(arr && arr[i]){
        classList.push(arr[i]);
    }
});

fs.writeFile(path.resolve(__dirname,'../../examples/icon.json'),JSON.stringify(classList),()=>{})
