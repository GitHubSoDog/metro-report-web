import Button from '@/components/common/Button';
import { useRouter } from 'next/router';

const Custom404 = () => {
  const router = useRouter();

  const backRoute = () => {
    router.back();
  };

  const homeRoute = () => {
    router.push('/');
  };
  return (
    <section className="bg-white">
      <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
        <div className="flex flex-col items-center max-w-sm mx-auto text-center">
          <h1 className="mt-3 text-2xl font-semibold text-gray-800">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500">
            {`The page you are looking for doesn't exist. Here are some helpful
            links:`}
          </p>

          <div className="flex items-center w-full mt-6 gap-x-3 shrink-0 sm:w-auto">
            <Button
              theme="light"
              onClick={backRoute}
              id={'backRoute'}
              name={'backRoute'}
            >
              <div className="flex justify-center items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5 pr-2 rtl:rotate-180"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                  />
                </svg>

                <span>Go back</span>
              </div>
            </Button>

            <Button onClick={homeRoute} id={'homeRoute'} name={'homeRoute'}>
              Take me home
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Custom404;
