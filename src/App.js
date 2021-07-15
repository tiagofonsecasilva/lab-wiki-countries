import './App.css';
import { Route } from "react-router-dom";
import CountryList from './CountriesList';
import CountryDetails from './CountryDetails';
import NavBar from './NavBar';



function App() {
  return (
    <>
    <div style={{backgroundColor: "Blue", color:"white"}}><NavBar /></div>
  <CountryList></CountryList>
    <Route path="/:countryId" component={CountryDetails} />
    </>
  );
}

export default App;
