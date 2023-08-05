import Link from 'next/link';
import React, { ReactNode, useState, FC } from 'react';

interface Props {
  page: ReactNode;
  key: string;
}

export const Layout: FC<Props> = ({ page, key }) => {
  const [state, setState] = useState(0);
  return (
    <div key={key}>
      {key}
      <header>header</header>
      {page}
      <footer>footer</footer>
      <button onClick={() => setState(state + 1)}>Increment {state} + 1</button>

      <ul>
        <li>
          <Link href='/'>top</Link>
        </li>
        <li>
          <Link href='about'>about</Link>
        </li>
        <li>
          <Link href='thanks'>thanks</Link>
        </li>
      </ul>
    </div>
  );
};
