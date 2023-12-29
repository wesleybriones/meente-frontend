import { Navigate, Route, Routes } from "react-router-dom"

import { MeenteRoutes } from "../meente";
import { LoginPage } from "../auth";
import { HomePage } from "../views";
import { useAuthStore } from "../auth/hooks";
import { useEffect } from "react";


export const AppRouter = () => {

    const { status, checkAuthToken } = useAuthStore()
    
    useEffect(() => {
        checkAuthToken();
    }, [])
    
    if ( status === 'checking'){
        return ( <h3>Cargando...</h3> )
    }

    return (
        <>
            <Routes>
                {
                    ( status === 'not-authenticated' )
                    ?(
                        <>
                            <Route path="/auth/*" element={ <LoginPage /> }/>
                            <Route path="/*" element={ <Navigate to="/auth/login" /> }/>
                        </> 
                    )
                    : (
                        <>
                            <Route path="/" element={ <MeenteRoutes /> }/>
                            <Route path="/*" element={ <Navigate to="/" /> }/>
                        </>
                    )
                }
            </Routes>
        </>
        )
}
