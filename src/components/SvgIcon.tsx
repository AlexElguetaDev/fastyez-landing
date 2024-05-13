type SvgIconProps = {
  src: string;
  width: string;
  height: string;
};

const SvgIcon = ({ src, width, height }: SvgIconProps) => {
  return <img src={src} width={width} height={height} alt="SVG Icon" />;
};

export default SvgIcon;
