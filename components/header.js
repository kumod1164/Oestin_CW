

let header = () => {
    return `
    <div id="shape">

    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-rgba(51, 50, 50, 0.1) fixed-top" style="background-color: #555151;">
        <div id="shape">

        </div>
        <div class="container" style="position: relative;">
            <a class="navbar-brand" href="#">
                <img src="./images/Oesin_logo.webp" alt="">
            </a>
            <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
                class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse"
                type="button"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link" href="#">HOME</a>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            ROOMS
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">ROOM LIST</a></li>
                            <li><a class="dropdown-item" href="#">ROOM DETAILS</a></li>
                        </ul>

                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">
                            ACTIVITIES
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">LOCATION</a></li>
                            <li><a class="dropdown-item" href="#">ROOM GRID</a></li>
                            <li><a class="dropdown-item" href="#">Room DETAILS</a></li>
                            <li><a class="dropdown-item" href="#">MEGA MENU</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">LOCATION</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">EVENT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">TEAM</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">CONTACT</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">LOGIN</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    `
}


export default header;