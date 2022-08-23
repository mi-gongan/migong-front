import Link from "next/link";
import React from "react";

export interface DesignerPropsType {
  designer: string | string[] | undefined;
}

function DesignerItem({ designer }: DesignerPropsType) {
  return (
    <Link href={`/consulting/${designer}`}>
      <a>{designer}</a>
    </Link>
  );
}

export default DesignerItem;
