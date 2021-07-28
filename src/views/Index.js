import React from "react";
import Header from "../components/Header";
import Dropbutton from "../components/Dropbutton";
import Card from "../components/Card";
import DayNightSwitcher from "../components/DayNightSwitcher";

const Index = (props) => {
  const cards = [
    {
      apr: "1.2232",
      name: "AKITA-SHIB",
      staked_usd: "$30",
      earned: "$50",
      img1: "img1",
      img2: "img2",
      val: "$120",
      tvl: "$90"
    },
    {
      apr: "1.3332",
      name: "AKITA-FEG",
      staked_usd: "$30",
      earned: "$50",
      val: "$120",
      tvl: "$70"
    },
    {
      apr: "1.6542",
      name: "AKITA-HAKK",
      staked_usd: "$60",
      earned: "$70",
      val: "$60",
      tvl: "$30"
    },
    {
      apr: "2.1211",
      name: "AKITA-HUSKY",
      staked_usd: "$30",
      earned: "$10",
      val: "$60",
      tvl: "$100"
    },
    {
      apr: "3.1123",
      name: "AKITA-PEPE",
      staked_usd: "$60",
      earned: "$70",
      val: "$180",
      tvl: "$200"
    },
    {
      apr: "1.1123",
      name: "AKITA-DREAM",
      staked_usd: "$25",
      earned: "$20",
      val: "$120",
      tvl: "$75"
    },
  ]

  const switchMode = () => {
    document.getElementById("ds_body").classList.toggle("dark-bg");
  }

  window.onclick = function (event) {
    if (!event.target.matches('.mode-switch')) {
      var swap = document.getElementsByClassName("ds-body");
      var i;
      for (i = 0; i < swap.length; i++) {
        var returnSwap = swap[i];
        if (returnSwap.classList.contains('dark-bg')) {
          returnSwap.classList.remove('dark-bg');
        }
      }
    }
  }

  return (
    <>
      <div>
        <Header/>
        <Dropbutton/>
        <div className="ds-content">
          <div className="ds-cards">
            {cards.map(card => (
              <Card key={card.name} {...card} />
            ))}
          </div>
        </div>
        <DayNightSwitcher onChange={switchMode}/>
      </div>
    </>
  )
}

export default Index;