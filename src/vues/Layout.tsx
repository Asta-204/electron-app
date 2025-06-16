import { Outlet, useLocation } from 'react-router'
import Main from '../vues/Main.tsx'
export default function Layout() {
    var data = useLocation()
    let disp = data.state.disp
    disp?console.log(disp):null;
    
    return (
        <>
            <Main />
            <main style={{display:'block'}}>
                <Outlet />
            </main>
        </>
    )
}