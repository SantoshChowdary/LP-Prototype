import { Component } from "react";
import Header from "../../components/header";

class SearchComponent extends Component <any> {

    state = {
        searchKeyword : ""
    }

    setSearchValue = (value : string) => {
        this.setState({
            searchKeyword : value
        })
    }

    

    render(){
        console.log(this.state)
        return (
            <div style={{ backgroundColor: "black", minHeight: "100vh", maxWidth: "100vw"}}>
                <Header search setSearchValue={this.setSearchValue} />
                <h1>Search</h1>
            </div>
        )
    }
}

export default SearchComponent;