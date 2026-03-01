import { Footer } from '../../partials/footer';
import { Navbar } from '../../partials/navbar';
import { DetailsContent } from './partials/detailsContent';

export default function Details() {
  return (
    <div className='flex-center flex-col'>
      <Navbar />
      <DetailsContent />
      <Footer />
    </div>
  );
}
