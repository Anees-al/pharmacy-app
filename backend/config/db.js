import mongoose from 'mongoose';


const connectDb=async()=>{
    try {
        await mongoose.connect(process.env.MONGOOSE_URL);
        console.log('Connected to database sucessfully')
    } catch (error) {
       console.log(error.message)
       process.exit(1)
    }
}


export default connectDb