import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Layout } from '@/components/layout';
import { LayoutDown } from '@/components/layoutDown';

export default function Thanks() {
  return <div>Hello next.js</div>;
}

Thanks.getLayout = (page: React.ReactNode) => (
  <Layout page={page} key={'huga'} />
);
