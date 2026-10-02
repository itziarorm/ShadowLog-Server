import mongoose from 'mongoose';

const { Schema } = mongoose;

const shadowSchema = new Schema({
    name: String,
    mode: String,
    equipment: [String]
});

export const Shadow = mongoose.model('Shadow', shadowSchema);