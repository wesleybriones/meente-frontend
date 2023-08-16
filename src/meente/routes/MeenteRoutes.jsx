import { Navigate, Route, Routes } from "react-router-dom"
import { AddClientPage, ClientPage, DevicePage, ReportPage } from "../pages"
import { Navbar } from "../../ui"


export const MeenteRoutes = () => {
  return (
    <>
        <Navbar />
        <div className="container">
            <Routes>
                <Route path="clients" element={ <ClientPage /> }/>
                <Route path="add-client" element={ <AddClientPage /> }/>
                <Route path="devices" element={ <DevicePage /> }/>
                <Route path="reports" element={ <ReportPage /> } />

                <Route path="/" element={ <Navigate to="reports" /> }/>

            </Routes>
        </div>
    </>
  )
}
