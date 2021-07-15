import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
// import Card from 'react-bootstrap/Card'



class CountryList extends React.Component {
    state = {
        countries: [],
    };

    async componentDidMount() {
        const response = await axios.get("https://restcountries.eu/rest/v2/all");
        this.setState({
            countries: response.data,
        });
    }

    componentDidUpdate(prevProps) {

        if (this.props.countryID !== prevProps) {
        }
    }

    render() {
        const { countries } = this.state;
        return (
            <>
                    {countries && countries.length ? (
                        this.state.countries.map((country) => {
                            return (
                                <>
                                    <div key={country.cca3} class="card mb-3" style={{width:"20%", overflow:"scroll", marginBottom: "0.2rem!important"}}>
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src={country.flag} class="img-fluid rounded-start" alt={country.cca3}></img>
                                            </div>
                                            <div class="col-md-8">
                                                <div class="card-body">
                                                    <NavLink to={`/${country.alpha3Code}`} class="card-title">{country.name}</NavLink>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>);
                        })
                    ) : (
                        <p style={{ color: "red" }}>Loading...</p>
                    )}
            </>
        );
    }
}
export default CountryList;