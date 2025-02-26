// import PerScholasLogo from "./PerScholasLogo";


function NavBar(){
    const username = "Mohamed";
    const userinfo = {
        skills: "ReactJS"
    }

    return (
        <nav className="mt-5" onClick={() => alert("Clicked")} style={styles}>
            {/* <PerScholasLogo /> */}

            <a href="#" className="some-class">Home</a>
            <a href="#">About</a>

            <div>Welcome, { username.toUpperCase() }, skills {userinfo.skills} items {55 + 60}</div>
        </nav>
    )
}

const styles = {
    display: "flex",
    justifyContent: "space-around"
}

export default NavBar;