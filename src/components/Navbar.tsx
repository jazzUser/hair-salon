import { Anchor } from "antd";
import Home from "./Home";

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
        <Home></Home>

      </div>
      
      <div
        id="service"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(0,0,255,0.02)',
        }}
      />
       <div
        id="contact"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: 'rgba(248, 240, 255, 0.97)',
        }}
      />
      <div
        id="location"
        style={{
          width: '100vw',
          height: '100vh',
          textAlign: 'center',
          background: '#FFFBE9',
        }}
      />
    </div>
  </>
);


export default Navbar;
