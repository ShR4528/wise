import PriceInfoCard from '@/app/components/PriceInfoCard';
import { getProductById } from '@/lib/actions';
import { formatNumber } from '@/lib/utils';
import { Product } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
};

const ProductDetails = async ({ params: { id } }: Props) => {
  const product: Product = await getProductById(id);
  if (!product) redirect('/');

  return (
    <div className='product-container'>
      <div className='flex gap-29 xl:flex-row flex-col'>
        <div className='product-image'>
          <Image
            className='mx-auto'
            height={500}
            width={500}
            src={product.image}
            alt={product.title}
          />
        </div>

        <div className='flex flex-1 flex-col'>
          <div className='flex justify-beetwen items-start gap-5 flex-wrap pb-6'>
            <div className='flex flex-col gap-4'>
              <p className='text-[28px] text-secondary font-semibold'>
                {product.title}
              </p>
              <Link
                href={product.url}
                target='_blank'
                className='text-base text-black opacity-60'>
                Visit
              </Link>
            </div>

            <div className='flex items-center gap-4'>
              <div className='product-hearts'>
                <Image
                  height={30}
                  width={30}
                  src='/assets/icons/black-heart.svg'
                  alt='heart'
                />
                <p className='text-base font-semibold text-[#D46F77]'>
                  {product.reviewsCount}
                </p>
              </div>
              <div className='p-2 bg-white-200 rounded-10'>
                <Image
                  height={30}
                  width={30}
                  src='/assets/icons/bookmark.svg'
                  alt='star'
                />
              </div>
              <div className='p-2 bg-white-200 rounded-10'>
                <Image
                  height={30}
                  width={30}
                  src='/assets/icons/share.svg'
                  alt='share'
                />
              </div>
            </div>
          </div>
          <div className='product-info'>
            <div className='flex flex-col gap-2'>
              <p className='text-[34px] text-secondary font-bold'>
                {product.currency}
                {formatNumber(product.currentPrice)}
              </p>
              <p className='text-[21px] text-black opacity-50 line-through'>
                {product.currency}
                {formatNumber(product.originalPrice)}
              </p>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex gap-3'>
                <div className='product-stars'>
                  <Image
                    src='/assets/icons/star.svg'
                    alt='star'
                    width={16}
                    height={16}
                  />
                  <p className='text-sm text-primary-orange font-semibold'>
                    {product.stars || '34'}
                  </p>
                </div>

                <div className='product-reviews'>
                  <Image
                    src='/assets/icons/comment.svg'
                    alt='comment'
                    width={16}
                    height={16}
                  />

                  <p className='text-sm text-secondary font-semibold'>
                    {product.reviewsCount}
                  </p>
                </div>
              </div>
              <p className='text-sm text-black opacity-50'>
                <span className='text-primary-green font-semibold'>93%</span>of
                buyers have recommeded this.
              </p>
            </div>
          </div>
          <div className='my-7 flex flex-col gap-5 '>
            <div className='flex gap-5 flex-wrap'>
              <PriceInfoCard
                title='Current Price'
                borderColor=''
                iconSrc='/assets/icons/price-tag.svg'
                value={`${product.currency} ${formatNumber(
                  product.currentPrice
                )}`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
