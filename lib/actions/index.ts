'use server';

import { scrapeAmazonProduct } from '../scraper';

export async function scrapeAndStoreProduct(productUrl: string) {
  if (!productUrl) return;
  //let product = scrapedProduct;

  try {
    const scrapedProduct = await scrapeAmazonProduct(productUrl);
  } catch (error: any) {
    throw new Error(`Failed to create product: ${error.message}`);
  }
}
