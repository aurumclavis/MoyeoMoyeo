import { DatePicker, Space } from "antd";
import locale from "antd/lib/date-picker/locale/ko_KR";

const { RangePicker } = DatePicker;
interface IDateRangePicker {
  placeholder: any;
  onChangeDate: (e: any) => void;
  defaultValue: any;
}

export default function DateRangePicker(props: IDateRangePicker) {
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
        defaultValue={props.defaultValue}
      />
    </Space>
  );
}
