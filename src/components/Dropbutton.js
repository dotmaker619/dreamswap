import React from "react";

const Dropbutton = () => {

    const myFunction = () => {
        console.log('sdfsfdfsfs');
        document.getElementById("myDropdown").classList.toggle("show");
    }
      
    window.onclick = function(event) {
      if (!event.target.matches('.top-connect')) {
        var dropdowns = document.getElementsByClassName("drop-menu");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (openDropdown.classList.contains('show')) {
            openDropdown.classList.remove('show');
          }
        }
      }
    }
    return (
        <>
            <button className="top-connect" onClick={myFunction}>connect</button>
            <div className="drop-menu" id="myDropdown">
                <div>Wallets</div>
                <div className="drop-menu-item">
                    <img
                        className="drop-menu-icon"
                        alt="..."
                        src={
                            require("../assets/img/metamask-logo.png").default
                        }
                    />
                    <span>Metamask</span>
                </div>
                <div className="drop-menu-item">
                    <img
                        className="drop-menu-icon"
                        alt="..."
                        src={
                            require("../assets/img/metamask-logo.png").default
                        }
                    />
                    <span>Connect</span>
                </div>
                <div className="drop-menu-item">
                    <img
                        className="drop-menu-icon"
                        alt="..."
                        src={
                            require("../assets/img/metamask-logo.png").default
                        }
                    />
                    <span>Metamask</span>
                </div>
            </div>
        </>
    );
};

export default Dropbutton;