import { Route } from 'react-router-dom';
import comingSoon from '../../assets/comingSoon.jpg';
import Navigation from '../../components/lib/Navigation/Navigation';

export default function LeagueAdmin() {
  const routes = [
    { url: '/', name: 'Home' },
    { url: '/add-league', name: 'Add League' },
  ];
  return (
    <>
      <Navigation routeDetails={routes} />
      <Route exact path="/">
        <div className="d-flex justify-content-between align-items-center align-content-center flex-column">
          <img src={comingSoon} alt="" style={{ width: '100%' }} />
        </div>
      </Route>
      <Route exact path="/add-league">
        <div className="d-flex justify-content-between align-items-center align-content-center flex-column">
          <img src={comingSoon} alt="" style={{ width: '100%' }} />
        </div>
      </Route>
    </>
  );
}
