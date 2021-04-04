const path = require('path')

console.log('Названия файла ', path.basename(__filename));
console.log('Названия директорий ', path.dirname(__filename));
console.log('Разширения файла ', path.extname(__filename));
console.log('Parse ', path.parse(__filename).name);
console.log(path.join(__dirname, 'server', 'index.html'));
