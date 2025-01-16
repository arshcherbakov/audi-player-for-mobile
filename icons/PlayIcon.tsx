import Svg, { SvgProps, Path } from "react-native-svg";

const PlayIcon = (props: SvgProps) => (
  <Svg
    width={21}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      stroke="#000"
      d="M1.741 1.408A.5.5 0 0 0 1 1.846v20.308a.5.5 0 0 0 .741.439l18.462-10.155a.5.5 0 0 0 0-.876L1.741 1.408Z"
    />
  </Svg>
)
export default PlayIcon;