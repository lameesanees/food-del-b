import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://lameesanees:luminar@cluster0.qawizbm.mongodb.net/FOOD_DELIVERY?retryWrites=true&w=majority&appName=Cluster0").then(()=>console.log("DB connected"))
}