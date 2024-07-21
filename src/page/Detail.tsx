import {useNavigate, useParams} from 'react-router-dom';
import Heading from '../component/Heading';
import Card from '../component/Card';
import {useCallback, useEffect, useState} from 'react';
import {fetchJob} from '../service/jobs';
import { FaArrowLeft } from 'react-icons/fa';

const Detail = () => {
  const {id} = useParams();
  const [details, setDetails] = useState<Record<string, any>>();
  const navigate = useNavigate();

  const fetchDetails = useCallback(async () => {
    if (id) {
      const response = await fetchJob(id);
      setDetails(response);
    }
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);
  return (
    <div>
      <div className='flex items-center'>
        <div className='rounded-full bg-white ml-5 p-4 cursor-pointer' onClick={()=>navigate(-1)}>
          <FaArrowLeft size={24}/>
        </div>
        <div className='flex justify-center items-center m-10 w-full'>
          <h1 className='mb-4 text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r to-pink-600 from-emerald-600 md:text-5xl lg:text-6xl animate-fade-down animate-once'>
            <span className='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
              Detail
            </span>{' '}
            View
          </h1>
        </div>
      </div>
      <div className='m-4'>
        <Heading
          text='About Image'
          type='title'
          className='!font-bold'
        />
        <div className='flex flex-col md:flex-row w-full'>
          <div className='w-full md:w-1/2 lg:w-1/4 flex justify-center items-center'>
            <Card className='!m-0 w-full'>
              <img
                src={details?.result?.urls?.raw}
                className='h-[600px] lg:h-96 w-full'
                alt='food'
              />
            </Card>
          </div>
          <div className='w-full md:w-1/2 lg:w-3/4'>
            <div className='flex flex-wrap mt-2 md:mt-0'>
              <span className='m-2'>
                <Heading
                  text='Slug'
                  type='base'
                />
                <p className='p-2 bg-blue-100 w-fit rounded-md font-medium text-sm md:text-base border border-slate-300 text-blue-800'>
                  {details?.result?.slug ?? 'N/A'}
                </p>
              </span>
              <span className='m-2'>
                <Heading
                  text='Description'
                  type='base'
                />
                <p className='p-2 bg-blue-100 w-fit rounded-md font-medium text-sm md:text-base border border-slate-300 text-blue-800'>
                  {details?.result?.description ?? 'N/A'}
                </p>
              </span>
              <span className='m-2'>
                <Heading
                  text='Alternate Description'
                  type='base'
                />
                <p className='p-2 bg-blue-100 w-fit rounded-md font-medium text-sm md:text-base border border-slate-300 text-blue-800'>
                  {details?.result?.alt_description ?? 'N/A'}
                </p>
              </span>
              <span className='m-2'>
                <Heading
                  text='Username'
                  type='base'
                />
                <p className='p-2 bg-blue-100 w-fit rounded-md font-medium text-sm md:text-base border border-slate-300 text-blue-800'>
                  {details?.result?.user?.username ?? 'N/A'}
                </p>
              </span>
              <span className='m-2'>
                <Heading
                  text='Name'
                  type='base'
                />
                <p className='p-2 bg-blue-100 w-fit rounded-md font-medium text-sm md:text-base border border-slate-300 text-blue-800'>
                  {details?.result?.user?.name ?? 'N/A'}
                </p>
              </span>
              <span className='m-2'>
                <Heading
                  text='Twitter Username'
                  type='base'
                />
                <p className='p-2 bg-blue-100 w-fit rounded-md font-medium text-sm md:text-base border border-slate-300 text-blue-800'>
                  {details?.result?.user?.twitter_username ?? 'N/A'}
                </p>
              </span>
              <span className='m-2'>
                <Heading
                  text='Instagram Username'
                  type='base'
                />
                <p className='p-2 bg-blue-100 w-fit rounded-md font-medium text-sm md:text-base border border-slate-300 text-blue-800'>
                  {details?.result?.user?.instagram_username ?? 'N/A'}
                </p>
              </span>
              <span className='m-2'>
                <Heading
                  text='Location'
                  type='base'
                />
                <p className='p-2 bg-blue-100 w-fit rounded-md font-medium text-sm md:text-base border border-slate-300 text-blue-800'>
                  {details?.result?.user?.location ?? 'N/A'}
                </p>
              </span>
              <span className='m-2'>
                <Heading
                  text='Bio'
                  type='base'
                />
                <p className='p-2 bg-blue-100 w-fit rounded-md font-medium text-sm md:text-base text-blue-800 border border-slate-300'>
                  {details?.result?.user?.bio ?? 'N/A'}
                </p>
              </span>
            </div>

            <div className='m-2'>
              <Heading
                text='Tags'
                type='base'
              />
              <div className='flex flex-wrap'>
                {details?.result?.tags?.map((item: Record<string, string>) => {
                  return (
                    <span
                      key={item.title}
                      className='m-2 p-2 border border-slate-300 bg-purple-100 text-purple-800 rounded-md'
                    >{`#${item.title}`}</span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
