export const AppConstants = {
  usernameForgotMsg: 'Send Userid to email',
  passwordForgotMsg: 'Send password reset email',
  usernameSentMsg:
    'Enter your email address and we will send you user id details.',
  passwordResetMsg:
    'Enter your email address and we will send you a link to reset your password.',
  apiEndpoint: 'http://localhost:3000',
  loginEndPoint: 'loginData'
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
