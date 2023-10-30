import { useRouter } from 'next/router';

const ErrorPage = () => {
  const router = useRouter();
  const statusCode = router.query.statusCode || '500';

  return (
    <div>
      <h1>Error {statusCode}</h1>
      {/* Customize error message or display a helpful message here */}
    </div>
  );
};

export default ErrorPage;