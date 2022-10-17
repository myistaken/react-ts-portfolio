import React from "react";
import Typewriter from "typewriter-effect";
import "./Overview.css";
import ProfileImg from "../../assets/profile.png";

const Overview = () => {
  return (
    <>
    
      <div className="overview">
      <div className="title">Hakkımda</div>
      <div className="overview-content">
        <div className="profile-details">
          
          <div className="profile-img-div">
            <div className="profile-img">
              <img src={ProfileImg} alt="profile" />
            </div>{" "}
          </div>
          <div className="name">
            Mustafa <span>YILMAZ</span>
          </div>
          <div className="typing">
            <Typewriter
              options={{
                strings: [
                  "Full-Stack🖥️",
                  "Frontend🎨",
                  "React/R. Native🖼️",
                  "Mobile Dev. 📱",
                  "MERN⚒️",
                ],
                autoStart: true,
                loop: true,
                delay: 40,
              }}
            />
          </div>
        </div>

        <div className="description">
          <Typewriter
            options={{
              strings: [
                "Kendini işine adamış ve proaktif bir Web geliştiricisi olmayı hedefliyorum. <span>Full-Stack</span> Web geliştirme ve <span>Frontend</span> Web geliştirme hakkında bilgi sahibiyim. <span>Nesne Tabanlı Programlama</span> sistemi ile projeler geliştiriyorum ve Web projelerinde <span>TypeScript</span> kullanıyorum. <span>Flutter</span> ile Mobil uygulama geliştime üzerine okulda eğitim aldım ve Takım projelerinde aktif rol oynadım. Kendimi geliştirmek ve daha fazla deneyim kazanmak istiyorum.",
              ],
              autoStart: true,
              loop: false,
              deleteSpeed: Infinity,
              delay: 0,
            }}
          />
        </div></div>
      </div>
      
    </>
  );
};

export default Overview;
