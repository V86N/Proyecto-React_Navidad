import React, { useContext, useEffect } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { Card } from 'antd';

const Profile = () => {

    const { getUserInfo, user } = useContext(UserContext);

    useEffect(() => {
        getUserInfo()
    }, [])

    if (!user) {
        return <p>cagando</p>
    }
    return <div>
        
        <Card
            title={user.firtName}
            bordered={false}
            style={{
                width: 300,
            }}
        >
            <p>{user.email}</p>
            //pintar OrderS
{/* {user.Orders} */}
        </Card>
    </div>;
};

export default Profile;