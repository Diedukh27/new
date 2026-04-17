import {useGetUsersQuery} from "../services/apiUsers.ts";
// import {Link} from "react-router-dom";
import Myheader from "../common/MyHeader";
import MyLink from "../common/MyLink";

const UsersPage = () => {

    const {data: users} = useGetUsersQuery();
    console.log('hello app', users);

    return (
        <>
            <Myheader text={"Список Користувачів"}/>
            <MyLink text={"Перейти до створення"} to={"/posts/create"}/>
        </>
    )
}
export default UsersPage;