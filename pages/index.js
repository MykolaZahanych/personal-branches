import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='container mx-auto'>
      <div className='md:flex'>
        <div className='md:w-8/12'>
          <h1 className='text-xl pt-5 pb-5'>
            A convenient way to divide your hobbies into separate branches
          </h1>
          <p className='pb-6 md:pb-0'>
            In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
            Suspendisse eu ligula. Vestibulum turpis sem, aliquet eget, lobortis
            pellentesque, rutrum eu, nisl. Nullam sagittis. Phasellus nec sem in
            justo pellentesque facilisis. Phasellus nec sem in justo
            pellentesque facilisis. Praesent vestibulum dapibus nibh.
            Suspendisse faucibus, nunc et pellentesque egestas, lacus ante
            convallis tellus, vitae iaculis lacus elit id tortor.
          </p>
        </div>
        <div className='w-full h-52 md:h-auto md:w-4/12 relative'>
          <Image
            src='/images/tree.svg'
            alt='tree'
            layout='fill'
            objectFit='contain'
          />
        </div>
      </div>
      <div className='pt-10'>
        <h2 className='text-xl flex'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-violet-700 mr-1'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
            />
          </svg>
          Tech branches
        </h2>
        <p className='pt-2 pb-5'>
          Aenean vulputate eleifend tellus. Fusce fermentum. Nam eget dui.
        </p>
        <Link href='/react'>
          <a className='main-purple-btn text-white bg-violet-700 mr-8'>React</a>
        </Link>
        <Link href='/vue'>
          <a className='main-purple-btn text-white bg-violet-700'>Vue</a>
        </Link>
      </div>
      <div className='test' />
    </div>
  );
}
