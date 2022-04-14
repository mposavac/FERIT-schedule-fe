import { BrowserRouter as Router, Route, Routes as Routing } from 'react-router-dom';

const Routes = () => (
    <Router>
        <Routing>
            <Route path='/'/>
            <Route path='/login'/>
            <Route path='/signup'/>
            <Route path='/raspored'/>
            <Route path='/prostorije'/>
            <Route path='/nastavnici'/>
        </Routing>
    </Router>
)

export default Routes