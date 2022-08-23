import React from "react";
import { useRouter } from "next/router";
import DesignerTemplate from "../../components/designer/template/DesignerTemplate";

function Post() {
  const router = useRouter();
  const { designer } = router.query;
  return <DesignerTemplate designer={designer} />;
}

export default Post;
