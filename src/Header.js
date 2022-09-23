import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import SupervisedUserCircleRoundedIcon from '@mui/icons-material/SupervisedUserCircleRounded';
import Avatar from '@mui/material/Avatar';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/150px-Facebook_f_logo_%282021%29.svg.png" 
            alt=""/>
            <div className="header__input">
                <SearchIcon/>
                <input type="text"/>
            </div>
        </div>
        <div className="header__center">
            <div className="header__options 
            header_options--active">
                <HomeIcon fontSize="large"/>
            </div>

            <div className="header__options">
                <SubscriptionsOutlinedIcon fontSize="large"/>
            </div>
            <div className="header__options">
                <StoreOutlinedIcon fontSize="large"/>
            </div>
            <div className="header__options">
                <SupervisedUserCircleRoundedIcon fontSize="large"/>
            </div>
            <div className="header__options">
                <FlagIcon fontSize="large"/>
            </div>
        </div>
        <div className="header__right">
            <div className="header__info">
                <Avatar/>
                <h4>Tanamay patel</h4>
            </div>
            <IconButton>
                <AddIcon/>
            </IconButton>

            <IconButton>
                <ForumIcon/>
            </IconButton>

            <IconButton>
                <NotificationsActiveIcon/>
            </IconButton>

            <IconButton>
               <ExpandMoreIcon/>
            </IconButton>

        </div>
    </div>
  )
}

export default Header