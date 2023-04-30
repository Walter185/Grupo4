import Barra from './nav';

const Layout = ({children}) => {
    return (
        <div>
            <Barra />
            <main>{children}</main>
        </div>
    )
}

export default Layout;
