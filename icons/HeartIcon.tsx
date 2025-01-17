import Svg, { SvgProps, Path } from "react-native-svg";

const HeartIcon = (props: SvgProps) => (
  <Svg
    width={21}
    height={19}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      d="M18.19 2.24a5.897 5.897 0 0 1 0 8.344l-7.603 7.602-.001.002a.521.521 0 0 1-.74 0v-.002l-7.603-7.602v-.001a5.898 5.898 0 0 1 7.675-8.917l.297.22.298-.22a5.898 5.898 0 0 1 7.676.574Z"
    />
  </Svg>
)
export default HeartIcon;