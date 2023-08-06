import type { ReactElement } from 'react';
import { Layout } from '@/components/layout';

export default function Page() {
  return <div>Hello next.js</div>;
}

Page.getLayout = (page: ReactElement) => <Layout page={page} key={'hoge'} />;
