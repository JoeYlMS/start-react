import User from "./User";

import './styles.scss'

import {mocData} from "./mocdata";


const Users = () => {

    return (
        <>
            <h2>Users</h2>
            <div className="users_box">
                {mocData.map(user => <User key={user.id} {...user} user_card/>)}
            </div>
        </>
    )
}


export default Users;