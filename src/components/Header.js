import React from "react";

const Header = () => {
    return (
        <>
            <div className="ds-header">
            <img
                className="ds-logo"
                alt="..."
                src={
                    require("../assets/img/ds_logo.png").default
                }
            />
            <button className="top-connect">connect</button>
            </div>
        </>
    );
};

export default Header;