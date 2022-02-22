import Header from './header';
import Footer from './footer';

export default function Layout({ children }) {
  return (
    <div className='bg-neutral-100'>
      <Header />
      <main className='main'>{children}</main>
      <Footer />
    </div>
  );
}
