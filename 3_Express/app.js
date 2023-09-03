const express = require("express")
const myMiddlewareFun = require("./middlewares/middle")
const morgan = require("morgan")

const app = express()

// get, post, put, delete 

app.use(express.json())

app.use(myMiddlewareFun)

app.use(function(req, res, next){
    console.log("I am the second middleware")
    next()
})

app.use(morgan("tiny"))

let courses = [
    {id:1, name: 'Javascript'},
    {id:2, name: 'Java'},
    {id:3, name: 'Python'},
]

app.get("/", (req, res) => {
    res.send("Hello from Sclar Topics")
})

app.get("/about", (req, res) => {
    res.send("We Create Impact")
})

app.get("/contact", (req, res) => {
    res.send("We Create Impact")
})

app.get('/courses', (req, res)=> {
    res.send(courses)
})

app.post('/courses', (req, res) => {
    const course = {
        id: courses.length +1,
        name: req.body.name 
    }
    courses.push(course)
    res.send(course)
})

// put method 

app.put('/courses:name', (req, res) => {
    let course = courses.find(course => course.name === req.params.name)
    course.name = res.body.name
    res.send(course)
}) // Update

// Route Parameters 

app.get('/courses/:name', (req, res)=> {
    // res.send(req.params)
    //console.log(req.params)
    let course = courses.find(course => course.name === (req.params.name))
    if (!course)res.status(404).send("The Course you are looking for does not exist")
    res.send(course)
})

// app.delete('/courses:name', (req, res) => {
//     let updatedCourses = courses.filter(course => course.name !== req.params.name)
//     courses = updatedCourses 
//     res.send(courses)
// })

app.delete("/courses:id", (req, res) => {
    let newCourse = courses.filter(course => course.id === req.params.id)
    let index = courses.indexOf(newCourse)
    courses.splice(index, 1)
    res.send(courses)
})


const port = process.env.PORT || 3001
app.listen(port, ()=> console.log(`Port is Running on ${port}`))