import hairdresserImage from "../assets/hairdresser.avif";
import {ScissorOutlined} from "@ant-design/icons";

const Home = () => {
  return (
    <>
    <h1>Hairdresser <ScissorOutlined /></h1>
    <img src={hairdresserImage} alt="styling hair picture" height="300px"/>  
</>)
}

export default Home