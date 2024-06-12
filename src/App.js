import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './template/lib/owlcarousel/assets/owl.carousel.min.css'
import './template/lib/animate/animate.min.css'
import './template/css/style.css'
import './App.css';
import { PersistGate } from 'redux-persist/integration/react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter
} from "react-router-dom";
import { store } from './store/store'
import { Provider } from 'react-redux'
import { Homesection, ResultsSection, VistaIndividual } from './components';
import { route_HOME, route_INMUEBLE, route_BUSQUEDA, route_PRINTPDF } from './constants'
import { persistStore } from 'redux-persist';
import { VistaIndividualPDF } from './components/VistaIndividual/VistaIndividualPDF/VistaIndividualPDF';

const persistor = persistStore(store);
// require('dotenv').config()
const App = () => {
  return (
    <div className='app'>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <HashRouter>
            <Routes>
              {/* <Route path="/template" element={<TemplateMainComponent />}></Route> */}
              <Route 
                path    = {route_BUSQUEDA} 
                element = {<ResultsSection />}>
              </Route>
              <Route 
                path    = {route_INMUEBLE} 
                element = {<VistaIndividual />}>
              </Route>
              <Route 
                path    = {route_PRINTPDF} 
                element = {<VistaIndividualPDF />}>
              </Route>
              <Route 
                path    = {route_HOME} 
                element = {<Homesection />}>
              </Route>

            </Routes>
          </HashRouter>
        </PersistGate>        
      </Provider>
    </div>
  );
}
export default App;
