const fs = require("fs")

// // reading a file 

// let fileContent = fs.readFileSync("f1.txt")
// console.log('data of file 1-> ' + fileContent)

// // write file 

// fs.writeFileSync("f2.txt" , "This is file 2")
// console.log("File has been written")

// // append a file 

// fs.appendFileSync("f3.txt", ' This is updated data')
// console.log('File has been appended')

// //deleting a File 

// fs.unlinkSync("f2.txt")
// console.log('file2 has been deleted')

// Directories 

// fs.mkdirSync('myDirectory')

// Check the content inside of a directory 

let folderPath = 'F:\\VS Code\\Ultimate Node JS\\1_Node Module Systems\\myDirectory'
let folderContent =  fs.readdirSync(folderPath)
console.log("Folder Content" , folderContent[1])

// check whether a directory exists or not 

let doesExist = fs.existsSync("2_os.js")
console.log(doesExist)

// Remove Directory

fs.rmdirSync("myDirectory")
console.log("File has been deleted")