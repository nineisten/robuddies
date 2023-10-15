import React from "react";


const SearchBox =({searchfield,searchChange})=>{
    return(
        <div>
            <input 
                className = 'pa2'
                id = "searchBox"
                name = 'searchBox'
                type = 'search'
                placeholder='Search Robots'
                onChange = {searchChange}
            />
        </div>
    )

}

export default SearchBox