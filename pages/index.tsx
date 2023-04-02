import Head from 'next/head';
import InputSearch from '@/components/InputSearch';
import CardProfile from '@/components/CardProfile';
import CardRepo from '@/components/CardRepo';

export default function Home() {
  return (
    <>
      <Head>
        <title>GitHub List Repository User</title>
        <meta name="description" content="GitHub List Repo" />
      </Head>
      <div className="container mx-auto px-5 py-10 md:py-14 md:px-12">
        <p className="mb-6 text-xl font-bold">GitHub List Repository</p>
        <InputSearch />

        <div className="divider"></div>
        <div className="flex justify-center">
          <div className="w-full md:w-8/12">
            <CardProfile />
            <CardRepo />
          </div>
        </div>
      </div>
    </>
  );
}
