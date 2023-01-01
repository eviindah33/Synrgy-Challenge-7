import React from "react";

function Faq() {
  return (
    <div id="Faq" className="py-5">
      <div className="row row-cols-1 row-cols-sm-2 container justify-content-center fs-6">
        <div className="col container mx-auto">
          <h2>Frequently Asked Question</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <div class="col faq_form">
            <div class="contact-form d-flex flex-column justify-content-center align-items-center">
              <form>
                <select id="op1">
                  <option value="op1">Apa saja syarat yang dibutuhkan?</option>
                </select>
                <select id="op1">
                  <option value="op1">Berapa hari minimal sewa mobil lepas kunci?</option>
                </select>
                <select id="op1">
                  <option value="op1">Berapa hari sebelumnya sebaiknya booking sewa mobil?</option>
                </select>
                <select id="op1">
                  <option value="op1">Apakah Ada biaya antar-jemput?</option>
                </select>
                <select id="op1">
                  <option value="op1">Bagaimana jika terjadi kecelakaan?</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
