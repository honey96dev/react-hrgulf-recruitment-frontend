import {PROJECT} from "core/globals";

export default {
  baseUrl: PROJECT.IS_DEV ? "http://localhost:8080/api/" : "/api/",
  assetsBaseUrl: PROJECT.IS_DEV ? "http://localhost:8080/assets/" : "/assets/",
  auth: {
    signIn: "auth/sign-in",
    signUp: "auth/sign-up",
    validateGoogleAccount: "auth/validate-google-account",
    signInWithGoogle: "auth/sign-in-with-google",
    signInWithFacebook: "auth/sign-in-with-facebook",
    validateFacebookAccount: "auth/validate-facebook-account",
    sendForgotPasswordMail: "auth/send-forgot-password-mail",
    validateToken: "auth/validate-token",
    resetPassword: "auth/reset-password",
  },
  profile: {
    avatar: "profile/avatar",
    saveAvatar: "profile/save-avatar",
    save: "profile/save",
    changePassword: "profile/change-password",
  },
  contact: {
    us: "contact/us",
    consultants: "contact/consultants",
    // consultants: "https://eliteresources.co/api/director-board/list",
  },
  about: {
    loadAboutUs: "about/load-aboutus",
  },
};
