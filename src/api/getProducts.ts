import type { APIRoute } from 'astro';

export const get: APIRoute = async () => {
  const response = await fetch(`${process.env.STRAPI_API_URL}/products`);
  const products = await response.json();
  return new Response(JSON.stringify(products), { status: 200 });
};
