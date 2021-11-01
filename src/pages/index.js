import Head from 'next/head';
import Image from 'next/image';

export default function Home({ tasks }) {
  if (!tasks.length)
    return (
      <div className='flex space-y-4 items-center flex-col py-6'>
        <h1 className='text-center mb-5 text-lg font-medium'>
          There are no tasks yet.
        </h1>
        <Image src='/no_data.svg' width={200} height={200} alt='No tasks yet' />
        <button className='px-5 py-2 text-white bg-blue-500 rounded w-40'>
          Create a Task
        </button>
      </div>
    );

  return (
    <>
      <Head>
        <title>Task Application</title>
        <meta
          name='description'
          content='Developed with NextJs, MongoDb y Tailwind by Gabriel Britez'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='bg-gray-100 h-screen'>
        <div className='container mx-auto p-4'>
          <div className='grid grid-cols-1'>
            {tasks.map((task) => (
              <div
                className='p-5 m-4 bg-white rounded-lg shadow-sm'
                key={task._id}
              >
                <h1 className='font-semibold text-xl'>{task.title}</h1>
                <p>{task.description}</p>
                <div className='space-x-4 py-1'>
                  <hr className='mb-5' />
                  <button className='px-5 py-2 text-white bg-blue-500 rounded w-24'>
                    View
                  </button>
                  <button className='px-5 py-2 text-white bg-purple-600 rounded w-24'>
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async (ctx) => {
  const res = await fetch('http://localhost:3000/api/tasks');
  const tasks = await res.json();

  return {
    props: { tasks },
  };
};
