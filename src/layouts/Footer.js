const Footer = () => {
  return (
    <div className="kf-footer">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* logo */}
            <div
              className="kf-logo element-anim-1 scroll-animate"
              data-animate="active"
            >
              {/* <a href="index.html">
                <img src="images/logo.png" alt="image" />
              </a> */}
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* hours */}
            <div
              className="kf-f-hours element-anim-1 scroll-animate"
              data-animate="active"
>
              <h5>שעות פתיחה</h5>
             <ul>
            <li>
                 ראשון - שבת
               <em>10:00 - 22:00 </em>
                </li>
                <li>
              <strong>שלישי סגור</strong>
            </li>
          </ul>
        </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* contact */}
            <div
              className="kf-f-contact element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>צור קשר</h5>
              <ul>
                <li>
                  <i className="las la-map-marker" />
                  <em>מיקום :</em>
                  כביש ראשי, אבא חושי, עיספיא, 3000900
                </li>
                {/* <li>
                  <i className="las la-envelope-open-text" />
                  <em>Email Address :</em>
                  kaffendev@gmail.com
                </li> */}
                <li>
                  <i className="las la-phone" />
                  <em>מספר טלפון</em>
                    <a href="tel:+972-4-886-4323">04-886-4323</a>

                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
            {/* gallery */}
            <div
              className="kf-f-gallery element-anim-1 scroll-animate"
              data-animate="active"
            >
              <h5>Gallery</h5>
              <ul>
                <li>
                  <a
                    href="images/grid_gal1.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal1.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal2.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal2.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal3.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal3.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal4.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal4.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal5.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal5.jpg" alt="image" />
                  </a>
                </li>
                <li>
                  <a
                    href="images/grid_gal6.jpg"
                    className="kf-image-hover has-popup-image"
                  >
                    <img src="images/grid_gal1.jpg" alt="image" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center p-4 bg-gray-900 text-gray-300">
  <div
    className="kf-copyright element-anim-1 scroll-animate text-center"
    data-animate="active"
  >
    בית הכנאפה | Made with <span className="text-red-500">❤️</span> by Nadia & Ward 
    <br />
    .Copyright © 2024. All Rights Reserved
  </div>
</div>

      </div>
    </div>
  );
};
export default Footer;
