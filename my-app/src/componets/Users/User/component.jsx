import './styles.scss'

const User = ({id,name,username, email, phone}) => {
    return (
        <div className='user_card' >
            <h3>{name}</h3>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
        </div>
    )
}


export default User;