import React from "react";

import "./App.css";
import Image from "./image/1.png";
import usericon from "./image/round_perm_identity_black_18dp.png";
import email from "./image/round_email_black_18dp.png";
import mobile1 from "./image/round_mobile_screen_share_black_18dp.png";
import calender from "./image/round_calendar_today_black_18dp.png";
import Profile from "./component/Profile";
function App() {
  return (
    <div className="App">
      <Profile
        Image={Image}
        Uname={"Lacey Farnandez"}
        userprofile={"USER PROFILE"}
        name={"User Name"}
        usericon={usericon}
        email={"Email Id"}
        email1={email}
        mobile={"Mobile Number"}
        mobile1={mobile1}
        dob={"Date Of Birth"}
        calender={calender}
        sex={"Sex"}
        male={"Male"}
        female={"Female"}
        save={"Save"}
      />
    </div>
  );
}

export default App;
