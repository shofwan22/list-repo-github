import ItemRepo from './ItemRepo';

const CardRepo = () => {
  return (
    <>
      <div className="card mt-5 bg-base-100 shadow-xl">
        <div className="card-body p-6 md:px-10">
          <p className="font-semibold">Repositories</p>
          <div className="divide-y">
            <ItemRepo />
          </div>
        </div>
      </div>
    </>
  );
};

export default CardRepo;
