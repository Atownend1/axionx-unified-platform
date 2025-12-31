import { Outlet } from "react-router-dom";

export const PortalLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-1 pt-20">
                <Outlet />
            </main>
        </div>
    );
};
