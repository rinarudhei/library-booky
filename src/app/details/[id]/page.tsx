import { Footer } from '../../../components/containers/footer';
import { Navbar } from '../../../components/containers/navbar';
import { DetailsContent } from './partials/detailsContent';
import { FloatingBorrowButton } from './partials/floatingBorrowButton';

export default function Details() {
  return (
    <div className='flex-center flex-col'>
      <Navbar />
      <DetailsContent />
      <Footer />
    </div>
  );
}
