import { MainContent } from './partials/mainContent';
import { Navbar } from './partials/navbar';

export default function Home() {
  return (
    <div className='flex-center'>
      <Navbar />
      <MainContent />
    </div>
  );
}
