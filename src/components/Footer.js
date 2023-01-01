import React from "react";

function Footer() {
  return (
    <div id="footer" className="pt-4 pb-5">
      <div className="container text-md-left">
        <div className="row tex-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h5>
            <h5>binarcarrental@gmail.com</h5>
            <h5>081-233-334-808</h5>
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6>
              {" "}
              <a href="#ourServices" className="btn-outline-theme">
                Our Services
              </a>
            </h6>
            <br />
            <h6>
              {" "}
              <a href="#whyUs" className="btn-outline-theme">
                Why Us
              </a>
            </h6>
            <br />
            <h6>
              <a href="#tesTimonial" className="btn-outline-theme">
                Testimonial
              </a>
            </h6>
            <br />
            <h6>
              <a href="#FAQ" className="btn-outline-theme">
                FAQ
              </a>
            </h6>
          </div>

          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6>Contact with us</h6>
            <br />
            <img src="/img/icon_facebook.png" alt="icon_facebook" />
            <img src="/img/icon_instagram.png" alt="icon_instagram" />
            <img src="/img/icon_twitter.png" alt="icon_twitter" />
            <img src="/img/icon_mail.png" alt="icon_mail" />
            <img src="/img/icon_twitch.png" alt="icon_twitch" />
          </div>
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6>Copyright Binar 2022</h6>
            <br />
            <img src="/img/rectangle_footer.png" width="50px" alt="rectangle_footer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
