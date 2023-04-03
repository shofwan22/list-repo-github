import { selectUser } from '@/app/Redux/Features/user';
import { useAppSelector } from '@/app/Redux/hooks';
import ItemRepo from './ItemRepo';

const CardRepo = () => {
  const user = useAppSelector(selectUser);
  return (
    <>
      {user.status === 'succeeded' && user.repos && user.repos.length > 0 && (
        <div className="card mt-5 bg-base-100 shadow-xl">
          <div className="card-body p-6 md:px-10">
            <p className="font-semibold">Repositories</p>
            <div className="divide-y">
              {user.repos
                .slice()
                .sort((a, b) => {
                  const dateA = new Date(a.created_at),
                    dateB = new Date(b.created_at);

                  if (dateA < dateB) {
                    return 1;
                  } else if (dateA > dateB) {
                    return -1;
                  } else {
                    return 0;
                  }
                })
                .map((repo) => {
                  return <ItemRepo key={repo.id} {...repo} />;
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CardRepo;
