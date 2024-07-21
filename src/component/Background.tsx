const Background = () => (
    <div className='fixed -z-20 min-h-screen w-full bg-gray-200 blur-[300px]'>
      {/* Circle One */}
      <div className='-z-10 -mt-40 -ml-24 h-96 w-96 rounded-full bg-pink-300 ' />
      <div className='flex justify-between'>
        {/* Circle Two */}
        <div className='-m-40 mt-20 h-80 w-80 rounded-full bg-blue-400 ' />
        {/* Circle Three */}
        <div className='ml-32 h-56 w-56 rounded-full bg-green-500' />
        {/* Circle Four */}
        <div className='h-[30rem] w-[30rem] rounded-full bg-amber-200 ' />
      </div>
    </div>
  );
  
  export default Background;