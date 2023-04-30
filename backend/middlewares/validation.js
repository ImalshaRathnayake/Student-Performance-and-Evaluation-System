const Joi = require('joi')

const validate = async (req,res,next)=>{
    try {
        const { error } = Joi.validate(req.body)
        if(error){
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            })
        }

        next()
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        })
    }
}

module.exports = {
    validate
}