import { memo, VFC, ReacyNode } from "react";

import { Header } from "../organism/layout/Header";

type Props = {
  children: ReacyNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;

  return (
    <>
      <Header />
      {children}
      {}
    </>
  );
});
