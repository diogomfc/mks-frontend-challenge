import Image from 'next/image';

import { CartWidget } from '../cart-widget';
import { Container, Logo, Divider, GitHubLink } from './style';

export function Header() {
  return (
    <Container>
      <div>
        <Logo>
          <h1>MKS</h1>
          <span>Sistemas</span>
        </Logo>

        <Divider />

        <GitHubLink
          href="https://github.com/diogomfc/mks-online-store-challenge.git"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/github.svg" alt="GitHub" width={22} height={22} />
          <span>Ver código no GitHub</span>
        </GitHubLink>
      </div>

      <CartWidget />
    </Container>
  );
}
