const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname, 'test', 'test.txt')


fs.readFile(filePath, 'utf-8', (err, content) => {
  if (err) {
    throw err
  }
  console.log(content);
})




// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//   if(err) {
//     throw err
//    }
//   console.log('Package install');
// })



// const filePath = path.join(__dirname, 'test', 'test.txt')
// fs.writeFile(filePath, 'Hello NodeJs', (err) => {
//   if (err){
//     throw err
//   }
//   console.log('Файл создан');
//   fs.appendFile(filePath, '\nHello NodeJs', (err) => {
//     if (err) {
//       throw err
//     }
//     console.log('Файл создан');
//   })
// })
