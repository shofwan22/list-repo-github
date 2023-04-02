import Image from 'next/image';
import StatProfile from './StatProfile';

const CardProfile = () => {
  const loading = false;
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-6 md:px-10">
        <>
          <div className="flex justify-around sm:justify-start sm:gap-10">
            <div className="avatar items-center justify-center">
              <div className="h-[70px] w-[70px] rounded-full md:h-20 md:w-20">
                <Image
                  src="https://avatars.githubusercontent.com/u/32471909"
                  alt="ava profile"
                  width={70}
                  height={70}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold md:text-2xl">
                Shofwan Hanif
              </span>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="text-[#570DF8] hover:underline"
              >
                @shofwan22
              </a>
              <span className="text-gray-500">Joined </span>
            </div>
          </div>

          <div className="stats stats-vertical mt-5 bg-blue-50 shadow lg:stats-horizontal">
            <StatProfile type={'Repos'} number={3} />
            <StatProfile type={'Following'} number={3} />
            <StatProfile type={'Followers'} number={3} />
          </div>
        </>
      </div>
    </div>
  );
};

export default CardProfile;
