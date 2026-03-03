import { Footer } from '../partials/footer';
import { Navbar } from '../partials/navbar';
import { AuthorBookList } from './partials/authorBookList';

export default function Author() {
  return (
    <div className='flex-center flex-col'>
      <Navbar />
      <AuthorBookList />
      <Footer />
    </div>
  );
}
