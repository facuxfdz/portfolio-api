const mongoose = require('mongoose');

const typeString = {
    type: String,
    required: true,
    trim: true
};

const UserSchema = mongoose.Schema({
    headerInfo:typeString ,
    aboutInfo: {
        className: typeString,
        title: typeString,
        description: typeString
    },
    projectsInfo: {
        className: typeString,
        title: typeString,
        description: typeString
    },
    formationInfo: {
        className: typeString,
        title: typeString,
        universityData: {
            name: typeString
        },
        passedSubjects: [{
            name: typeString,
            passedYear: typeString,
            grade: Number,
            promoted: Boolean,
            finalExam: Boolean
        }],
        inProgressSubjects: [{
            name: typeString,
            day: typeString,
            from: typeString,
            to: typeString
        }]
    }
});

module.exports = mongoose.model('User', UserSchema);