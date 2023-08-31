"use client";
import { useEffect, useState } from "react";

const StudentInfo = () => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  useEffect(() => {
    const iframe = document.querySelector("iframe");
    const handleIframeLoad = () => {
      setIframeLoaded(true);
    };
    iframe?.addEventListener("load", handleIframeLoad);
    return () => {
      iframe?.removeEventListener("load", handleIframeLoad);
    };
  }, []);
  return (
    <section
      className="ftco-section services-section bg-light"
      id="studentInfoGoogleForm"
    >
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="heading-section ftco-animate mt-5 text-center">
            <h2 className="mb-4">Counseling Session Form</h2>
            <p>
              Please provide the following required information to begin your
              counseling session.
            </p>
          </div>
          <div className="col-md-7 text-center heading-section ftco-animate">
            {!iframeLoaded && <div className="loader">Loading...</div>}
            <iframe
              title="studentinfoform"
              src="https://docs.google.com/forms/d/e/1FAIpQLSfTX9BpF1JI1-jXbDjvT56hznAVVOj2OI2lzvWImOJPbQ3W_A/viewform?embedded=true"
              width="500"
              height="500"
              frameBorder="0"
              className="mb-4"
              style={{ width: "100%" }}
            >
              Loading…
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudentInfo;
