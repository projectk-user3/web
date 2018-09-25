export const AppConstants = {
  usernameForgotMsg: 'Send Userid to email',
  passwordForgotMsg: 'Send password reset email',
  usernameSentMsg:
    'Enter your email address and we will send you user id details.',
  passwordResetMsg:
    'Enter your email address and we will send you a link to reset your password.',
  apiEndpoint: 'api',
  loginEndPoint: '/loginData',
  searchByIdEndPoint: '/searchById',
  searchEndPoint: '/fetchProfiles',
  admin: 'admin',
  client: 'client',
  user: 'user',
  useMockData: true,
  receivedLikeCntEndPoint:'/receivedLikeCntEndPoint',
  sentLikeCntEndPoint:'/sentLikeCntEndPoint',
  receivedMsgCntEndPoint:'/receivedMsgCntEndPoint',
  sentMsgCntEndPoint:'/sentMsgCntEndPoint',
  favCntEndPoint:'/favCntEndPoint'
};

export class ErrorConstants {
  public static get httpError(): string {
    return 'There was an HTTP error.';
  }
  public static get typeError(): string {
    return 'There was a Type error.';
  }
  public static get generalError(): string {
    return 'There was a general error.';
  }
  public static get somethingHappened(): string {
    return 'Nobody threw an Error but something happened!';
  }
}
