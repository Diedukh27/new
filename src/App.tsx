import './App.css'
// import APP_ENV from "./env";
// import {useGetUsersQuery} from "./services/apiUsers.ts";
import {Route, Routes} from "react-router-dom";
import UsersPage from "./pages/UsersPage.tsx";
import CreatePostPage from "./pages/CreatePostPage.tsx";

function App() {


    return (
        <>
            <Routes>
                <Route path="/">
                    <Route index element={<UsersPage/>}/>
                    <Route path={"posts"}>
                        <Route path={"create"} element={<CreatePostPage/>}/>
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default App
