import "./Styles/Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
<div className="Nav-container">
<section className="Navbar">
<div className="Nav-logo">
<h2>SolomonTheCoder.</h2>
</div>
<div className="Nav-tags">
    <ul>
        <li><Link>Home</Link><span></span></li>
        <li><Link>Work</Link><span></span></li>
        <li><Link>Services</Link><span></span></li>
        <li><Link>Contact</Link><span></span></li>
    </ul>
</div>
<div className="Nav-button">
    <button>Let&apos;s Talk</button>
</div>
</section>
<section></section>
<section></section>
 </div>
    </>
  )
}

export default Navbar