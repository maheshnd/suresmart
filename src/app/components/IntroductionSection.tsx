import Link from "next/link";

export const IntroductionSection = () => {
  return (
    <div className="hero-wrap js-fullheight" id="introduction-section">
      <div className="overlay"></div>
      <div className="container-fluid px-0">
        <div className="row d-md-flex no-gutters slider-text align-items-center js-fullheight justify-content-end">
          <img
            src="./images/homeimage.gif"
            alt="Vercel Logo"
            className="one-third align-self-end order-md-last img-fluid home-sectio_img"
          />
          <div className="one-forth d-flex align-items-center ftco-animate js-fullheight">
            <div className="text mt-5">
              <span className="subheading">16+ Years Of Experience</span>
              <h1 className="mb-3">
                <span>Exploration,</span> <span>Creation,</span>{" "}
                <span>Showcasing</span>
              </h1>
              <p>
                Families and students worldwide have the opportunity to engage
                in counseling sessions from any location. Our services encompass
                guidance for both students and parents, ensuring alignment on
                the journey towards a successful career path.
              </p>
              <p>
                <Link
                  href="/contact/#contact-us"
                  className="btn btn-primary px-4 py-3"
                >
                  Get in touch
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
