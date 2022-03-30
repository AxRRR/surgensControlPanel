interface MembersModel {
    name: string,
    role: string,
    lastSeen: number,
    tag: string,
    trophies: number 
}

export const membersAdapter = (members: any) => {
    // Damos formato a la información que más utilizamos
    const { memberList } = members;
    return memberList.map(({ name, role, lastSeen, tag, trophies }: MembersModel) => {
        return {
            name,
            role,
            lastSeen,
            tag,
            trophies
        }
    });
};