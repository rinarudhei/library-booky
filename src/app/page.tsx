import { MainBanner } from './partials/mainBanner';
import { Navbar } from './partials/navbar';

export default function Home() {
  return (
    <div className='flex-center'>
      <Navbar />
      <main>
        <MainBanner />
      </main>
    </div>
  );
}
