import { Footer } from '../../components/containers/footer';
import { Navbar } from '../../components/containers/navbar';
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
