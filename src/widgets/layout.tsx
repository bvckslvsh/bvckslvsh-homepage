import React, { ReactNode } from 'react';
import "@/app/assets/styles/globals.css"

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <header>
                <h1>blank</h1>
            </header>
            <main>
                {children}  {}
            </main>
            <footer>
                <p>blank</p>
            </footer>
        </div>
    );
};

export default Layout;
