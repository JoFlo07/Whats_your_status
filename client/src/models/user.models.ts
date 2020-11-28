export interface IUser {
  ok: boolean;
  user: {s
    id: string;
    team_id: string;
    name: string;
    deleted: boolean;
    color: string;
    real_name: string;
    tz: string;
    tz_label: string;
    tz_offset: number;
    profile: {
      title: string;
      phone: string;
      skype: string;
      real_name: string;
      real_name_normalized: string;
      display_name: string;
      display_name_normalized: string;
      status_text: string;
      status_emoji: string;
      status_expiration: number;
      avatar_hash: string;
      first_name: string;
      last_name: string;
      email: string;
      image_original: string;
      image_24: string;
      image_32: string;
      image_48: string;
      image_72: string;
      image_192: string;
      image_512: string;
      team: string;
    };
    is_admin: boolean;
    is_owner: boolean;
    is_primary_owner: boolean;
    is_restricted: boolean;
    is_ultra_restricted: boolean;
    is_bot: boolean;
    is_stranger: boolean;
    updated: number;
    is_app_user: boolean;
    is_invited_user: boolean;
    has_2fa: boolean;
    locale: string;
  };
}

export interface IUserList {
  ok: boolean;
  members: IUser[];
  cache_ts: number;
  response_metadata: {
    next_cursor: string;
  };
}
