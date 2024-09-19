import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  const { username, password } = await request.json();
  const response = await fetch(`${process.env.STRAPI_API_URL}/auth/local`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identifier: username, password }),
  });
  const data = await response.json();
  return new Response(JSON.stringify({ success: data.jwt ? true : false }), { status: 200 });
};
