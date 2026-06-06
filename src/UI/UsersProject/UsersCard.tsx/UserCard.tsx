import {type UsersType} from "../../../BLL/useUser"
import css from "./UserCard.module.css"

type UserProps = {
    user: UsersType
}


export function UserCard({user}: UserProps){
    const defaultAvatar = 'https://placehold.co/128?text=no+photo'

    return (
        <div className={css.userCardWrapper} >
            <div><img src={user.avatar ?? defaultAvatar}/></div>
            <div>{user.name}</div>
            <div>{user.age >= 18 ? user.age : user.age + " 🔞"} </div>
            <div>{user.email}</div>
            <div>{user.id}</div>
        </div>
    )
}