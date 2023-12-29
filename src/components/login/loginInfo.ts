const redirect_URI = `http://localhost:3000/googlelogin`
const CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
export const google_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${CLIENT_ID}&redirect_uri=${redirect_URI}&response_type=code&scope=email`