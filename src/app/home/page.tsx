import { CardProduct } from '@/components/card-product';
import { Footer } from '@/components/footer/page';
import { Header } from '@/components/header';

import { Main } from './style';

export function Home() {
  return (
    <>
      <Header />
      <Main>
        <CardProduct />
      </Main>
      <Footer />
    </>
  );
}
