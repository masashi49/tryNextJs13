import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Layout } from '@/components/layout';
import { LayoutDown } from '@/components/layoutDown';

export default function About() {
  return <div>Hello next.js</div>;
}

About.getLayout = (page: React.ReactNode) => (
  <Layout page={page} key={'hoge'} />
);
