import Image from 'next/image';

const ItemRepo = () => {
  return (
    <div className="py-4 first:pt-0">
      <a
        href=""
        target="_blank"
        rel="noreferrer"
        className="text-xl font-bold text-[#570DF8] hover:underline"
      >
        name
      </a>
      <p className="text-sm">description</p>
      <div className="mt-4 flex items-center gap-4 text-sm">
        <span>bahasa</span>
        <div className="flex">
          <Image
            src="/star.png"
            alt="icon star"
            className="h-4 w-4"
            width={24}
            height={74}
          />{' '}
          0
        </div>
        <div className="flex">
          <Image
            src="/fork.png"
            alt="icon star"
            className="h-4 w-4"
            width={48}
            height={48}
          />{' '}
          0
        </div>
        <span>Updated</span>
      </div>
    </div>
  );
};

export default ItemRepo;
