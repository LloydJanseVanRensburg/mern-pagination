import { Route } from "react-router-dom";

export default function LeagueAdmin(){
    return (
        <>
            <Route exact path="/">
                <div>
                    League Admin Home route
                </div>
            </Route>
            <Route exact path="/add-league">
                <div>
                    Add League
                </div>
            </Route>
        </>
    )
}