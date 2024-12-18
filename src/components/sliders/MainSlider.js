import { sliderProps } from "@/src/sliderProps";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const MainSlider = () => {
  return (
    <section className="section kf-started-slider">
      <div className="kf-started-item">
        <div className="slide">
          <video
            className="kf-video-bg"
            autoPlay
            muted
            loop
            playsInline
            src="/videos/mainPage2.mp4"
          ></video>
          <div className="kf-slider-overlay">
            <div className="kf-slider-content">
              <h1 className="kf-slider-title">היכנסו לעולם מתוק של הכנאפה</h1>
              <p className="kf-slider-description">
                התענגו על המגוון המשובח ביותר של כנאפה וממתקים מיוחדים
              </p>
              <Link href="reservation" className="menu-btn">
                <span>לתפריט</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSlider;
