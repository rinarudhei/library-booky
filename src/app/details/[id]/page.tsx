import { Footer } from '../../partials/footer';
import { Navbar } from '../../partials/navbar';
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
