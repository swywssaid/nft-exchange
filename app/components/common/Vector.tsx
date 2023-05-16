import VectorSVG from "../../../public/vector.svg";

interface VectorProps {
  className?: string;
  width?: Number;
  height?: Number;
}

const Vector: React.FC<VectorProps> = ({ className, width, height }) => {
  return (
    <div className={className}>
      <VectorSVG width={width} height={height} />
    </div>
  );
};

export default Vector;
