import type { ReactElement } from 'react';
import { Layout } from '@/components/layout';

export default function About() {
  return <div>Hello next.js</div>;
}

About.getLayout = (page: ReactElement) => <Layout page={page} key={'hoge'} />;
