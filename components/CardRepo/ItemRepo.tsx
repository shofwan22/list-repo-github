import Image from 'next/image';
import moment from 'moment';

const ItemRepo = ({ ...prop }) => {
  return (
    <div className="py-4 first:pt-0">
      <a
        href={prop.html_url}
        target="_blank"
        rel="noreferrer"
        className="text-xl font-bold text-[#570DF8] hover:underline"
      >
        {prop.name}
      </a>
      <p className="text-sm">{prop.description}</p>
      <div className="mt-4 flex items-center gap-4 text-sm">
        <span>{prop.language}</span>
        <div className="flex">
          <Image
            src="/star.png"
            alt="icon star"
            className="h-4 w-4"
            width={24}
            height={74}
          />{' '}
          {prop.stargazers_count}
        </div>
        <div className="flex">
          <Image
            src="/fork.png"
            alt="icon star"
            className="h-4 w-4"
            width={48}
            height={48}
          />{' '}
          {prop.forks_count}
        </div>
        <span>Updated {moment(prop.pushed_at).fromNow()}</span>
      </div>
    </div>
  );
};

export default ItemRepo;
