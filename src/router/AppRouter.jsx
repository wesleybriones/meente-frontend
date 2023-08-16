import { Route, Routes } from "react-router-dom"

import { MeenteRoutes } from "../meente";
import { LoginPage } from "../auth";
import { HomePage } from "../views";


export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="home" element={ <HomePage /> }/>

            <Route path="login" element={ <LoginPage /> }/>

            <Route path="/*" element={ <MeenteRoutes /> }/>

        </Routes>
    </>
    )
}
