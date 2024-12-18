import Link from "next/link";
import { useEffect, useState } from "react";
import { stickyNav } from "../utils";

const Header = () => {
  useEffect(() => {
    stickyNav();
  }, []);

  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    if (document.querySelector("header").className.includes("animated")) {
      setTimeout(() => {
        document.querySelector("header").classList.add("opened", "show");
      }, 800);
    }
  }, [toggle]);

  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };

  return (
    <header className={`kf-header ${toggle ? "animated" : ""}`}>
    {/* קו עליון */}
    <div className="kf-topline">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 ">
          {/* שעות פתיחה */}
          <div className="kf-h-group">
            <i className="far fa-clock" /> <em>שעות פתיחה :</em> 10:00 - 22:00
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-center">
          {/* רשתות חברתיות */}
          <div className="kf-h-social">
            <a
              href="https://www.facebook.com/people/%D7%91%D7%99%D7%AA-%D7%94%D7%9B%D7%A0%D7%90%D7%A4%D7%94-%D7%A2%D7%A1%D7%A4%D7%99%D7%94/61554417312987/"
              target="blank"
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              href="https://www.instagram.com/bethaknafeh_/"
              target="blank"
            >
              <i className="fab fa-instagram" />
            </a>
            <a
              href="https://www.waze.com/he/live-map/directions/%D7%91%D7%99%D7%AA-%D7%94%D7%9B%D7%A0%D7%90%D7%A4%D7%94-%D7%90%D7%91%D7%90-%D7%97%D7%95%D7%A9%D7%99-352-%D7%A2%D7%A1%D7%A4%D7%99%D7%90?to=place.w.23003463.229706953.456125"
              target="blank"
            >
              <i className="fab fa-waze" />
            </a>
            <a href="http://wa.me/972525380082" target="blank">
              <i className="fab fa-whatsapp" />
            </a>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 align-right">
          {/* מיקום */}
          <div className="kf-h-group">
            <i className="fas fa-map-marker-alt" /> <em>מיקום :</em> כביש ראשי, אבא חושי, עיספיא, 3000900
          </div>
        </div>
      </div>
    </div>
    {/* תפריט ניווט */}
    <div className="kf-navbar">
      <div className="row">
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 ml-4">
          {/* לוגו */}
          <div className="kf-logo">
            <Link href="/">
              <img src="images/knafeh-logo.png" alt="לוגו" />
            </Link>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 align-center">
          {/* תפריט ראשי */}
          <div className="kf-main-menu">
            <ul>
              <li>
                <Link href="/">
                <i className="las la-angle-down" />
                  בית             
                </Link>
                <ul>
                  <li>
                    <Link href="/">בית קפה</Link>
                  </li>
                  <li>
                    <Link href="index-2">מסעדה</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="menu-coffee">
                <i className="las la-angle-down" />
                  תפריט
                </Link>
                <ul>
                  <li>
                    <Link href="menu-coffee">תפריט קפה</Link>
                  </li>
                  <li>
                    <Link href="menu-restaurant">תפריט מסעדה</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="about">הסיפור שלנו</Link>
              </li>
              <li>
                <a href="#">
                <i className="las la-angle-down" />
                  עמודים               
                </a>
                <ul>
                  <li>
                    <Link href="services">שירותים</Link>
                  </li>
                  <li>
                    <Link href="reservation">הזמנות</Link>
                  </li>
                  <li>
                    <Link href="history">היסטוריה</Link>
                  </li>
                  <li>
                    <Link href="team">השפים שלנו</Link>
                  </li>
                  <li>
                    <Link href="gallery">גלריה</Link>
                  </li>
                  <li>
                    <Link href="faq">שאלות נפוצות</Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                <i className="las la-angle-down" />
                  בלוג                 
                </a>
                <ul>
                  <li>
                    <Link href="blog-grid">גריד בלוג</Link>
                  </li>
                  <li>
                    <Link href="blog">בלוג רגיל</Link>
                  </li>
                  <li>
                    <Link href="blog-single">בלוג בודד</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link href="contacts">צור קשר</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 align-right">
          {/* כפתור תפריט */}
          <a
            href="#"
            className={`kf-menu-btn ${toggle ? "active" : ""}`}
            onClick={() => setToggle(!toggle)}
          >
            <span />
          </a>
          {/* כפתור */}
          {/* <Link href="reservation" className="kf-btn h-btn">
            <span>הזמן שולחן</span>
          </Link> */}
        </div>
      </div>
    </div>
    {/* תפריט ניווט נייד */}
    <div className="kf-navbar-mobile">
      {/* תפריט נייד */}
      <div className="kf-main-menu">
        <ul>
          <li className="has-children">
  <Link href="/">בית</Link>
  <i
    className="las la-angle-down"
    onClick={() => activeMenuSet("home")}
  />
  <ul style={activeLi("home")}>
    <li>
      <Link href="/">בית קפה</Link>
    </li>
    <li>
      <Link href="index-2">מסעדה</Link>
    </li>
  </ul>
</li>
          <li>
            <Link href="about">עלינו</Link>
          </li>
          <li className="has-children">
            <Link href="menu-coffee">תפריט</Link>
            <i
              className="las la-angle-down"
              onClick={() => activeMenuSet("Menu")}
            />
            <ul style={activeLi("Menu")}>
              <li>
                <Link href="menu-coffee">תפריט קפה</Link>
              </li>
              <li>
                <Link href="menu-restaurant">תפריט מסעדה</Link>
              </li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">Pages</a>
              <i
                className="las la-angle-down"
                onClick={() => activeMenuSet("Pages")}
              />
              <ul style={activeLi("Pages")}>
                <li>
                  <Link href="services">Service</Link>
                </li>
                <li>
                  <Link href="reservation">Reservation</Link>
                </li>
                <li>
                  <Link href="history">History</Link>
                </li>
                <li>
                  <Link href="team">Our Chefs</Link>
                </li>
                <li>
                  <Link href="gallery">Gallery</Link>
                </li>
                <li>
                  <Link href="faq">FAQ</Link>
                </li>
              </ul>
            </li>
            <li className="has-children">
              <a href="#">Blog</a>
              <i
                className="las la-angle-down"
                onClick={() => activeMenuSet("Blog")}
              />
              <ul style={activeLi("Blog")}>
                <li>
                  <Link href="blog-grid">Blog Grid</Link>
                </li>
                <li>
                  <Link href="blog">Blog Standard</Link>
                </li>
                <li>
                  <Link href="blog-single">Blog Single</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="contacts">Contacts</Link>
            </li>
          </ul>
        </div>
        {/* mobile topline */}
        <div className="kf-topline">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* mobile btn */}
              <Link href="reservation" className="kf-btn h-btn">
                <span>Book a table</span>
                <i className="fas fa-chevron-right" />
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* social */}
              <div className="kf-h-social">
                <a href="facebook.com" target="blank">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="twitter.com" target="blank">
                  <i className="fab fa-twitter" />
                </a>
                <a href="instagram.com" target="blank">
                  <i className="fab fa-instagram" />
                </a>
                <a href="youtube.com" target="blank">
                  <i className="fab fa-youtube" />
                </a>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* hours */}
              <div className="kf-h-group">
                <i className="far fa-clock" /> <em>שעות פתיחה :</em> 10:00 - 22:00
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              {/* location */}
              <div className="kf-h-group">
                <i className="fas fa-map-marker-alt" /> <em>מיקום :</em> כביש ראשי, אבא חושי, עיספיא, 3000900
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
