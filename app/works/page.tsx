import ScrollAnimation from '@/component/animatedCard';
import Image from 'next/image';
// import logo from '@/public/ASHIM-remove.png';
import justNotarized from '@/public/just_notarize.avif';
import agrobase from '@/public/agrobase.svg';
import basobaas from '@/public/basobaas_logo_1.svg';
import cronlink from '@/public/cronlink-logo-dark.png';
import jhyappai from '@/public/jhyappai.png';
import decor from '@/public/decor.svg';
import autoGlass from '@/public/autoglass.png';
import '../page.scss';
import Link from 'next/link';

export default function Work() {
  const worksList = [
    {
      link: 'https://autoglassshop.com.au/',
      image: autoGlass,
      title: 'Auto Glass',
      subText: 'Vehicle Parts',
    },
    {
      link: 'https://www.justnotarized.com/',
      image: justNotarized,
      title: 'JustNotarized',
      subText: 'Online Notary',
    },
    {
      link: 'https://sms.jhyappai.com/auth/signin',
      image: jhyappai,
      title: 'Jhyappai Sms',
      subText: 'Bulk sms service',
    },
    {
      link: 'https://v3.demo.cronlink.ca/',
      image: cronlink,
      title: 'Cronlink',
      subText: 'Construction management Saas',
    },
    {
      link: 'https://agrobasenepal.com/',
      image: agrobase,
      title: 'Agrobase',
      subText: 'Agricultural E-commerce',
    },
    { link: 'https://basobaas.com/', image: basobaas, title: 'Basobaas', subText: 'Real Estate' },
  ];
  return (
    <div className="mx-auto max-w-[1146px] grid grid-cols-3 gap-[18px]">
      {worksList.map((work, index) => (
        <Link className='h-[100%]' key={index} href={work.link} target="_blank">
          <ScrollAnimation>
            <div className="flex flex-col justify-center items-center !py-[30px] gap-[16px] ">
              <div className=" h-[200px] w-[81.679389313%]">
                <Image className="h-[200px] object-contain" src={work.image} alt="logo" />
              </div>
              <div className="flex w-[81.679389313%] justify-between h-[58px]">
                <div className="flex flex-col gap-3">
                  <span className="text-[#bcbcbc] text-[12px] opacity-50">{work.subText}</span>
                  <span className="text-[20px] text-white font-medium">{work.title}</span>
                </div>
                <div className="bottomImage">
                  <Image className="decor" src={decor} alt="decor" />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </Link>
      ))}
    </div>
  );
}
