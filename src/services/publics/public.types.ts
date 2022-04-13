export interface TypeTag {
  tag: string;
  memberList?: any;
}

export interface TypeClan {
  tag: string;
  name: string;
  type: string;
  badgeId: number;
  clanScore: number;
  clanWarTrophies: number;
  location: {
    id: number;
    name: string;
    isCountry: boolean;
    countryCode: string;
  };
  requiredTrophies: number;
  donationsPerWeek: number;
  clanChestLevel: number;
  clanChestMaxLevel: number;
  members: number;
  memberList?: {
    tag: string;
    name: string;
    role: string;
    lastSeen: number;
    expLevel: number;
    trophies: number;
    arena: {
      id: number;
      name: string;
    };
    clanRank: number;
    previousClanRank: number;
    donations: number;
    donationsReceived: number;
    clanChestPoints: number;
  }
}

export interface TypeMember {
  tag: string;
  name: string;
  role: string;
  lastSeen: number;
  expLevel: number;
  trophies: number;
  arena: {
    id: number;
    name: string;
  };
  clanRank: number;
  previousClanRank: number;
  donations: number;
  donationsReceived: number;
  clanChestPoints: number;
}

export interface TypeAllClan {
  TypeClan: TypeClan,
  TypeMember: TypeMember
}

export interface TypesTopClan {
  tagname: string;
  max: number;
  type: string;
}

export interface TypesTopClans {
  max: number;
  type: string;
}

export interface TypesDonations {
  name: string;
  donationsPerWeek: number;
  tag?: string
}

export interface TypesWarlog {
  clan: {
    tag: string;
    name: string;
    badgeId: number;
    fame: number;
    repairPoints: number;
    participants: [
      {
        tag: string;
        name: string;
        fame: number;
        repairPoints: number;
        boatAttacks: number;
        decksUsed: number;
        decksUsedToday: number;
      }
    ];
  };
}
