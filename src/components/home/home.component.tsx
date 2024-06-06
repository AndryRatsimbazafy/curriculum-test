import "./home.css";

interface IProps {}

const Home: React.FC<IProps> = () => {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-top">
          <div className="home-banner">
            <div>
              <img
                src={"/bot.jpg"}
                style={{ width: "55px", height: "55px", borderRadius: "50%" }}
                alt="Logo"
                className="logo-image"
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <h2 style={{ fontWeight: "500", margin: 0 }}>Premium Account</h2>
              <p style={{ fontSize: "14px", margin: 0 }}>
                You have a premium account, granting you access to all the
                remarkable features offered by ResumeDone. With this privilege,
                you can indulge in the freedom of downloading an unlimited
                number of resumes and cover letters in both PDF and Word
                formats.
              </p>
            </div>
          </div>
        </div>
        <div className="home-middle">
          <div className="home-personnal-info">Personnal info</div>
          <div className="home-delete-account">Delete account</div>
          <div className="home-get-in-touch">Get in touch</div>
        </div>
        <div className="home-bottom">Footer</div>
      </div>
    </div>
  );
};

export default Home;
