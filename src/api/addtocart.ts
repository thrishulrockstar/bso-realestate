import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  const { productId } = await request.json();
  const response = await fetch(`${process.env.STRAPI_API_URL}/carts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ productId }),
  });
  const data = await response.json();
  return new Response(JSON.stringify({ success: data.id ? true : false }), { status: 200 });
};
