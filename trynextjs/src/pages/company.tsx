import type { ReactElement } from 'react';
import { Layout } from '@/components/layout';

export default function Company() {
  return <div>this is company</div>;
}

Company.getLayout = (page: ReactElement) => <Layout page={page} key={'hoge'} />;
