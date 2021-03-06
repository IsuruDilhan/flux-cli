#!/usr/bin/env node
var program = require('commander');
var version = require('../package.json').version;
var init = require('../lib/init');
var initType = require('../lib/type');

program
  .command('init <appname>')
  .alias('i')
  .description('initialize flux application')
  .action(function(appname){
    console.log('---Initializing flux application: %s', appname);
    init(appname);
  }).on('--help', function() {
    
  });

program
  .command('action <name>')
  .alias('a')
  .description('initialize flux application')
  .action(function(name){
    console.log('---creating action: %s', name);
    var argArr = name.split(':');
    var module = argArr[0];
    var actionName = argArr[1];
    initType('action', module, actionName);
  }).on('--help', function() {
  
  });

program
  .command('component <name>')
  .alias('c')
  .description('initialize flux application')
  .action(function(name){
    console.log('---creating component: %s', name);
    var argArr = name.split(':');
    var module = argArr[0];
    var actionName = argArr[1];
    initType('component', module, actionName);    
  }).on('--help', function() {
 
  });

program
  .command('store <name>')
  .alias('s')
  .description('initialize flux application')
  .action(function(name){
    console.log('---creating store: %s', name);
    var argArr = name.split(':');
    var module = argArr[0];
    var actionName = argArr[1];
    initType('store', module, actionName);
  }).on('--help', function() {
 	
  });

program
  .command('constant <name>')
  .alias('k')
  .description('initialize flux application')
  .action(function(name){
    console.log('---creating constant: %s', name);
    var argArr = name.split(':');
    var module = argArr[0];
    var actionName = argArr[1];
    initType('constant', module, actionName);
  }).on('--help', function() {
  
  });


program.parse(process.argv);