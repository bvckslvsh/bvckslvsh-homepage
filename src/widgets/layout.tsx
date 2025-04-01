import React, { ReactNode } from 'react';
import "@/app/assets/styles/globals.css"

interface LayoutProps {
    children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <main>
                {children}  {}
            </main>
        </div>
    );
};

export default Layout;
