import React from 'react';

const SidebarItem = ({ icon, label }) => {
    return (
        <div className="sidebarItem">
            {icon}
            <span className="sidebarItem__label">{label}</span>
        </div>
    );
}

export default SidebarItem;
