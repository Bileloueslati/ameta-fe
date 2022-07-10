import DefaultLayout from '../../components/layouts/defaultLayout';

type Props = {
  message?: string;
};

export default function Unauthorised({
  message = 'You are not authorized to access this page'
}: Props) {
  return (
    <DefaultLayout>
      <div className="flex items-center flex-col gap-y-4 my-20">
        <div className="text-primary font-gotham font-medium text-lg lg:text-xl">{message}</div>
      </div>
    </DefaultLayout>
  );
}
