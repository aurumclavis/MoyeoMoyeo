import { DatePicker, Space } from "antd";

const { RangePicker } = DatePicker;

export default function DateRangePicker(props: any) {
  return (
    <Space direction="vertical" size={12}>
      <RangePicker
        style={{
          width: "100%",
          height: "52px",
          borderRadius: "5px",
          paddingLeft: "15px",
        }}
        onChange={props.onChangeDate}
        autoFocus={true}
      />
    </Space>
  );
}
