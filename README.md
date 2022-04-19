# Surgens Royale Clan

### Clash Royale API - Clan Surgens Royale

## Wrapped Clash Royale API - /clans
## Get Information of Clan

Gets all information of the clan

**URL** : `/clans`

**Method** : `GET`



## Register a new User

Register a player in the database.

**URL** : `/auth/register`

**Method** : `GET`

**Parameters** : 
- `name_member` [string] : Username of the user to register
- `tag_member` [string] : The tag in Clash Royale to connect with the account
- `password_member` [string] : Password of the user


## Login

Register a player in the database.

**URL** : `/auth/login`

**Method** : `GET`

**Parameters** : 
- `name_member` [string] : Username of the user to register
- `tag_member` [string] : The tag in Clash Royale to connect with the account
- `password_member` [string] : Password of the user

**Response** :

```json
"status": true,
    "data": {
        "member_info": {
            "_id": "6257ed7f9c150d0bd1fd1e24",
            "tag_member": "#38484J",
            "name_member": "John Doe",
            "email_member": "email@user.com",
            "role_member": "Member",
            "verification_code": "",
            "createdAt": "2022-04-12T12:15:29.885Z"
        },
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNTdlZDdmOWMxNTBkMGJkMWZkMWUyNCIsIm5hbWUiOiJBeFIiLCJpYXQiOjE2NTAzOTk0NTEsImV4cCI6MTY1MDQxMzg1MX0.FC3GuiBHujeiU8oGdVjW5FkpdTB4q6Eiw1IfawSizE0"
    }
```


