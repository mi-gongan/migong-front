import React from "react";
import { DesignerPropsType } from "../../consulting/blocks/DesignerItem";

function DesignerTemplate({ designer }: DesignerPropsType) {
  return <div>{designer}</div>;
}

export default DesignerTemplate;
