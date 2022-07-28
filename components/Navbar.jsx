import Image from "next/image";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg bg-light"
      style={{ position: "sticky" }}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <Image
            src="/img/cocotech.svg"
            alt="logo"
            width="150px"
            height="75px"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav"
            style={{ textAlign: "center", alignItems: "center" }}
          >
            <li
              className="nav-item"
              style={{
                fontSize: "xx-large",
                fontWeight: "300",
                padding: "5px",
              }}
            >
              <a className="nav-link disabled">Cocotech Solutions</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
