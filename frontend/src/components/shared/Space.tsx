interface Props {
  h?: number;
}

export const Space = ({ h = 10 }: Props) => {
  return <div style={{ height: h }} className={"w-full"}></div>;
};
