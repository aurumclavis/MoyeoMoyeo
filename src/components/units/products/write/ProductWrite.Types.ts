export interface ProductsWriteUIProps {
  register: (name: string, RegisterOptions?) => { onChange; onBlur; ref; name };
  handleSubmit: any;
  formState: any;
  onChangeContents: (value: string) => void;
}
