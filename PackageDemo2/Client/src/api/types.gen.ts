// This file is auto-generated by @hey-api/openapi-ts
export type DocumentGranularPermissionModel = {
    key: string;
    readonly context: string;
    permission: string;
};

export type ReadOnlyUserGroupModel = {
    id: number;
    key: string;
    name: string;
    icon?: (string) | null;
    startContentId?: (number) | null;
    startMediaId?: (number) | null;
    alias: string;
    hasAccessToAllLanguages: boolean;
    allowedLanguages: Array<(number)>;
    permissions: Array<(string)>;
    granularPermissions: Array<(DocumentGranularPermissionModel | UnknownTypeGranularPermissionModel)>;
    allowedSections: Array<(string)>;
};

export type UnknownTypeGranularPermissionModel = {
    context: string;
    permission: string;
};

export type UserGroupModel = {
    id: number;
    key: string;
    createDate: string;
    updateDate: string;
    deleteDate?: (string) | null;
    readonly hasIdentity: boolean;
    startMediaId?: (number) | null;
    startContentId?: (number) | null;
    icon?: (string) | null;
    alias: string;
    name?: (string) | null;
    hasAccessToAllLanguages: boolean;
    permissions: Array<(string)>;
    granularPermissions: Array<(DocumentGranularPermissionModel | UnknownTypeGranularPermissionModel)>;
    readonly allowedSections: Array<(string)>;
    readonly userCount: number;
    readonly allowedLanguages: Array<(number)>;
};

export type UserKindModel = 'Default' | 'Api';

export type UserModel = {
    id: number;
    key: string;
    createDate: string;
    updateDate: string;
    deleteDate?: (string) | null;
    readonly hasIdentity: boolean;
    emailConfirmedDate?: (string) | null;
    invitedDate?: (string) | null;
    username: string;
    email: string;
    rawPasswordValue?: (string) | null;
    passwordConfiguration?: (string) | null;
    isApproved: boolean;
    isLockedOut: boolean;
    lastLoginDate?: (string) | null;
    lastPasswordChangeDate?: (string) | null;
    lastLockoutDate?: (string) | null;
    failedPasswordAttempts: number;
    comments?: (string) | null;
    userState: UserStateModel;
    name?: (string) | null;
    readonly allowedSections: Array<(string)>;
    readonly profileData: (UserModel | UserProfileModel);
    securityStamp?: (string) | null;
    avatar?: (string) | null;
    sessionTimeout: number;
    startContentIds?: Array<(number)> | null;
    startMediaIds?: Array<(number)> | null;
    language?: (string) | null;
    kind: UserKindModel;
    readonly groups: Array<(ReadOnlyUserGroupModel | UserGroupModel)>;
};

export type UserProfileModel = {
    id: number;
    name?: (string) | null;
};

export type UserStateModel = 'Active' | 'Disabled' | 'LockedOut' | 'Invited' | 'Inactive' | 'All';
export type PingResponse = (string);

export type PingError = (unknown);
export type WhatsMyNameResponse = (string);

export type WhatsMyNameError = (unknown);

export type WhatsTheTimeMrWolfResponse = (string);

export type WhatsTheTimeMrWolfError = (unknown);

export type WhoAmIResponse = ((UserModel));

export type WhoAmIError = (unknown);
