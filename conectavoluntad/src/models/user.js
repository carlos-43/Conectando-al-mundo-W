import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    name: String,
    LNPat: String,
    LNMat: String,
    password: String
})

export default mongoose.models.User || mongoose.model('User', schema)