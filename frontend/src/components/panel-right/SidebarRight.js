import React from 'react';
import SearchBar from './SearchBar';
import WhatsHappening from './WhatsHappening';
import WhoToFollow from './WhoToFollow';

const SidebarRight = () => {
    return (
        <div id="sidebarRight">
            <SearchBar />
            <WhatsHappening />
            <WhoToFollow />
        </div>
    )
}

export default SidebarRight;
