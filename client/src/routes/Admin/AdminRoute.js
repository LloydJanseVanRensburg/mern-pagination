import { Route } from 'react-router-dom';
import comingSoon from '../../assets/comingSoon.jpg';
import Navigation from '../../components/lib/Navigation/Navigation';

export default function AdminRoute() {
  const routes = [
    { url: '/', name: 'Home' },
    { url: '/add-league-admin', name: 'Add League Admin' },
  ];
  return (
    <>
      <Navigation routeDetails={routes} />
      <Route exact path="/">
        <div className="d-flex justify-content-between align-items-center align-content-center flex-column">
          <img src={comingSoon} alt="" style={{ width: '100%' }} />
        </div>
      </Route>
      <Route exact path="/add-league-admin">
        <div className="d-flex justify-content-between align-items-center align-content-center flex-column">
          <img src={comingSoon} alt="" style={{ width: '100%' }} />
        </div>
      </Route>
    </>
  );
}
