import "./SearchCity.css"

const SearchCity = () => {
    return (
        <section className="search-input-container">
            <input id="search-input" type="text" placeholder="Search city..." />
            <button id="search-button">Search</button>
        </section>
    )
}

export default SearchCity;