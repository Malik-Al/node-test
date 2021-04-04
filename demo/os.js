const os = require('os')

console.log('Операционная система', os.platform());
console.log('Архитектура процессора', os.arch());
// console.log('Info procesor', os.cpus());
console.log('Свободная память', os.freemem());
console.log('home', os.homedir());


