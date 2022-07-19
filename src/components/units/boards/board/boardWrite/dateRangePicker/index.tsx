import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

export default function DateRangePicker(props: any) {
  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        style={{ height: "2.5rem", borderRadius: "5px" }}
        placeholder={["동행 시작하는 날", "동행 마지막 날"]}
        onChange={props.onChangeDatePicker}
        dateRender={current => {
          // month는 +1을 해줌 => 0부터 시작하는 이상한 애
          const month = current.month() + 1;
          const currentDate = Number(
            current.year().toString() +
              month.toString().padStart(2, "0") +
              current.date().toString().padStart(2, "0")
          );
          const eventStartDate = Number(
            props.eventDate.start.replaceAll("-", "")
          );
          const eventEndDate = Number(props.eventDate.end.replaceAll("-", ""));

          const style: React.CSSProperties = {};
          if (eventStartDate <= currentDate && currentDate <= eventEndDate) {
            style.backgroundColor = "#FFE69A";
          }
          return (
            <div className="ant-picker-cell-inner" style={style}>
              {current.date()}
            </div>
          );
        }}
      />
    </Space>
  );
}
