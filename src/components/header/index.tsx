import { Component } from "react";
import {Link} from 'react-router-dom'
import { HeaderDiv, HeaderSubDiv, ProfileIcon, InputDiv, HamburgerDiv } from "../styledComponents";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";

class Header extends Component<any> {
    state = {
        hamburgerMenu : false,
        searchValue : ""
    }

    changeMenuDisplayStatus = () => {
        this.setState({
            hamburgerMenu : !this.state.hamburgerMenu,
            searchValue : this.state.searchValue
        })
    }

    setAndSearchValue = (e : React.SyntheticEvent) => {
        this.setState({
            searchValue : (e.target as HTMLInputElement).value,
            hamburgerMenu : this.state.hamburgerMenu
        })
        this.props.setSearchValue(this.state.searchValue)

    }

    render(){

        const {hamburgerMenu} = this.state;

        return (
            <HeaderDiv>
                <HeaderSubDiv>
                    <Link to="/">
                        <img 
                        src="https://res.cloudinary.com/dkfefpnio/image/upload/v1667331240/Group_7399logo_it1ws9.png" 
                        alt="header-icon"
                        height={30}
                        />
                    </Link>
                    <p><strong><Link to="/">Home</Link></strong></p>
                    <p><strong><Link to="/popular">Popular</Link></strong></p>
                </HeaderSubDiv>
                <HeaderSubDiv>
                    <Link to="/search">
                        <InputDiv>
                            <input 
                                placeholder="Search" 
                                type="search" 
                                autoFocus={this.props.search ? true : false}
                                value = {this.state.searchValue}
                                onChange = {this.setAndSearchValue}
                            />
                            <CiSearch />
                        </InputDiv>
                    </Link>
                    <HamburgerDiv>
                        <AiOutlineMenu onClick={this.changeMenuDisplayStatus} color="white" />
                        <div style={{display : hamburgerMenu ? "block" : "none", position: "absolute", top: "60px", right: "30px", backgroundColor: "black", color: "white"}}>
                            <strong><Link to="/">Home </Link></strong>
                            <strong><Link to="/popular">Popular</Link></strong>
                        </div>
                    </HamburgerDiv>
                    <Link to="/profile">
                        <ProfileIcon src="https://res.cloudinary.com/dkfefpnio/image/upload/v1667336213/Groupgirl_vwfdxd.png" alt="profile-icon" height={30} />
                    </Link>
                </HeaderSubDiv>
            </HeaderDiv>
        )
    }
}

export default Header;