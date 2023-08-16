

let scroll = () => {
    return `
        <div style="position: fixed;">
        </div><div id="shape"></div>
            <div id="head">
                <div id="header_left" >
                    <a href="index.html">
                        <img src="./images/Oesin_logo.webp" alt="" style="margin-left: 0%;">
                    </a>
                </div>
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
                        <div><a href="#">LOGIN</a></div>
                        <div><a href="#">CONTACT</a></div>
                    </div>
                </div>
            </div>
        </div>
    `
}

export default scroll;