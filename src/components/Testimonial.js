import React from "react";

function Testimonial() {
  return (
    <div id="testimonial">
      <div className="py-5">
        <div className="row text-center">
          <h1>Testimonial</h1>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
        <div className="owl-carousel owl-theme">
          <div className="col card mb-3" style="max-width: 619px; background: #f1f3ff; border-radius: 8px; box-shadow: 0px 0px 4px 0px #00000026">
            <div className="row g-0">
              <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                <img src="../img/img_photo.png" className="img-fluid rounded-start" id="img-testimoni" alt="img_photo" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <img src="../img/Rate.png" id="img-rate" alt="Rate" />
                  <p className="card-text">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="card-text">
                    <small className="fw-bold">John Dee 32, Bromo</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col card mb-3" style="max-width: 619px; background: #f1f3ff; box-shadow: 0px 0px 4px 0px #00000026; border-radius: 8px">
            <div className="row g-0">
              <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                <img src="../img/img_photo.png" className="img-fluid rounded-start" id="img-testimoni" alt="img_photo" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <img src="../img/Rate.png" id="img-rate" alt="Rate" />
                  <p className="card-text">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="card-text">
                    <small className="fw-bold">John Dee 32, Bromo</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col card mb-3" style="max-width: 619px; background: #f1f3ff; box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15); border-radius: 8px">
            <div className="row g-0">
              <div className="col-md-4 d-flex flex-column justify-content-center align-items-center">
                <img src="../img/img_photo (1).png" className="img-fluid rounded-start" id="img-testimoni" alt="img_photo" />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <img src="../img/Rate.png" id="img-rate" alt="Rate" />
                  <p className="card-text">
                    “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod”
                  </p>
                  <p className="card-text">
                    <small className="fw-bold">John Dee 32, Bromo</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
