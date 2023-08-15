

let header = () => {
    return `
    <div id="shape"></div>
        <div id="header">
            <div id="header_left">
                <a href="index.html"><img src="./images/Oesin_logo.webp" alt=""></a>
            </div>
            <div id="header_right">
                <div id="header_right_line_1">
                    <div id="header_right_contact">
                        <div><p style="color: #b5876d;">Contact:</p></div>&nbsp;&nbsp;
                        <div><p style="color: white;">0123456789</p></div>
                    </div>
                    <div id="header_right_socialMedia">
                        <div><a href="https://www.facebook.com/"><i class="fa-brands fa-facebook-f"></i></a></div>
                        <div><a href="https://twitter.com/"><i class="fa-brands fa-twitter"></i></a></div>
                        <div><a href="https://workspace.google.com/"><i class="fa-brands fa-google-plus-g"></i></a></div>
                        <div><a href="https://www.instagram.com/"><i class="fa-brands fa-instagram"></i></a></div>
                        <div><a href="https://in.pinterest.com/"><i class="fa-brands fa-pinterest-p"></i></a></div>
                    </div>
                </div>
                <hr id="header_right_hr">
                <div id="header_right_line_2">
                    <div id="header_right_menubar">
                        <div><a href="#">HOME</a></div>
                        <div>
                            <div id="rooms">
                                <a href="#">ROOMS</a>
                                <div class="rooms_submenu hide">
                                    <div><a href="#">ROOM LIST</a></div>
                                    <div><a href="#">ROOM DETAILS</a></div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div id="activities">
                                <a href="#">ACTIVITIES</a>
                                <div class="activities_submenu hide">
                                    <div>
                                        <div class="activities_submenu_megamenu" id="activities_submenu_megamenu">
                                            <div><a href="#">MEGAMENU LIST</a></div>
                                            <div class="activities_submenu_megamenu_list">
                                                <div><a href="#">Location</a></div>
                                                <div><a href="#">Room Grid</a></div>
                                                <div><a href="#">Room List</a></div>
                                                <div><a href="#">Room Details</a></div>
                                                <div><a href="#">Mega Menu</a></div>
                                            </div>
                                        </div>
                                        <div class="activities_submenu_megamenu" id="activities_submenu_megamenu">
                                            <div><a href="#">MEGAMENU LIST</a></div>
                                            <div class="activities_submenu_megamenu_list">
                                                <div><a href="#">Room Grid</a></div>
                                                <div><a href="#">Room List</a></div>
                                                <div><a href="#">Room Details</a></div>
                                                <div><a href="#">Mega Menu</a></div>
                                                <div><a href="#">Location</a></div>
                                            </div>
                                        </div>
                                        <div class="activities_submenu_megamenu" id="activities_submenu_megamenu">
                                            <div><a href="#">MEGAMENU LIST</a></div>
                                            <div class="activities_submenu_megamenu_list">
                                                <div><a href="#">Room List</a></div>
                                                <div><a href="#">Room Details</a></div>
                                                <div><a href="#">Mega Menu</a></div>
                                                <div><a href="#">Location</a></div>
                                                <div><a href="#">Room Grid</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div><a href="#">LOCATION</a></div>
                        <div><a href="#">EVENT</a></div>
                        <div><a href="#">TEAM</a></div>
                        <div><a href="#">CONTACT</a></div>
                    </div>
                </div>
            </div>
        </div>
        
    `
}


export default header;