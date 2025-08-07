import mylogo from "../assets/logo.png"
import { RiSearchLine, RiAddCircleLine, RiNotification3Line, RiMessengerLine, RiShoppingBag3Line, RiCloseLine } from 'react-icons/ri';
import { useState } from 'react';
import "../components/Navbar.css"

const Navbar = () => {
    const [searchValue, setSearchValue] = useState('');

    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
    };

    const clearSearch = () => {
        setSearchValue('');
    };

    const handleSearch = () => {
        if (searchValue.trim()) {
            console.log('Searching for:', searchValue);
            // Add your search logic here
        }
    };

    return (
        <>
            <nav>
                <div className="nav">
                    <div className="logo-area">
                        <img src={mylogo} alt="" className="logo-img" />
                        <div className="logo-text">Blog</div>
                    </div>

                    <div className="search-bar">
                        <RiSearchLine
                            size={18}
                            style={{
                                color: "#757575",
                                cursor: "pointer"
                            }}
                            onClick={handleSearch}
                        />
                        <input
                            type="text"
                            placeholder="Search flearnaxy"
                            className="search"
                            value={searchValue}
                            onChange={handleSearchChange}
                            onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                        />
                        {searchValue && (
                            <RiCloseLine
                                size={18}
                                style={{
                                    color: "#757575",
                                    cursor: "pointer"
                                }}
                                onClick={clearSearch}
                            />
                        )}
                    </div>

                    <div className="info-area">
                        <div className="button">
                            <RiAddCircleLine size={20} style={{
                                color: "white"
                            }} />
                            <div className="create-text">Create</div>
                        </div>

                        <div className="notification-icon">
                            <RiNotification3Line size={20} color="white" />
                        </div>
                        <div className="messenger-icon">
                            <RiMessengerLine size={20} color="white" />
                        </div>
                        <div className="shoping-icon">
                            <RiShoppingBag3Line size={20} color="white" />
                        </div>
                        <div className="user-profile">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face" alt="User Profile" className="user-profile-img" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar