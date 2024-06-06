import CustomInput from "../shared/Input/custom-input.component";
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
          <div className="home-personnal-info">
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <h2 style={{ fontWeight: "500", margin: 0 }}>
                Personal Information
              </h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 15,
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    gap: 40,
                    width: "100%",
                  }}
                >
                  <div className="home-grid-container">
                    <div className="home-grid-item">
                      <CustomInput label="First Name" />
                    </div>
                    <div className="home-grid-item">
                      <CustomInput label="Last Name" />
                    </div>
                    <div className="home-grid-item">
                      <CustomInput label="City" />
                    </div>
                    <div className="home-grid-item">
                      <CustomInput label="Postal Code" />
                    </div>
                    <div className="home-grid-item full-width">
                      <CustomInput label="Address" />
                    </div>
                    <div className="home-grid-item">
                      <CustomInput label="Email" />
                    </div>
                    <div className="home-grid-item">
                      <CustomInput label="Phone" />
                    </div>
                    <div className="home-grid-item">
                      <CustomInput label="Password" type="password" />
                    </div>
                  </div>
                  <img
                    src={"/human.png"}
                    style={{
                      width: "155px",
                      height: "155px",
                    }}
                    alt="Logo"
                  />
                </div>
              </div>
              <p style={{ fontSize: "15px" }}>
                Use this email to log in to your{" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  resumedone.io
                </a>{" "}
                account and receive notifications.
              </p>
              <button className="home-button">Save</button>
            </div>
          </div>
          <div className="home-delete-account">
            <label className="mui-checkbox">
              <input type="checkbox" />
              <span style={{ marginLeft: 5 }}>
                Show my profile to serious employers on{" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  hirethesbest.io
                </a>{" "}
                for free
              </span>
            </label>
          </div>
          <div className="home-delete-acount">
            <h3 style={{ fontWeight: "500", margin: 0 }}>Delete account</h3>
            <p style={{ fontSize: "14px", margin: 0 }}>
              If you delete your account you’ll be permanently removing it from
              our systems - you can’t undo it.
            </p>
            <p style={{ fontSize: "14px", margin: 0, color: "#F25773" }}>
              Yes, Delete my account
            </p>
          </div>
          <div className="home-get-in-touch">
            <p style={{ fontSize: "16px", margin: 0 }}>
              <a href="#" style={{ textDecoration: "none" }}>
                Get in touch with our support team
              </a>{" "}
              if you have any question or want to leave some feedback. We’ll be
              happy to hear from you.
            </p>
          </div>
        </div>
        <div className="home-bottom">
            <a href="#" style={{ textDecoration: "none", color: "black" }}>Terms & Conditions</a>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>Privacy Policy</a>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>FAQ</a>
            <a href="#" style={{ textDecoration: "none", color: "black" }}>Contact Us</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
