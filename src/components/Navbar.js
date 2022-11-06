const Navbar = () => {
  return (
    <>
      <div className="top-nav">
        <ul>
          <li>
            <a href="">About us</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
          <li>
            <a href="">Contact Us</a>
          </li>
        </ul>
      </div>
      <div className="nav-center">
        <a href="" id="left">
          <h1>InstaMarketplace</h1>
        </a>

        <ul className="nav-list" id="center">
          <li className="nav-item">
            <a href="BuyerPage.html" className="nav-link animation">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="Seller.html" className="nav-link animation">
              Orders
            </a>
          </li>
          <li className="nav-item">
            <a href="DriverPage.html" className="nav-link animation">
              Account
            </a>
          </li>
        </ul>

        <div id="right">
          <input type="text" placeholder="  Search For Items" id="search" />
          <a href="cart.html" className="icon animation">
            <i className="bx bx-cart"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
