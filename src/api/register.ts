import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  const { username, email, password } = await request.json();
  const response = await fetch(`${process.env.STRAPI_API_URL}/auth/local/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, email, password }),
  });
  const data = await response.json();
  return new Response(JSON.stringify({ success: data.jwt ? true : false }), { status: 200 });
};
