import { Footer } from '../partials/footer';
import { Navbar } from '../partials/navbar';
import { CategoryBook } from './partials/categoryBook';

export default function Categories() {
  return (
    <div className='flex-center flex-col'>
      <Navbar />
      <CategoryBook />
      <Footer />
    </div>
  );
}
