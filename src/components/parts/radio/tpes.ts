export type RadioProps = {
  label: string;
  isChecked: boolean;
  onChangeRadio: (event: React.ChangeEvent<HTMLInputElement>) => void;
};
