import { Outlet, useNavigation } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const LayoutPublic = () => {
    const navigation = useNavigation();

    return (
        <>
            <Navbar></Navbar>
            <main className="container">
                {navigation.state === "loading" && (
                    <div className="alert alert-info my-5">Cargando. . .</div>
                )}
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </>
    );
};

export default LayoutPublic;
