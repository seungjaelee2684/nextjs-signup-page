import { http, HttpResponse } from 'msw';

export const handlers = [
  // Handles a GET /user request
  http.post('/api/users/signup', async ({ request }) => {
    const user = await request.body;
    return new HttpResponse(null, {
      status: 200,
      statusText: "회원가입 성공"
    }).json();
  }),
];