import ConnectToDb from "../../../Connection.js";

const AddFriend = async(friend)=>{
  const friendDb = await ConnectToDb("Friends"); 
  const UserDb = await ConnectToDb("Users")
  try{
    const FriendUser = await UserDb.findOne({ 
      username: friend
    });
    if(FriendUser){
      // Checking to see if the Friend has data in the friends collection  
      const FriendUserData = await friendDb.findOne({ 
        _id: FriendUser._id
      }); 
      if(!FriendUserData){ 
        // If not found then create a friend list for the user's friend and update it with the users friend request
        const newFriendUserData = await friendDb.insertOne({ 
          _id: FriendUser._id, 
          friends: [],
          requests: [friend]
        }) 
        return { Success: true, message: "Successfully sent request"}
        
      }
      // If found send the friend request to the user 
      const FriendsNewFriendData = await friendDb.updateOne(
        {_id: FriendUser._id}, 
        {$addToSet: {requests: friend}}
      )
      return { Success: true, message: 'Successfully sent request'}

    }else{ 
      return { Success: false, message: "No user found"}
    }

    
  }catch(error){ 
    console.log(error.message); 
    return new Error(error.message); 
  }
}

export default AddFriend;