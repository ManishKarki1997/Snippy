import { FaSpinner } from "react-icons/fa6";

interface Props {
  size?: number;
}

export const Loader = ({ size = 16 }: Props) => {
  return (
    <FaSpinner
      style={{
        height: size,
        width: size,
      }}
      className="mr-2 animate-spin"
    />
  );
};
