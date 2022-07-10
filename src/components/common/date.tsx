import dayjs from 'dayjs';

type Props = {
  date: string;
  format?: string;
};

export default function Date({ date, format = 'DD/MM/YYYY' }: Props) {
  return <>{dayjs(date).format(format)}</>;
}
