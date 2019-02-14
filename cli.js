#!/usr/bin/env node 
process.env.DEBUG = 'har-file-fetcher:*';

require('@babel/register');
var program = require('commander');
const {
    run
} = require('./fetcher.js');

program
    .version('0.1.0')
    .command('<file> <filter>', 'Har文件路径')
    .option('-f, --filter <filter>', '过滤器')
    .action(function(file, cmd) {
        run(file, program.filter || '**').then(function(){
        	console.log('拉取资源结束！');
        }).catch(err => {
            console.log('拉取资源失败！');
            throw err;
        });
    })
    .parse(process.argv);