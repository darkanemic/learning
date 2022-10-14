import fs from 'fs'
fs.appendFile('my-file.txt', 'Фаил создан Node.js', (err) => {
  if (err) throw err
  console.log('Файл сохранён!')
})
setTimeout(() => console.log('END'), 30000)