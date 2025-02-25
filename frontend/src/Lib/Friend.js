import axios from 'axios'; 

axios.defaults.withCredentials = true; 

class friend { 
  constructor(friendUsername){ 
    this.friendUsername = friendUsername;
  }

  async AddFriend(){  
    try {
      await axios.post('http://localhost:3000/Friends/Add', {
        data: {
          friendUsername: this.friendUsername
        }
      }, {withCredentials: true});

      return { Success: true };
    } catch (error) {
      console.error('Error from adding friend: ', error.message);
      return { Success: false };
    }
  }
}

export default friend;
