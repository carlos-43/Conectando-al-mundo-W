import mongoose from 'mongoose';

export async function connectDB(){
    await mongoose.connect('mongodb+srv://AKEMITL04:S.uky2020@conectavision.hcfuv.mongodb.net/?retryWrites=true&w=majority&appName=ConectaVision');
}