import "../style/Navbar.css";
import "boxicons";
// import "../style/Cursor.css";

function Navbar() {
  return (
    <>
      <nav>
        <div className="name-container">
          <p className="light cross">+</p>

          <p className="light caps inter name-text ">Madelene Fasth</p>
          <box-icon color="white" name="map" type="solid"></box-icon>

          <p className="light caps inter name-text "> Västerås, Sweden</p>
        </div>

        <ul className="inter caps light">
          <li className="nav-hover home">
            <a href="#home">.home</a>
          </li>
          <li className="nav-hover about">
            <a href="#about">.about</a>
          </li>
          <li className="nav-hover education">.education</li>
          <li className="nav-hover projects">.projects</li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
