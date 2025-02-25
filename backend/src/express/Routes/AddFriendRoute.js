import express from 'express'; 

// Import Modules 
import AddFriend from '../Modules/AddFriend.js';

const AddFriendRoute = express.Router(); 

AddFriendRoute.post('/Add', async(req, res)=>{
  const { friendUsername } = req.body.data; 
  try{
    const NewFriend = await AddFriend(friendUsername);
    if(NewFriend.Success){ 
      return res.status(200).json({message: NewFriend.message})
    }
    console.log("Trying to add friend - AddFriendRoute.js")
  }catch(error){
    console.log(error); 
    res.status(500).json({
      error: error.message
    })
  }

})


export default AddFriendRoute; 