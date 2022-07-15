import { DatePicker, Space } from "antd";
import locale from "antd/lib/date-picker/locale/ko_KR";

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
        placeholder={props.placeholder}
        onChange={props.onChangeDate}
        locale={locale}
      />
    </Space>
  );
}
