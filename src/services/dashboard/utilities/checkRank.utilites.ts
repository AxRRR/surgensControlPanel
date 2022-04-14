export const hasRank = (rank: string) => {
  const administrator = () => (rank === 'Administrator' ? true : false);
  const moderator = () => (rank === 'Moderator' ? true : false);
  const leaderClan = () => (rank === 'Leaderclan' ? true : false);
  const all = () => (rank !== 'Member' ? true : false);

  return { administrator, moderator, leaderClan, all };
};
