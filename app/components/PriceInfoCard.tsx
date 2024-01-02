import Image from 'next/image';

interface Props {
  title: string;
  iconSrc: string;
  value: string;
}

const PriceInfoCard = ({ title, iconSrc, value }: Props) => {
  return (
    <div className={`price-info_card `}>
      <p className='text-base text-black-100'> {title}</p>
      <div className='flex gap-1'>
        <Image height={24} width={24} src={iconSrc} alt='icon' />
        <p className='text-2xl font-bold text-secondary'>{value}</p>
      </div>
    </div>
  );
};

export default PriceInfoCard;
