import { MongoClient } from 'mongodb';
import dotenv from 'dotenv'; 

dotenv.config(); 


const ConnectToDb = async()=>{
  try{
    const client = new MongoClient(process.env.MONGO_URI); 
    return client; 
  }catch(error){
    console.log(error); 
  }
}

export default ConnectToDb; 
