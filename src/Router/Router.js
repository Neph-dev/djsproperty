/*
  Using react-router-dom@v5  
  Declare and set the exact path to every page component.
*/

import { BrowserRouter as Routers, Route, Switch } from 'react-router-dom';

//import the pages.
import Accomodations from '../Pages/Accomodations';
import Contact from '../Pages/Contact';
import Home from '../Pages/Home';
import ViewUnit from '../Pages/ViewUnit';

// Import authentication components.
import Login from '../Pages/Authentication/Login';

// Import tenant dashboard components.
import TenantPortal from '../Pages/TenantPortal';

// Import admin dashboard components.
import Admin from '../Pages/Admin';
import AddUnit from '../Pages/Admin/Pages/AddUnit';
import UnitsAndTenants from '../Pages/Admin/Pages/UnitsAndTenants';

export default function Router() {
  return (
    <Routers>
      <Switch>           
          <Route exact path='/' component={Home} />
          <Route exact path='/Accomodations' component={Accomodations} />
          <Route exact path='/Contact' component={Contact} />
          <Route exact path='/View-unit' component={ViewUnit} />

          {/* Authentication components */}
          <Route exact path='/Login' component={Login} />
          
          {/* tenants components */}
          <Route exact path='/Tenant-portal' component={TenantPortal} />

          {/* admin components */}
          <Route exact path='/Admin-dashboard' component={Admin} />
          <Route exact path='/Units-tenants' component={UnitsAndTenants} />
          <Route exact path='/Add-unit' component={AddUnit} />
      </Switch>
    </Routers>
  )
}