import { Footer } from '../../components/containers/footer';
import { Navbar } from '../../components/containers/navbar';
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
