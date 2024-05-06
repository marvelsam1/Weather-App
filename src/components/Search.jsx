const Search = ({city, setCity, fetchWeatherData}) => {
    return ( 
        <div className="search-weather">
            <input 
            type="text" 
            id="search-input"  
            placeholder="Enter city name"
            value={city}
            onChange={e => setCity(e.target.value)}/>
            <button className="search-button" onClick={fetchWeatherData}>Search</button>
        </div>
     );
}
 
export default Search;