import React from 'react';

// Components
import SidebarItem from './SidebarItem';

// --- Material UI ---
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search"; // alternatively can use hashtag <i class="material-icons">#</i>
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

 const SidebarLeft = () => {
    return (
        <div id="sidebarLeft">
            <div id="sidebarLeft__container">
            <SidebarItem icon={<TwitterIcon />} label="Twitter" />
            <SidebarItem icon={<HomeIcon />} label="Home" />
            <SidebarItem icon={<SearchIcon />} label="Explore" />
            <SidebarItem icon={<NotificationsNoneIcon />} label="Notifications" />
            <SidebarItem icon={<MailOutlineIcon />} label="Messages" />
            <SidebarItem icon={<BookmarkBorderIcon />} label="Bookmarks" />
            <SidebarItem icon={<ListAltIcon />} label="Lists" />
            <SidebarItem icon={<PermIdentityIcon />} label="Profile" />
            <SidebarItem icon={<MoreHorizIcon />} label="More" />
            <Button id="sidebarLeft__tweet" variant="outlined" fullWidth>Tweet</Button>
            </div>
        </div>
    );
}

export default SidebarLeft;
