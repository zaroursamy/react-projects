
function Search({search, searchHandler}) {

    return (
        <>
            <input
                type='text'
                placeholder='Search contacts ...'
                value={search}
                onChange={searchHandler}
            ></input>
        </>
    );
}

export default Search;