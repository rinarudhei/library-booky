import { Footer } from '../components/containers/footer';
import { MainContent } from './partials/mainContent';
import { Navbar } from '../components/containers/navbar';

export default function Home() {
  return (
    <div className='flex-center flex-col'>
      <Navbar />
      <MainContent />
      <Footer />
    </div>
  );
}
