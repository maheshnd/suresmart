export const SubjectSelector = () => {
  return (
    <div
      className="tab-pane fade"
      id="v-pills-effect"
      role="tabpanel"
      aria-labelledby="v-pills-effect-tab"
    >
      <div className="d-md-flex">
        <div className="one-forth align-self-center">
          <img
            src="./images/subjectselector.png"
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="one-half ml-md-5 align-self-center">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOneSubject"
                  aria-expanded="true"
                  aria-controls="collapseOneSubject"
                >
                  Know Yourself
                </button>
              </h5>
            </div>

            <div
              id="collapseOneSubject"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    Explore your interests, strengths, and passions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseTwoSubject"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Discover Careers
                </button>
              </h5>
            </div>
            <div
              id="collapseTwoSubject"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    Research various careers linked to different subjects.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseThirdSubject"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Talk to Pros
                </button>
              </h5>
            </div>
            <div
              id="collapseThirdSubject"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    Interact with professionals to learn about real-world jobs.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFourSubject"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Recognize Skills
                </button>
              </h5>
            </div>
            <div
              id="collapseFourSubject"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    Identify your skills and how they align with subjects.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="card">
            <div className="card-header" id="headingTwo">
              <h5 className="mb-0">
                <button
                  className="btn btn-link collapsed"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseFiveSubject"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Dream Big
                </button>
              </h5>
            </div>
            <div
              id="collapseFiveSubject"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    Consider your long-term goals and the subjects they involve.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
