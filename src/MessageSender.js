import { Avatar } from '@mui/material';
import React, { useState } from 'react'
import './MessageSender.css';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
function MessageSender() {
    const[input,setInput]=useState('');
    const[imageUrl,setImageUrl]=useState('');
    const handleSubmit=e=>{
        e.preventDefault();

        //some db stuff
         setInput("");
         setImageUrl("");
    }
  return (
    <div className="messageSender">
        <div className="massageSender__top">
            <Avatar/>
            <form>
                <input 
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                className="massageSender__input"
                placeholder="What's your mind,"
                />
                <input 
                value={imageUrl}
                onChange={e=>setImageUrl(e.target.value)}
                placeholder="image URL (Optional)"/>
                <button onClick={handleSubmit} type="submit">
                    Hidden submit
                </button>
            </form>
        </div>
        <div className="massageSender__bottom">
            <div className="massageSender__option">
                <VideocamIcon style={{color:"red"}}/>
                <h3>Live Vedio</h3>
            </div>

            <div className="massageSender__option">
                <PhotoLibraryIcon style={{color:"green"}}/>
                <h3>photo/Vedio</h3>
            </div>

            <div className="massageSender__option">
                <EmojiEmotionsIcon style={{color:"orange"}}/>
                <h3>feeling/Activity</h3>
            </div>
        </div>
    </div>
  )
}

export default MessageSender