import React from 'react';

const Sidebar = (props) => {
        return(
            <div className="sidebar">
                {props.user.userName}
            </div>

        )
}

export default Sidebar