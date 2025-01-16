import Svg, { SvgProps, Rect } from "react-native-svg";

const PauseIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Rect width={6} height={18} x={4} y={3} fill="#000" rx={2} />
    <Rect width={6} height={18} x={14} y={3} fill="#000" rx={2} />
  </Svg>
)
export default PauseIcon;
