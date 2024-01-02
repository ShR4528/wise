import { getProductById } from '@/lib/actions';
import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';

type Props = {
  params: {
    id: string;
  };
};

const ProductDetails = async ({ params: { id } }: Props) => {
  const product = await getProductById(id);
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
