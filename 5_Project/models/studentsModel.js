const mongoose = require('mongoose')
const Joi = require('joi')


const studnetSchema = new mongoose.Schema({
    name : {type: String , required : true , minlenght : 3, maxlength: 30},
    isEnrolled:{type: Boolean, default: false},
    Phone : {type: String, required: true, minlength: 10, maxlength: 25}
})

const Student = mongoose.model('Student', studnetSchema)


async function validateData(student){
    const schema = {
        name : Joi.string().min(3).max(50).required(),
        Phone : Joi.string().min(10).max(50).required(),
        isEnrolled : Joi.Boolean()
    }

    return await Joi.validate(student, schema)
}

exports.Student = student
exports.validate = validateData 