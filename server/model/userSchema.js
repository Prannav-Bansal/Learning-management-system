const mongoose = require('mongoose');
const { Schema } = mongoose;
const JWT = require('jsonwebtoken');
const bcrypt = require ('bcrypt');

const userSchema = new Schema({
    name: {
        type: String,
        required:[ true,'user name is required'],
        minLength : [5, 'Name must be at least 5 characters long'],
        maxLength : [50, 'Name must be at most 50 characters long'],
        trim : true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        lowercase: true,
        unique:[true, 'already registered'],
    },
    password: {
        type: String,
    },
    forgotPasswordToken: {
        type: String,
    },
    forPasswordExpiry: {
        type: Date,
    }
    },
    {
  timestamps: true  // ✅ CORRECT: This goes outside the field definitions
});


userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) {
        return next();
    }
    this.password = await bcrypt.hash(this.password, 10);
    return next();
});



    userSchema.methods = {
    jwtToken(){
        return JWT.sign(
            { id: this._id, email: this.email },
            process.env.SECRET,
            { expiresIn: '1d' }
        );

    }



}
const userModel = mongoose.model('User', userSchema);
module.exports = userModel;