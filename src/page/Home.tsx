import Button from '../component/Button';
import Card from '../component/Card';
import Skeleton from '../component/Skeleton';
import {FaPlus} from 'react-icons/fa';
import {createJob, fetchJobs} from '../service/jobs';
import {useEffect, useState} from 'react';
import {IJobs, STATUS} from '../types';
import {Link} from 'react-router-dom';
import { truncateText } from '../common/utils';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [isFetcher, setIsFetcher] = useState(false);
  const [jobs, setJobs] = useState<IJobs[]>();

  const handleCreateJob = async () => {
    setLoading(true);
    await createJob();
    const response = await fetchJobs();
    setJobs(response);
    setLoading(false);
  };
  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await fetchJobs();
      setJobs(response);
      setIsFetcher(true);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className='flex justify-center m-10'>
        <h1 className='mb-4 text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-emerald-600 animate-fade-down animate-once'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
            Random Image
          </span>{' '}
          Creator.
        </h1>
      </div>
      <div className='mx-4'>
        <Button
          btnText='Create'
          icon={<FaPlus />}
          preAppendIcon
          className='w-28 items-center flex rounded-md bg-blue-800 text-white hover:bg-blue-700 justify-center'
          onClick={handleCreateJob}
          loading={loading}
        />
      </div>
      <div className='flex'>
        <div className='flex flex-wrap justify-center sm:justify-start'>
          {isFetcher
            ? jobs?.map((item) => {
                return (
                  <Card
                    key={item._id}
                    className='cursor-pointer w-[350px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'
                  >
                    {item?.status === STATUS.RESOLVED ? (
                      <Link to={`/detail/${item?._id}`}>
                        <img
                          src={item.result?.urls?.raw}
                          alt='Sunset in the mountains'
                          className='w-full h-60 rounded-md'
                        />
                        <div className='p-4'>
                          <div className='font-bold text-xl mb-2'>
                            {truncateText(item.result?.description ?? '')}
                          </div>
                          <p className='text-gray-700 text-base'>
                            {item.result?.alt_description}
                          </p>
                        </div>
                      </Link>
                    ) : (
                      <div className='bg-amber-300 flex justify-center items-center flex-col w-full rounded-md h-[350px] cursor-not-allowed'>
                        <div className='font-extrabold text-3xl to-blue-600 from-lime-600 text-transparent bg-clip-text bg-gradient-to-r'>
                          {item.status}
                        </div>
                      </div>
                    )}
                  </Card>
                );
              })
            : Array.from({length: 8}, (_, i) => <Skeleton key={i} />)}
        </div>
      </div>
    </div>
  );
};

export default Home;
