import React from "react";
import { Link } from "react-router-dom";
function Header() {
  //------------------Awal Tambahan-------------//
  const location = useLocation();
  const dispatch = useDispatch();
  const toggle = useSelector((state) => state.button.showButton);
  const toggleButtonHandler = () => {
    dispatch(togglerActions.toggleButton());
  };
  //-----------------Akhir Tambahan--------------//
  return (
    <section className="bg-white pt-0">
      <div className="container-fluid">
        <img src="../img/rectangle_nav.png" className="rectangle_nav" alt="rectangle_nav" />
        <a className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </a>
        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-body d-flex nav-wrapper" id="offcanvasNavbar">
            <h6 className="bcr">BCR</h6>
            <ul className="navbar-nav pe-3 nav-content">
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <a className="nav-link" id="ourservices" href="#id_home">
                  Our Services
                </a>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <a className="nav-link" id="ourservices" href="#id_why-us">
                  Why Us
                </a>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <a className="nav-link" id="ourservices" href="#id_testimoni">
                  Testimonial
                </a>
              </li>
              <li className="nav-item" data-bs-dismiss="offcanvas">
                <a className="nav-link" id="ourservices" href="#id_faq">
                  FAQ
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a id="id_button_blue" className="btn bg-success" data-bs-dismiss="offcanvas" style="color: #fff" href="#">
                    Register
                  </a>
                </li>
              </ul>
            </form>
          </div>
        </div>
      </div>

      <div id="ourServices" className="row row-cols-1 row-cols-md-2 container mx-auto justify-content-center pt-5">
        <h3 className="font-Helvetica" style="width: 110%">
          Sewa & Rental Mobil Terbaik di Kawasan Bandung
        </h3>
        <p className="font-Helvetica" style="width: 85%">
          Selamat datang di Binar Car Rental, Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.
        </p>
        {toggle && location.pathname === "/" && (
          <Link to={`/cars`} className=" btn btn-color-theme pl-3 pr-3" id="mulai-sewa" onClick={toggleButtonHandler}>
            Mulai Sewa Mobil
          </Link>
        )}

        <div>
          <img src="../img//img_car.png" alt="img_car" />
        </div>
      </div>
    </section>
  );
}

export default Header;
