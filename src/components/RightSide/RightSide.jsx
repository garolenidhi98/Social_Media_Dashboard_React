import React, { useState } from "react";
import "./RightSide.css";
import Home from "../../img/home.png";
import { UilSetting } from "@iconscout/react-unicons";
import TrendCard from "../TrendCard/TrendCard";
import ShareModal from "../ShareModal/ShareModal";
import {Link,Outlet} from "react-router-dom";

const RightSide = () => {
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <div className="RightSide">
      <div className="navIcons">
        <Link to="/"><img src={Home} alt="" /></Link>
        <UilSetting />
        <Link to="/profile"><i class="fa-solid fa-user"></i></Link>
        <Link to="/auth"><i class="fa-solid fa-key"></i></Link>
        <Outlet />
      </div>

      <TrendCard />

      <button className="button r-button" onClick={() => setModalOpened(true)}>
        Share
      </button>
      <ShareModal modalOpened={modalOpened} setModalOpened={setModalOpened} />
    </div>
  );
};

export default RightSide;