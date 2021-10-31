import Head from 'next/head';

export default function Home() {
  return (
    <div className='bg-gray-800 text-white h-screen'>
      <Head>
        <title>Task Application</title>
        <meta
          name='description'
          content='Developed with NextJs, MongoDb y Tailwind by Gabriel Britez'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Hello World</h1>
    </div>
  );
}
