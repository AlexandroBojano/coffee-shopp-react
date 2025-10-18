import "../../src/css/Navbar.css"
import profile from "../../img/user1.jpg"

const Navbar = () => {
    return (
        <aside>
            <div>
                <img src={profile} alt="" />
            </div>
        </aside>
    )
}

export default Navbar