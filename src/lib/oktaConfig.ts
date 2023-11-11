export const oktaConfig = {
    clientId: '0oad89bz12uBeQYti5d7',
    issuer: 'https://dev-73332023.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}