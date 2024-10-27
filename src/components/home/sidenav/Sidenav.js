import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="M" subTitle="enu" />
      <ul>
        {/* <li className="sidenavLi">Blog Page</li> */}
        <li className="sidenavLi">Portfolio Page</li>
      </ul>
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Clip Verse</li>
        <li className="sidenavLi">Cars Renting Website</li>
        <li className="sidenavLi">Netflix Clone</li>
        <li className="sidenavLi">Portfolio Websites</li>
        <li className="sidenavLi">Password Manager</li>
        <li className="sidenavLi">Promodoro Timer</li>
      </ul>
      {/* <SidenavTitle title="L" subTitle="atest Posts" />
      <ul>
        <li className="sidenavLi">UI & UX Conference at Lviv 2022</li>
        <li className="sidenavLi">How to become a creative designer</li>
        <li className="sidenavLi">
          Designers thoughts about mobile UI templates
        </li>
        <li className="sidenavLi">Designer Conference at Florida, USA 2020</li>
      </ul> */}
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        {/* <li className="sidenavLi">+968 24769821</li> */}
        <li className="sidenavLi">suthakaranburaj03@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav