import Image from 'next/image';
import { selectUser } from '@/app/Redux/Features/user';
import { useAppSelector } from '@/app/Redux/hooks';
import StatProfile from './StatProfile';

const CardProfile = () => {
  const user = useAppSelector(selectUser);
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body p-6 md:px-10">
        {user.status === 'loading' && (
          <div className="flex justify-center">
            <progress className="progress my-4 w-8/12"></progress>
          </div>
        )}
        {user.status === 'failed' ||
          (user.status === 'idle' && (
            <p className="text-center">No User Data</p>
          ))}
        {user.status === 'succeeded' && user.data?.id && (
          <>
            <div className="flex justify-around sm:justify-start sm:gap-10">
              <div className="avatar items-center justify-center">
                <div className="h-[70px] w-[70px] rounded-full md:h-20 md:w-20">
                  <Image
                    src={user.data.avatar_url}
                    alt="ava profile"
                    width={70}
                    height={70}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-semibold md:text-2xl">
                  {user.data.name}
                </span>
                <a
                  href={user.data.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#570DF8] hover:underline"
                >
                  @{user.data.login}
                </a>
                <span className="text-gray-500">
                  Joined {user.data.created_at}
                </span>
              </div>
            </div>

            <div className="stats stats-vertical mt-5 bg-blue-50 shadow lg:stats-horizontal">
              <StatProfile type={'Repos'} number={user.data.public_repos} />
              <StatProfile type={'Following'} number={user.data.following} />
              <StatProfile type={'Followers'} number={user.data.followers} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CardProfile;
