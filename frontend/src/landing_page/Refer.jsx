import React from "react";
import { useEffect } from "react";


function Refer() {
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (  
    <>
      

      <div className="container text-center p-5">
       
        <h1 className="p-5 mb-5 border-bottom mt-5" style={{color:"#424242"}}>Referral programme</h1>

       
        {/* <hr className="mb-4" /> */}

        <div className="row align-items-center p-5">
         
          <div className="col-md-6 text-start">
            <h3>Refer your friends to earn 300 reward points!</h3>
            <p className="text-muted">
              Redeem your reward points to gain access to various tools and
              platforms in the Zerodha Universe.{" "}
              <a href="#" className="text-primary">
                Read more.
              </a>
            </p>

            {/* My Rewards Button */}
            <button className="btn btn-primary px-4 py-2">My rewards</button>
          </div>

          {/* Right Section - Image */}
          <div className="col-md-6">
            <img
              src="media/images/reward.svg" 
              alt="Reward Box"
              className="img-fluid"
              style={{ maxWidth: "300px" }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Refer;
