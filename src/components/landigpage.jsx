import React from "react";
import Header from "./Header";
import Banner from "./banner";

function LandingPage() {
  return (
    <div className="p-d-landingpage">
      <div>
        <div className="" style={{width:"100%",height:"100vh",display:"flex",flexDirection:"column"}}>
            <Header/>
            <Banner/>
            welcome the world
        </div>  
      </div>
    </div>
  );
}
export default LandingPage;
