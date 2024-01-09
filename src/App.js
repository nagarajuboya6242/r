import {Route, Switch} from 'react-router-dom'

import Header from '../components/Header'
import About from '../components/About'
import Home from '../components/Home'
import Contact from '../components/Contact'
import NotFound from '../components/NotFound'

import './App.css'

const App = () => (
    <div className="app-container">
        <div className="responsive-container">
            <Header />
            <div className="app-body">
                <Switch>
                    <Route exact="/" component={Home} />
                    <Route exact="/about" component={About} />
                    <Route exact="/contact" component={Contact} />
                    <Route component={NotFound} />
                </Switch>
            </div>
        </div>
    </div>
)

export default App
