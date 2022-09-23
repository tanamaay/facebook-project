import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";
function Feed() {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/289910381_579495290402478_8771529483935514001_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Xx2PAgR4y-EAX_RqrYb&_nc_ht=scontent.fdel29-1.fna&oh=00_AT_hTDCv_scmCayOWcvjUdntMlNAgfcxdtUb8giHIZCYRA&oe=62D0EF5D"
        message="Wow this Works"
        timestamp="This a timestamp "
        username="Tanamay patel"
        image="https://images.unsplash.com/photo-1556382363-8967ad2b37f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      />

      <Post
        profilePic="https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/289910381_579495290402478_8771529483935514001_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Xx2PAgR4y-EAX_RqrYb&_nc_ht=scontent.fdel29-1.fna&oh=00_AT_hTDCv_scmCayOWcvjUdntMlNAgfcxdtUb8giHIZCYRA&oe=62D0EF5D"
        message="Wow this Works"
        timestamp="This a timestamp "
        username="Tanamay patel"
        image="https://images.unsplash.com/photo-1633174524827-db00a6b7bc74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=896&q=80"
      />
<Post
        profilePic="https://scontent.fdel29-1.fna.fbcdn.net/v/t39.30808-6/289910381_579495290402478_8771529483935514001_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Xx2PAgR4y-EAX_RqrYb&_nc_ht=scontent.fdel29-1.fna&oh=00_AT_hTDCv_scmCayOWcvjUdntMlNAgfcxdtUb8giHIZCYRA&oe=62D0EF5D"
        message="Wow this Works"
        timestamp="This a timestamp "
        username="Tanamay patel"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/SurfacePro3.JPG/1024px-SurfacePro3.JPG"
      />

    </div>
  );
}

export default Feed;
