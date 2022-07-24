import { Tooltip } from "antd";
import { IToolTipProps } from "../../units/boards/board/boardDetail/BoardDetail.types";

export default function ToolTip(props: IToolTipProps) {
  return (
    <Tooltip title={props.promptText} placement={props.placement}>
      <div>{props.children}</div>
    </Tooltip>
  );
}
