import { Redirect, Route } from "react-router-dom";
import jwt from 'jwt-decode';
import LeagueAdmin from "../../../routes/LeagueAdmin/LeagueAdmin"
import AdminRoute from "../../../routes/Admin/AdminRoute"
import UserRoute from "../../../routes/NormalUser/UserRoute"
import UserType from "../../../helpers/enums/UserType";

const PrivateRoute = ({ component: Component, ...rest }) => {

  const getLoggedInUserRoute = (props) => {
    const token = localStorage.getItem("authToken");
    if(!token){
      return false;
    }
    const user = jwt(token); 
    console.log("fecthed user", user);
    if(!user){
      return false
    }
    switch(user.userType){
      case UserType.LeagueAdmin:{ 
        return (<LeagueAdmin {...props} />);
      }
      // eslint-disable-next-line no-lone-blocks
      case UserType.Admin: {
        return (<AdminRoute {...props} />);
      };
      default:{
        return (<UserRoute {...props} />);
      }
    }
  }

  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("authToken") ? (
          getLoggedInUserRoute(props)
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
