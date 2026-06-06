import { UserCard } from "../UsersCard.tsx/UserCard"
import { useUsers } from "../../../BLL/useUser"
import css from "./Users.module.css"
// import type { UsersType} from "../../../BLL/useUser"

export function Users(){
    const {users} = useUsers()
    return(
        <div className={css.usersWrapper}>
            {users.map((user) => <UserCard key={user.id} user={user} /> 
            )}
        </div>
    )
}