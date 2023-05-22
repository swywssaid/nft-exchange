import LogoPNG from "../../../public/logo.png";
import Image from "next/image";

interface LogoProps {
  width?: Number;
  height?: Number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <div>
      <Image src={LogoPNG} alt="Logo PNG" width={width} height={height} />
    </div>
  );
};

export default Logo;
