import { Outlet } from 'react-router-dom'
import Main from '../vues/Main.tsx'
export default function Auth() {
    return (
        <>
            <Main />
            <Outlet />
        </>
    )
}