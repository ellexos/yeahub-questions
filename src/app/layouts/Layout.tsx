import {Outlet} from "react-router-dom";
import {Container} from "@shared/ui/Container";
import {Header} from "@widgets/appShell/Header";
import {Footer} from "@widgets/appShell/Footer";


export const Layout = () => {
    return (
        <div className={"page"}>
            <Header/>
            <main>
                <Container>
                    <Outlet/>
                </Container>
            </main>
            <Footer/>
        </div>
    );
};
