import Image from 'next/image';
import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='mt-[4rem] flex flex-col items-center gap-6'>
      <div className=''>
        <Image src='/404.svg' width={600} height={600} alt='not_found_image' className='object-cover'/>
      </div>
      <div className='flex flex-col items-center gap-6'>
        <h1 className='text-4xl font-bold'>Oops! Page Not Found.</h1>
        <p className='text-gray-400'>The page you are looking for is not available or has been moved. Try a different page or go to homepage with the button below.</p>
      </div>
      <div>
        <Link href='/' className='border border-gray-400 text-xl font-medium px-4 py-2 rounded'>Go To Homepage</Link>
      </div>
    </div>
  )
}

export default NotFound;