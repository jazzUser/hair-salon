import { Anchor } from "antd";

import HeroSection from "./HeroSection";
import ServiceTable from "./ServiceTable";
import Contact from "./Contact";
import MyMap from "./MyMap";

const Navbar = () => (
    <>
    <div
      style={{
        padding: '20px',
      }}
    >
      <Anchor
        direction="horizontal"
        items={[
          {
            key: 'home',
            href: '#home',
            title: 'Home',
          },
          {
            key: 'service',
            href: '#service',
            title: 'Service',
          },
          {
            key: 'contact',
            href: '#contact',
            title: 'Contact',
          },
          {
            key: 'location',
            href: '#location',
            title: 'Location',
          },
        ]}
      />
    </div>
    <div>
      <div
        id="home"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,255,0,0.02)',
        }}
      >
        <HeroSection/>

      </div>
      
      <div
        id="service"
        style={{
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          flexDirection: "column", // Stack content vertically (title and table)
          width: "100vw",
          height: "100vh", // Ensure full viewport height
          background: "rgba(0,0,255,0.02)",
        }}
      >
      <ServiceTable/>
       </div>
       <div
        id="contact"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(248, 240, 255, 0.97)',
        }}
      ><Contact></Contact></div>
      <div
        id="location"
        style={{
          display: "flex",
          justifyContent: "center", // Center horizontally
          alignItems: "center", // Center vertically
          width: "100vw",
          height: "100vh", // Ensure full viewport height
          background: "rgba(0,0,255,0.02)",
        }}
      >
          <MyMap />
      </div>
    </div>
  </>
);


export default Navbar;
