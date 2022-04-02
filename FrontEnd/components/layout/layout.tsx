import { ReactNode } from "react";
import { Footer } from "./footer/footer";
import { Navigation } from "./navigation/navigation";

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className='layout'>
            <header>
                <Navigation />
            </header>
            <article>
                {children}
            </article>
            <footer>
                <Footer />
            </footer>
        </div>
    )
} 