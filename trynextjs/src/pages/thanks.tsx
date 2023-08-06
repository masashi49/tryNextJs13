import type { ReactElement } from 'react';
import { Layout } from '@/components/layout';

export default function Thanks() {
  return <div>Hello next.js</div>;
}

Thanks.getLayout = (page: ReactElement) => <Layout page={page} key={'huga'} />;
