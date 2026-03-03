import { Footer } from '../partials/footer';
import { Navbar } from '../partials/navbar';
import { SearchBooks } from './partials/searchBooks';

export default function Search() {
  return (
    <div className='flex-center flex-col'>
      <Navbar />
      <SearchBooks />
      <Footer />
    </div>
  );
}
