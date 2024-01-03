import { Component } from "react";
import {Link} from 'react-router-dom'
import { HeaderDiv, HeaderSubDiv, ProfileIcon, InputDiv, HamburgerDiv } from "../styledComponents";
import { CiSearch } from "react-icons/ci";
import { AiOutlineMenu } from "react-icons/ai";

class Header extends Component {
    state = {
        hamburgerMenu : false
    }

    changeMenuDisplayStatus = () => {
        this.setState({
            hamburgerMenu : !this.state.hamburgerMenu
        })
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
                    <InputDiv>
                        <input placeholder="Search" type="search" />
                        <CiSearch />
                    </InputDiv>
                    <HamburgerDiv>
                        <AiOutlineMenu onClick={this.changeMenuDisplayStatus} />
                        <div style={{display : hamburgerMenu ? "none" : "block", position: "absolute", top: "60px", right: "30px"}}>
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