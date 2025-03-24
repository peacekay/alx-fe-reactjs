import React from 'react'

function UserProfile(props) {
    return(
        <div>
            {/* ["Age", "Bio", Name] */}
            <h2>{props.name}</h2>
            <p> Age: {props.age} </p>
            <p> Bio: {props.bio}</p>
        </div>
    );
};
export default UserProfile;