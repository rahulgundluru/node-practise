const mongoose = require("mongoose")

mongoose.connect('mongodb://127.0.0.1/testDatabase')
.then(() => console.log('Connection is Successful'))
.catch(err => console.log('Couldnoy connect', err))

// Schema 

const courseSchema = new mongoose.Schema({
    name: {type:String, required:true, minlength : 5, maxlength: 200},
    tags : {type: Array, validate: {
        validator : function(tags){
            return tags.length > 1
        }
    }},    
    category:{
        type: String,
        required: true,
        enum: ['DSA', 'Web', 'Mobile', 'Data Science']
    },
    creator: {type:String, required:true},
    publishedDate: {type: Date,default: Date.now},
    isPublished : {type:String, required:true},
    rating: {type: Number, required: function(){return this.isPublished}}

})

// Classes , Objects 
// class-Car, objects - BMW
// class-Schema, objects - Model 

const Course = mongoose.model('Course', courseSchema)

async function createCourse(){
    const course = new Course({
        name: 'MongoDB',
        tags : ['express'],
        category: 'DSA',
        creator: "Adam",
        isPublished: true,
        rating: 4.5
    })

    try {
        // await course.validate()
        const result = await course.save()
        console.log(result)
    } catch (error) {
        for(field in error.errors){
            console.log(error.errors[field])
        }
    }

    
}
createCourse()

// eq (equal)
// gt(greater than)
// gte (greater than and equal to)
// lt
// lte 

// in 
// not in 

// Logical operator 
// or
// and 

async function getCourses(){
    const courses = await Course.find({rating: {$in : [3, 4.4, 4.5, 4]}}).select({name: 1, publishedDate: 2})
    .and([{creator:'Rahul'}, {rating: 2}])
    console.log(courses)
}

// getCourses()

async function updateCourse(id){
    let course = await Course.findById(id)
    if (!course) return;

    course.name = "C++"
    course.creator = "Steve"
    const updatedCourse = await course.save()
    console.log(updatedCourse)
} // updating Document

// updateCourse('64f436460b311c8f787b2998')

// Deleting 

async  function deleteCourse(id){
    let course = await Course.findByIdAndRemove(id)
    console.log(course)
}

// deleteCourse('64f436460b311c8f787b2998')