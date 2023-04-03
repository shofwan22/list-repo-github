import { useAppDispatch } from '@/app/Redux/hooks';
import { fetchUser, fetchRepos, selectUser } from '@/app/Redux/Features/user';
import { useState } from 'react';

const InputSearch = () => {
  const [username, setUsername] = useState<string>('');
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(fetchUser(username));
    dispatch(fetchRepos(username));
  };

  return (
    <div className="flex justify-center gap-3">
      <form
        className="flex w-full flex-col gap-3 md:w-8/12 md:flex-row"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Github username here"
          className="input w-full shadow-lg focus:border-2 focus:border-dashed focus-border-black focus:outline-none"
        />
        <button className="btn btn-black md:px-10" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
