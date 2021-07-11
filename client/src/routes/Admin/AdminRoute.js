import { Route } from "react-router-dom";

export default function AdminRoute(){
    return (
        <>
            <Route exact path="/">
                <div>
                    Admin home route
                </div>
            </Route>
            <Route exact path="/add-league-admin">
                <div>
                    League Admin Add
                </div>
            </Route>
        </>
    )
}