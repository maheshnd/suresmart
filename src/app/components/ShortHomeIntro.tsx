import Link from "next/link";

export const ShortHomeIntro = () => {
  return (
    <section className="ftco-section ftco-no-pt ftc-no-pb">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12  py-5 ftco-animate">
            <div className="col-md-6 ">
              <img
                src="images/Joyce-Joseph.jpeg"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12 py-5">
            <div className="heading-section ftco-animate mt-5">
              <h2 className="mb-4">About Joyce Joseph</h2>
              <p>
                Joyce Joseph shines as a seasoned educator and career counselor,
                boasting 25+ years of experience. With a strong foundation in
                English Literature and enriched by various certifications,
                Joyce's passion lies in nurturing students' holistic
                development.
                <Link
                  href="/about/#about-joyce"
                  className="btn btn-primary  py-3"
                >
                  To know more
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
