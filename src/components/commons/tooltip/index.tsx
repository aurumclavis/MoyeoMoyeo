import { Tooltip } from "antd";

export default function ToolTip(props: any) {
  return (
    <Tooltip title={props.promptText} placement={props.placement}>
      <div>{props.children}</div>
    </Tooltip>
  );
}
