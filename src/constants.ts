const prd = {
    env: "prd",
    url: "http://10.1.43.63:5000",
    cookieUrl: '__Secure-next-auth.session-token'
  };
  
  const dev = {
    env: "dev",
    url: "http://10.1.43.63:5000",
    cookieUrl: '__Secure-next-auth.session-token'
  };
  
  const local = {
    env: "local",
    url: "http://10.1.43.63:5000",
    cookieUrl: 'next-auth.session-token'
  };
  
  export const configs = dev;