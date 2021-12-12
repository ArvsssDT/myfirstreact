const NavBar =() =>{
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">ICS2608</a>
                        <div class="collapse navbar-collapse" id="navbarNavSupportedContent">
                            <div className="navbar-nav" id="navbarNavAltMarkup">
                            <a class="nav-link" aria-current="page" href="/myfirstreact">Home</a>
                            <a class="nav-link" href="/myfirstreact/employees">Employees</a>
                            <a class="nav-link" href="/myfirstreact/add">Add Employees</a>
                            <a class="nav-link" href="/myfirstreact/employees">Edit Employee</a>
                            <a class="nav-link" href="/myfirstreact/employees">Delete Employee</a>
                            <a class="nav-link disabled" href="/" tabindex="-1" aria-disabled="true">Disabled</a>
                            </div>
                        </div>
                </div>
            </nav>
        </div>
    );
}
export default NavBar;