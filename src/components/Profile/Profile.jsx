import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";

const Profile = () => {
    const { getUserInfo, user } = useContext(UserContext);

    useEffect(() => {
        getUserInfo();
    }, []);

     return (
        <div className="container mt-4">
            <div className="card" style={{ width: '18rem' }}>
                <div className="card-body">
                    <h5 className="card-title">{user.firtName}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                    
                </div>
            </div>
        </div>
    );
};

export default Profile;
