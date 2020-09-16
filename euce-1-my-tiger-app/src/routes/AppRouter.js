import React from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import { WorkspaceProvider } from "../contexts/Workspace";
import Login from "./Login";
import Logout from "./Logout";
import Sorting from "./Sorting";
import Advanced from "./Advanced";
import Page from "../components/Page";
import TimeOver from "./TimeOver";

import styles from "./AppRouter.module.scss";
// Uncomment these lines if you want to redirect unauthorized users to login form
// import { useAuth } from "../contexts/Auth";
// const RedirectIfNotLoggedIn = () => {
//     const auth = useAuth();
//     const user = auth.data;
//     const isLoading = auth.isLoading;
//     const shouldRedirectToLogin = !isLoading && !user;
//     return shouldRedirectToLogin ? <Route component={() => <Redirect to="/login" />} /> : null;
// };

const AppRouter = () => {
    return (
        <div className={styles.AppRouter}>
            <Router>
                {/* WorkspaceProvider depends on Router so it must be nested */}
                <WorkspaceProvider>
                    <Route exact path="/sorting" component={Sorting} />
                    <Route exact path="/timeover" component={TimeOver} />
                    <Route exact path="/advanced/dynamic" component={Advanced} />
                    <Route exact path="/dashboard" component={() => <Page>Dashboard</Page>} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/logout" component={Logout} />
                    {/* DELETE THIS LINE  */} <Redirect to="/advanced/dynamic" />
                    {/* Uncomment the next line if you want to redirect unauthorized users to login form */}
                    {/* <RedirectIfNotLoggedIn /> */}
                </WorkspaceProvider>
            </Router>
        </div>
    );
};

export default AppRouter;
