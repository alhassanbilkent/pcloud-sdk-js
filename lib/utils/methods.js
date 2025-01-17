"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isApiMethod = isApiMethod;
exports.isAuthMethod = isAuthMethod;
exports.isOAuthMethod = isOAuthMethod;
exports.pCloudApiMethods = void 0;
const pCloudApiMethods = exports.pCloudApiMethods = {
  oauth2_token: {
    auth: false,
    type: "write"
  },
  register: {
    auth: false,
    type: "write"
  },
  listfolder: {
    auth: true,
    type: "read"
  },
  createfolder: {
    auth: true,
    type: "write"
  },
  userinfo: {
    auth: true,
    type: "read"
  },
  currentserver: {
    auth: false,
    type: "read"
  },
  uploadfile: {
    auth: true,
    type: "write"
  },
  getfilelink: {
    auth: true,
    type: "read"
  },
  getapiserver: {
    auth: false,
    type: "read"
  },
  renamefolder: {
    auth: true,
    type: "write"
  },
  deletefile: {
    auth: true,
    type: "write"
  },
  deletefolderrecursive: {
    auth: true,
    type: "write"
  },
  logout: {
    auth: true,
    type: "write"
  },
  createfolderifnotexists: {
    auth: true,
    type: "write"
  },
  getthumblink: {
    auth: true,
    type: "read"
  },
  getvideolink: {
    auth: true,
    type: "read"
  },
  getaudiolink: {
    auth: true,
    type: "read"
  },
  deletefolder: {
    auth: true,
    type: "write"
  },
  diff: {
    auth: true,
    type: "write"
  },
  subscribe: {
    auth: true,
    type: "write"
  },
  listnotifications: {
    auth: true,
    type: "write"
  },
  readnotifications: {
    auth: true,
    type: "write"
  },
  listshares: {
    auth: true,
    type: "read"
  },
  acceptshare: {
    auth: true,
    type: "write"
  },
  declineshare: {
    auth: true,
    type: "write"
  },
  removeshare: {
    auth: true,
    type: "write"
  },
  cancelsharerequest: {
    auth: true,
    type: "write"
  },
  changeshare: {
    auth: true,
    type: "write"
  },
  sharefolder: {
    auth: true,
    type: "write"
  },
  copyfile: {
    auth: true,
    type: "write"
  },
  checksumfile: {
    auth: true,
    type: "read"
  },
  copyfolder: {
    auth: true,
    type: "write"
  },
  listpublinks: {
    auth: true,
    type: "read"
  },
  getfilepublink: {
    auth: true,
    type: "write"
  },
  getfolderpublink: {
    auth: true,
    type: "write"
  },
  gettreepublink: {
    auth: true,
    type: "write"
  },
  deletepublink: {
    auth: true,
    type: "write"
  },
  changepublink: {
    auth: true,
    type: "write"
  },
  copypubfile: {
    auth: true,
    type: "write"
  },
  renamefile: {
    auth: true,
    type: "write"
  },
  showpublink: {
    auth: false,
    type: "read"
  },
  getzip: {
    auth: true,
    type: "write"
  },
  getziplink: {
    auth: true,
    type: "write"
  },
  createuploadlink: {
    auth: true,
    type: "write"
  },
  listuploadlinks: {
    auth: true,
    type: "read"
  },
  deleteuploadlink: {
    auth: true,
    type: "write"
  },
  changeuploadlink: {
    auth: true,
    type: "write"
  },
  uploadlinkprogress: {
    auth: true,
    type: "read"
  },
  downloadfile: {
    auth: true,
    type: "write"
  },
  lostpassword: {
    auth: false,
    type: "write"
  },
  resetpassword: {
    auth: false,
    type: "write"
  },
  changepassword: {
    auth: true,
    type: "write"
  },
  verifyemail: {
    auth: false,
    type: "write"
  },
  sharerequestinfo: {
    auth: false,
    type: "read"
  },
  sendverificationemail: {
    auth: true,
    type: "write"
  },
  getthumbslinks: {
    auth: true,
    type: "read"
  },
  getthumbs: {
    auth: true,
    type: "read"
  },
  uploadprogress: {
    auth: true,
    type: "write"
  },
  invite: {
    auth: true,
    type: "write"
  },
  fb_assign: {
    auth: true,
    type: "write"
  },
  userbonuses: {
    auth: true,
    type: "write"
  },
  givebonus: {
    auth: true,
    type: "write"
  },
  userinvites: {
    auth: true,
    type: "write"
  },
  getvideolinks: {
    auth: true,
    type: "read"
  },
  backup_modify: {
    auth: true,
    type: "write"
  },
  backup_list: {
    auth: true,
    type: "read"
  },
  social_assign: {
    auth: true,
    type: "write"
  },
  extractarchive: {
    auth: true,
    type: "write"
  },
  extractarchiveprogress: {
    auth: true,
    type: "write"
  },
  listrevisions: {
    auth: true,
    type: "read"
  },
  revertrevision: {
    auth: true,
    type: "write"
  },
  supportedlanguages: {
    auth: true,
    type: "read"
  },
  newsletter_check: {
    auth: true,
    type: "read"
  },
  blockchain_address: {
    auth: true,
    type: "read"
  },
  trash_list: {
    auth: true,
    type: "read"
  },
  trash_clear: {
    auth: true,
    type: "write"
  },
  trash_restore: {
    auth: true,
    type: "write"
  },
  trash_getrestorepath: {
    auth: true,
    type: "write"
  },
  collection_list: {
    auth: true,
    type: "read"
  },
  collection_details: {
    auth: true,
    type: "read"
  },
  collection_create: {
    auth: true,
    type: "write"
  },
  collection_rename: {
    auth: true,
    type: "write"
  },
  collection_delete: {
    auth: true,
    type: "write"
  },
  collection_linkfiles: {
    auth: true,
    type: "write"
  },
  collection_unlinkfiles: {
    auth: true,
    type: "write"
  },
  collection_move: {
    auth: true,
    type: "write"
  },
  app_userlist: {
    auth: true,
    type: "read"
  },
  app_userdelete: {
    auth: true,
    type: "write"
  },
  gettextfile: {
    auth: true,
    type: "write"
  },
  getpubtextfile: {
    auth: false,
    type: "write"
  },
  // business

  account_teams: {
    auth: true,
    type: "read"
  },
  account_teamcreate: {
    auth: true,
    type: "read"
  },
  account_info: {
    auth: true,
    type: "read"
  },
  account_modify: {
    auth: true,
    type: "write"
  },
  account_users: {
    auth: true,
    type: "read"
  },
  account_invitemail: {
    auth: true,
    type: "read"
  },
  account_usermodify: {
    auth: true,
    type: "write"
  },
  account_teammodify: {
    auth: true,
    type: "write"
  },
  account_teamlink: {
    auth: true,
    type: "write"
  },
  account_billinginfo: {
    auth: true,
    type: "read"
  },
  account_invoice_modify: {
    auth: true,
    type: "write"
  },
  account_upload_avatar: {
    auth: true,
    type: "write"
  },
  account_teamunlink: {
    auth: true,
    type: "write"
  },
  account_teamlink_head: {
    auth: true,
    type: "write"
  },
  account_teamlink_accept: {
    auth: true,
    type: "write"
  },
  account_invitelist: {
    auth: true,
    type: "read"
  },
  account_invalidate_password: {
    auth: true,
    type: "write"
  },
  account_invitecancel: {
    auth: true,
    type: "write"
  },
  commentlist: {
    auth: true,
    type: "read"
  },
  commentpost: {
    auth: true,
    type: "write"
  },
  commentdelete: {
    auth: true,
    type: "write"
  },
  eventsubscribe: {
    auth: true,
    type: "write"
  },
  account_teamshare: {
    auth: true,
    type: "write"
  },
  account_modifyshare: {
    auth: true,
    type: "write"
  },
  account_stopshare: {
    auth: true,
    type: "write"
  },
  account_listshares: {
    auth: true,
    type: "read"
  },
  account_log: {
    auth: true,
    type: "read"
  },
  account_paystripe: {
    auth: true,
    type: "read"
  },
  listtokens: {
    auth: true,
    type: "read"
  },
  deletetoken: {
    auth: true,
    type: "write"
  },
  savezip: {
    auth: true,
    type: "write"
  },
  savezipprogress: {
    auth: true,
    type: "write"
  },
  contactload: {
    auth: true,
    type: "write"
  },
  sendpublink: {
    auth: true,
    type: "write"
  },
  contactlist: {
    auth: true,
    type: "read"
  },
  account_viewtoken: {
    auth: true,
    type: "write"
  },
  eventslast: {
    auth: true,
    type: "write"
  },
  search: {
    auth: true,
    type: "read"
  },
  issueproforma: {
    auth: true,
    type: "write"
  },
  listproforma: {
    auth: true,
    type: "write"
  },
  getbreadcrumb: {
    auth: true,
    type: "read"
  },
  getpreviewlink: {
    auth: true,
    type: "read"
  },
  getpublinkpreviewdownload: {
    type: "read",
    auth: false
  },
  setlanguage: {
    auth: true,
    type: "write"
  },
  account_branding: {
    auth: true,
    type: "read"
  },
  account_branding_set: {
    auth: true,
    type: "write"
  },
  account_branding_logo_upload: {
    auth: true,
    type: "write"
  },
  account_logintoken: {
    auth: true,
    type: "write"
  },
  getpublinkstats: {
    auth: true,
    type: "read"
  },
  getpublinkadpreference: {
    auth: true,
    type: "read"
  },
  setpublinkadpreference: {
    auth: true,
    type: "write"
  },
  account_ispublinktrafficlimited: {
    auth: true,
    type: "read"
  },
  getreferrallink: {
    auth: true,
    type: "read"
  },
  sendreferrallink: {
    auth: true,
    type: "write"
  },
  listpaymentsubscriptions: {
    auth: true,
    type: "read"
  },
  getip: {
    auth: false,
    type: "read"
  },
  crypto_getuserkeys: {
    auth: true,
    type: "read"
  },
  crypto_getfolderkey: {
    auth: true,
    type: "read"
  },
  crypto_getfilekey: {
    auth: true,
    type: "read"
  },
  crypto_reset: {
    auth: true,
    type: "write"
  },
  crypto_setuserkeys: {
    auth: true,
    type: "write"
  },
  crypto_getuserhint: {
    auth: true,
    type: "write"
  },
  upload_create: {
    auth: true,
    type: "write"
  },
  upload_write: {
    auth: true,
    type: "write"
  },
  upload_save: {
    auth: true,
    type: "write"
  },
  crypto_getroot: {
    auth: true,
    type: "read"
  },
  crypto_getfolderskey: {
    auth: true,
    type: "read"
  },
  stat: {
    auth: true,
    type: "read"
  }
};
function isApiMethod(method) {
  return method in pCloudApiMethods;
}
function isAuthMethod(method) {
  return isApiMethod(method) && pCloudApiMethods[method].auth;
}
function isOAuthMethod(method) {
  return isAuthMethod(method) && "oauth" in pCloudApiMethods[method];
}