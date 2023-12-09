'use server';

import { scrapeAmazonProduct } from '../scraper';
import { getAveragePrice, getHighestPrice, getLowestPrice } from '../utils';
import { User } from '@/types';

export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;

  try {
    //connectToDB()

    const scrapedProduct = await scrapeAmazonProduct(productUrl);
    if (!scrapedProduct) return;
  } catch (error: any) {
    throw new Error(`Failed to create product: ${error.message}`);
  }
}
