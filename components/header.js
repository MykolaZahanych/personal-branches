import Head from 'next/head';

export default function Header() {
  return (
    <header className='h-16 flex items-center'>
      <Head>
        <title>Personal Branches</title>
        <meta name='description' content='Aplication for your branches' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='container mx-auto'>
        <p className='text-2xl text-center text-violet-700 uppercase'>
          Branches
        </p>
      </div>
    </header>
  );
}
