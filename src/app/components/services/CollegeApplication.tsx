export const CollegeApplication = () => {
  return (
    <div
      className="tab-pane fade"
      id="college-application"
      role="tabpanel"
      aria-labelledby="v-pills-effect-tab"
    >
      <div className="d-md-flex">
        <div className="one-forth align-self-center">
          <img src="./images/college.png" className="img-fluid" alt="" />
        </div>
        <div className="one-half ml-md-5 align-self-center">
          <div className="card">
            <div className="card-header" id="headingOne">
              <h5 className="mb-0">
                <button
                  className="btn btn-link"
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapseOneCollege"
                  aria-expanded="true"
                  aria-controls="collapseOneCollege"
                >
                  Step-by-Step Support
                </button>
              </h5>
            </div>

            <div
              id="collapseOneCollege"
              className="collapse show"
              aria-labelledby="headingOne"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    Get guidance on tackling each application hurdle, one at a
                    time.
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
                  data-target="#collapseTwoSubjectCollege"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Expert Help
                </button>
              </h5>
            </div>
            <div
              id="collapseTwoSubjectCollege"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    Reach out for assistance from experienced counselors and
                    mentors.
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
                  data-target="#collapseThirdCollege"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Break It Down
                </button>
              </h5>
            </div>
            <div
              id="collapseThirdCollege"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    We'll help you break the application process into manageable
                    tasks.
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
                  data-target="#collapseFourCollege"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Resource Hub
                </button>
              </h5>
            </div>
            <div
              id="collapseFourCollege"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    Access a variety of templates, guides, and university
                    materials.
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
                  data-target="#collapseFiveCollege"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Showcase Your Best
                </button>
              </h5>
            </div>
            <div
              id="collapseFiveCollege"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    Highlight your strengths, achievements, and passions
                    effectively.
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
                  data-target="#collapseSixCollege"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Personalized Essays
                </button>
              </h5>
            </div>
            <div
              id="collapseSixCollege"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    Craft compelling essays that reflect your uniqueness and
                    ambitions.
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
                  data-target="#collapseSevenCollege"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Polish Your Work
                </button>
              </h5>
            </div>
            <div
              id="collapseSevenCollege"
              className="collapse"
              aria-labelledby="headingTwo"
              data-parent="#accordionExample"
            >
              <div className="card-body">
                <ul className="list-group">
                  <li className="list-group-item">
                    Benefit from detailed proofreading to ensure error-free
                    applications.
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
