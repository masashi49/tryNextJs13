import { Layout } from '@/components/layout';

export default function Page() {
  return <div>Hello next.js</div>;
}

Page.getLayout = (page: React.ReactNode) => <Layout page={page} key={'hoge'} />;
