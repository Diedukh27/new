import {useGetUsersQuery} from "../services/apiUsers.ts";

const UsersPage = () => {

    const {data: users} = useGetUsersQuery();
    console.log('hello app', users);

    return (
        <>
        <h1 className={"text-center"}>Список Користувачів</h1>

        </>
    )
}
export default UsersPage;