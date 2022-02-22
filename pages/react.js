import Image from 'next/image';
import useSWR from 'swr';

import LearningList from '../components/LearningList';

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function React() {
  const { data, error } = useSWR('/api/react', fetcher);

  return (
    <div className='container mx-auto'>
      <div className='md:flex'>
        <div className='md:w-8/12'>
          <h1 className='text-xl pt-5 pb-5'>React branch</h1>
          <p className='pb-4'>
            In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            Suspendisse eu ligula. Vestibulum turpis sem, aliquet eget, lobortis
            pellentesque, rutrum eu, nisl. Nullam sagittis. Phasellus nec sem in
            justo pellentesque facilisis. Phasellus nec sem in justo
            pellentesque facilisis. Praesent vestibulum dapibus nibh.
          </p>
          <a
            className='mb-4 hover:scale-110 transition-all inline-block py-2 px-6 rounded text-white bg-violet-700'
            href='https://reactjs.org/docs/hello-world.html'
            target={'_blank'}
            rel={'noreferrer'}
          >
            View documentation
          </a>
        </div>
        <div className='w-full h-52 md:h-auto md:w-4/12 relative'>
          <Image
            src='/images/react.png'
            alt='react'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
      <div className='pt-6'>
        <h2 className='text-xl mb-4'>Currently learning</h2>
        {!data || error ? (
          <div className='h-28 border-2 border-black rounded flex justify-center items-center'>
            <h2>{error ? 'Failed to load' : 'Loading...'}</h2>
          </div>
        ) : (
          <LearningList items={data} />
        )}
      </div>
    </div>
  );
}
