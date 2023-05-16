import LogoSVG from "../../../public/logo.svg";

interface LogoProps {
  width?: Number;
  height?: Number;
}

const Logo: React.FC<LogoProps> = ({ width, height }) => {
  return (
    <div>
      <LogoSVG width={width} height={height} />
    </div>
  );
};

export default Logo;
