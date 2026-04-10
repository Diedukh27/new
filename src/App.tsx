import './App.css'
// import APP_ENV from "./env";
// import {useGetUsersQuery} from "./services/apiUsers.ts";
import {Route, Routes} from "react-router-dom";
import UsersPage from "./pages/UsersPage.tsx";
import CreateUserPage from "./pages/CreateUserPage.tsx";

function App() {


    return (
        <>
            <Routes>
                <Route path="/">
                    <Route index element={<UsersPage/>}/>
                    <Route path={"users"}>
                        <Route path={"create"} element={<CreateUserPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default App
