import Svg, { SvgProps, Path } from "react-native-svg";

const ArrowIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="M15.165 16.42c.32.3.32.82.02 1.14-.16.16-.36.24-.58.24-.2 0-.4-.08-.56-.22l-5.2-5a.801.801 0 0 1-.24-.58c0-.22.08-.42.24-.58l5.2-5c.32-.3.82-.3 1.14.02.3.32.3.82-.02 1.14l-4.6 4.42 4.6 4.42Z"
    />
  </Svg>
)
export default ArrowIcon;
