import Isotope from "isotope-layout";
import { useEffect, useRef, useState } from "react";

const CoffeeMenu = () => {
  // Isotope
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".all-menu-items", {
        itemSelector: ".kf-menu-item-col",
        percentPosition: true,
        masonry: {
          columnWidth: ".kf-menu-item-col",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
    // return () => isotope.current.destroy();
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = (key) => () => {
    setFilterKey(key);
    const filterLinks = document.querySelectorAll(".kf-filter-menu a");
    filterLinks.forEach((filter) => {
      const filterValue = filter.getAttribute("data-href");
      if (filterValue == key) {
        filter.classList.add("active");
      } else {
        filter.classList.remove("active");
      }
    });
  };

  return (
    <section className="section kf-menu kf-menu-tabs">
      <div className="container">
        <div className="kf-titles align-center">
          <div
            className="kf-subtitle element-anim-1 scroll-animate"
            data-animate="active"
          >
            בחרו להמתיק לכם את היום מ-
          </div>
          <h3
            className="kf-title element-anim-1 scroll-animate"
            data-animate="active"
          >
            תפריט בית הכנאפה
          </h3>
        </div>
        <div
          className="kf-filter kf-filter-menu element-anim-1 scroll-animate"
          data-animate="active"
        >
          <a
            className="c-pointer active"
            onClick={handleFilterKeyChange("*")}
            data-href="*"
          >
            הכל
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("dessert")}
            data-href="dessert"
          >
            מתוקים
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("knafeh")}
            data-href="knafeh"
          >
            כנאפה
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("hot-drinks")}
            data-href="hot-drinks"
          >
            שתייה חמה
          </a>
          <a
            className="c-pointer"
            onClick={handleFilterKeyChange("cold-drinks")}
            data-href="cold-drinks"
          >
            שתייה קרה
          </a>
        </div>
        <div
          className="kf-menu-items"
          style={{ backgroundImage: "url(images/menu_logo.png)" }}
        >
          <div className="row all-menu-items">
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu1.jpg" className="has-popup-image">
                    <img src="images/menu1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">תה</h5>
                  <div className="subname">
                    מים חמים עם נענע/ פרוסות לימון/ מקלות קינמון.
                  </div>
                  <div className="price">10₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu1.jpg" className="has-popup-image">
                    <img src="images/menu1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">קנקן תה</h5>
                  <div className="subname">
                    מים חמים עם נענע/פרוסות לימון/ מקלות קינמון. <br />
                    (ל-5 סועדים)
                  </div>
                  <div className="price">30₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu1.jpg" className="has-popup-image">
                    <img src="images/menu1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">אספרסו</h5>
                  <div className="subname">
                    אספרסו קצר/ ארוך/ כפול קצר/ כפול ארוך
                  </div>
                  <div className="price">12₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu1.jpg" className="has-popup-image">
                    <img src="images/menu1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">מקיאטו</h5>
                  <div className="subname">
                    אספרסו קצר/ ארוך/ כפול קצר/ כפול ארוך
                    <br />
                    ומעל חלב חם מוקצף.
                  </div>
                  <div className="price">12₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu1.jpg" className="has-popup-image">
                    <img src="images/menu1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">אפוגטו</h5>
                  <div className="subname">
                    כדור גלידה לבחירתכם מוגש עם אספרסו
                    <br />
                    קצר/ ארוך/ כפול קצר/ כפול ארוך.
                  </div>
                  <div className="price">15₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu1.jpg" className="has-popup-image">
                    <img src="images/menu1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">קפה שחור</h5>
                  <div className="subname">
                    קפה שחור טחון במקום עם מים חמים.
                  </div>
                  <div className="price">12₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu1.jpg" className="has-popup-image">
                    <img src="images/menu1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">אמריקנו</h5>
                  <div className="subname">
                    אספרסו כפול קצר עם מים חמים/ קרים,
                    <br />
                    מוגש לצד חלב חם/ קר לבחירתכם.
                  </div>
                  <div className="price">12₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu1.jpg" className="has-popup-image">
                    <img src="images/menu1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">קפה הפוך</h5>
                  <div className="subname">
                    קפה חם ועדין המבוסס על מנת אספרסו עם חלב חם מוקצף שמעניק לו
                    מרקם חלק וקרמי.
                  </div>
                  <div className="price">15₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu1.jpg" className="has-popup-image">
                    <img src="images/menu1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">שוקו חם</h5>
                  <div className="subname">
                    משקה מתוק ומחמם המבוסס על אבקת שוקו איכותית עם חלב חם מוקצף.
                    <br />
                    ניתן להוסיף מרשמלו או קצפת לתוספת פינוק.
                  </div>
                  <div className="price">15₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all hot-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu1.jpg" className="has-popup-image">
                    <img src="images/menu1.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">סחלב</h5>
                  <div className="subname">
                    משקה חם, סמיך ומפנק המוכן מחלב חם מבושל.
                    <br />
                    ניתן להוסיף תוספות קלאסיות של פיסטוק קצוץ, פירורי לוטוס,
                    קינמון וקוקוס.
                  </div>
                  <div className="price">20₪</div>
                </div>
              </div>
            </div>

            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">מילקשייק</h5>
                  <div className="subname">
                    על בסיס גלידה עשירה בטעמים לבחירה <br />
                    (שוקולד בלגי , וניל קלאסי, תות, וניל-עוגיות, פיסטוק, לוטוס,
                    וניל דובדבן, מסטיק) <br />
                    מוגש עם קצפת מעל.
                  </div>
                  <div className="price">25₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">קפה קר</h5>
                  <div className="subname">
                    אספרסו איכותי, מוגש עם חלב טרי, קרח ומעט מתיקות לבחירה.
                    <br />
                    מוגש עם קצפת מעל.
                  </div>
                  <div className="price">15₪</div>
                </div>
              </div>
            </div>

            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">אייס וניל</h5>
                  <div className="subname">
                    משקה קרמי ומפנק על בסיס וניל, קרח גרוס וחלב טרי, <br />
                    מוגש עם קצפת מעל.
                  </div>
                  <div className="price">12₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">אייס קפה</h5>
                  <div className="subname">
                    משקה קרמי וממכר על בסיס קפה נמס איכותי, קרח גרוס וחלב טרי,
                    <br />
                    מוגש עם קצפת מעל.
                  </div>
                  <div className="price">12₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">לימונענע גרוס</h5>
                  <div className="subname">
                    שילוב מרענן של לימון חמצמץ ונענע טרייה עם קרח גרוס וסירופ
                    מתקתק במידה הנכונה.
                  </div>
                  <div className="price">12₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">קנקן לימנענע גרוס</h5>
                  <div className="subname">
                    קנקן גדול של משקה מרענן של לימון חמצמץ ונענע טרייה עם קרח
                    גרוס וסירופ מתקתק במידה הנכונה.
                  </div>
                  <div className="price">30₪</div>
                </div>
              </div>
            </div>

            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">תפוזים סחוט טבעי</h5>
                  <div className="subname">
                    תפוזים טריים, נסחטים במקום למיץ טבעי, מתוק ומלא בריאות.
                  </div>
                  <div className="price">15₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">לימונדה קלאסית</h5>
                  <div className="subname">
                    {" "}
                    משקה לימונדה מרענן בטעם לימון מתקתק, מוכן במיוחד לרגעים של
                    פינוק ורעננות.
                  </div>
                  <div className="price">25₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name">קנקן לימונדה קלאסית</h5>
                  <div className="subname">
                    {" "}
                    קנקן גדול של משקה לימונדה מרענן בטעם לימון מתקתק, מוכן
                    במיוחד לרגעים של פינוק ורעננות.
                  </div>
                  <div className="price">25₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name"> ברד ענבים</h5>
                  <div className="price">10₪</div>
                </div>
              </div>
            </div>

            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name"> ברד פסיפלורה</h5>
                  <div className="price">10₪</div>
                </div>
              </div>
            </div>

            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name"> מים מינרליים</h5>
                  <div className="price">10₪</div>
                </div>
              </div>
            </div>

            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name"> ענבים</h5>
                  <div className="price">10₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name"> אשכוליות</h5>
                  <div className="price">10₪</div>
                </div>
              </div>
            </div>

            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name"> XL</h5>
                  <div className="price">10₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name"> סודה</h5>
                  <div className="price">10₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name"> פאנטה</h5>
                  <div className="price">10₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name"> קוקה קולה</h5>
                  <div className="price">10₪</div>
                </div>
              </div>
            </div>
            <div className="kf-menu-item-col col-xs-12 col-sm-12 col-md-12 col-lg-6 all cold-drinks">
              <div
                className="kf-menu-item element-anim-1 scroll-animate"
                data-animate="active"
              >
                <div className="image kf-image-hover">
                  <a href="images/menu2.jpg" className="has-popup-image">
                    <img src="images/menu2.jpg" alt="image" />
                  </a>
                </div>
                <div className="desc">
                  <h5 className="name"> קולה זירו</h5>
                  <div className="price">10₪</div>
                </div>
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeMenu;
