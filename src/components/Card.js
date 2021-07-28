import React from "react";
import img1 from "assets/img/Group 86.png";
import img2 from "assets/img/Group 87.png";

const Card = ({
    apr,
    name,
    staked_usd,
    earned,
    val,
    tvl
}) => {

    const myFunction = () => {
        console.log('sdfsfdfsfs');
        document.getElementById("myDropdown").classList.toggle("show1");
    }
      
    window.onclick = function(event) {
      if (!event.target.matches('.card-btn-connect')) {
        var dropdowns = document.getElementsByClassName("drop-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show1')) {
            openDropdown.classList.remove('show1');
          }
        }
      }
    }

    return (
        <>
            <div className="ds-card">
                <div className="ds-current-apr">
                <span>Current APR</span> <span>{apr}</span>
                </div>
                <div className="ds-card-content">
                <div className="ds-card-title">
                    <img
                    className="ds-card-logo"
                    alt="..."
                    src={img1}
                    />
                    <img
                    className="ds-card-logo marginleft8"
                    alt="..."
                    src={img2}
                    />
                    <span>{name}</span>
                </div>
                <div className="ds-card-price">
                    <div>
                    <span>STAKED USD</span>
                    <span>{staked_usd}</span>
                    </div>
                    <div>
                    <span>DREAM EARNED</span>
                    <span>{earned}</span>
                    </div>
                </div>
                <div className="ds-card-connect">
                    <div>
                    <span>BAL : {val}</span>
                    <span>Max</span>
                    </div>
                    <input className="amount" placeholder="Enter Amount" />
                    <button className="card-btn-connect" onClick={myFunction}>connect</button>
                </div>
                <div className="ds-card-tvl"><span>TVL</span> <span>{tvl}</span></div>
                </div>
            </div>
        </>
    );
};

export default Card;