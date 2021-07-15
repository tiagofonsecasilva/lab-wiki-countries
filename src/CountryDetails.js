import React from "react";
import axios from "axios";


class CountryDetails extends React.Component {
    state = {
        name: "",
        capital: "",
        area: "",
        borders: "",
        flag: "",
    };

    
    async componentDidMount() {
        
        const alpha3Code = this.props.match.params.id;
        const element = await axios.get(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`
        );
        
        this.setState({
          name: element.data.name,
          capital: element.data.capital,
          area: element.data.area,
          borders: element.data.borders,
          flag: element.data.flag,
        });

    }

    async componentDidUpdate(prevProps){
        const alpha3Code = this.props.match.params.id
        const element = await axios.get(`https://restcountries.eu/rest/v2/alpha/${alpha3Code}`)
        if (this.props !== prevProps){
            this.setState({
                capital: element.data.capital,
                area: element.data.area,
                borders: element.data.borders,
                name: element.data.name,
                flag: element.data.flag,
            })
            console.log("try")
        }
        console.log("component did update")
    }

    render() {
        console.log("IN render");
        const { name, capital, area, borders, flag } = this.state;
        return (
        <div>
            <h3>{name}</h3>
            <h4>{capital}</h4>
            <p>{area}</p>
            <p>{borders}</p>
            <img className="flag" src={flag} alt="placeholder" />
        </div>
        );
    }

};

export default CountryDetails;