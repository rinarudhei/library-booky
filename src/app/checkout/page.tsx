import { Footer } from '../partials/footer';
import { Navbar } from '../partials/navbar';
import { CheckoutSection } from './partials/checkoutSection';

export default function Checkout() {
  return (
    <div className='flex-center flex-col'>
      <Navbar />
      <CheckoutSection />
      <Footer />
    </div>
  );
}
