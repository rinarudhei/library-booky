import { Footer } from '../../components/containers/footer';
import { Navbar } from '../../components/containers/navbar';
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
