import { Route } from "react-router-dom";

export default function UserRoute(){
    return (
        <>
            <Route exact path="/">
                <div>
                    User Home route
                </div>
            </Route>
            <Route exact path="/join-league">
                <div>
                    Join League
                </div>
            </Route>
        </>
    )
}