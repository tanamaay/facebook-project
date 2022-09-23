import React from "react";
import Story from "./Story";
import "./StoryReel.css";
function StoryReel() {
  return (
    <div className="stroyReel">
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg/220px-MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg"
        profileSrc="https://pbs.twimg.com/profile_images/1221837516816306177/_Ld4un5A_400x400.jpg"
        title="Satya Nadella"
      />

      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Sundar_pichai.png/220px-Sundar_pichai.png"
        profileSrc="https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg"
        title="Sundar Pichai"
      />

      <Story
        image="https://etimg.etb2bimg.com/thumb/msid-56434678,width-1200,resizemode-4/.jpg"
        profileSrc="https://pbs.twimg.com/profile_images/1154421883552407552/d74yFwi4_400x400.jpg"
        title="Kalyan Krishna"
      />
 
      <Story
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Andy_Jassy_in_2010_%28cropped%29.jpg/220px-Andy_Jassy_in_2010_%28cropped%29.jpg"
        profileSrc="https://pbs.twimg.com/profile_images/1412402561605259265/D9bvjpz7_400x400.jpg"
        title="Andy Jassy"
      />

<Story
        image="https://upload.wikimedia.org/wikipedia/commons/1/18/Subhasis_Chaudhuri.jpg"
        profileSrc="https://pbs.twimg.com/profile_images/975960311957204992/FPpG6J4A_400x400.jpg"
        title="Subhasis"
      />
    </div>
  );
}

export default StoryReel;
