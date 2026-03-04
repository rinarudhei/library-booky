import { Footer } from '../../components/containers/footer';
import { Navbar } from '../../components/containers/navbar';
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
