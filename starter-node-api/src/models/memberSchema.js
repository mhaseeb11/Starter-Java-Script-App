import mongoose from 'mongoose';

const Member = mongoose.model('member', {
    userName: {type: String},
    email: {type: String},
    city: {type: String},
    mobileNumber: {type: Number},
});

export default Member;