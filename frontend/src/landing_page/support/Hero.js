import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4 className="fs-2">Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-5 m-5">
        <div className="col-6 p-5">
            <h1 className="fs-3">Search for an answer or browse help topics to create a ticket</h1>
            <input placeholder="Eg. how do I activate F&O"/>
            <a href="" class="spaced-link">Track account opening</a>
            <a href="" class="spaced-link">Track segment activation</a>
            <a href="" class="spaced-link">Intraday margins</a>
            <a href="" class="spaced-link">Kite user manual</a>

        </div>
        <div className="col-6 p-5">
            <h1 className="fs-3">Featured</h1>
            <ol style={{lineHeight: "2.5"}}>
                <li>
                <a href="">Current Takeovers and Delisting - January 2024</a>
                </li>
                <li>
                <a href="">Latest Intraday leverages - MIS & CO</a>
                </li>
            </ol>
        </div>
       </div>
    </section>
  );
}

export default Hero;
