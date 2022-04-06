
import { client } from "axiosDefault"


export const getProfile = (user: any) => {
    return client.post(`specific_member?tagname=%23VY9RCYG`, {}, {
        headers: { 
            'accessJWT': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNDYwNTRlMDM4YmFjYTZlYzA2ZmM2NCIsIm5hbWUiOiJBeFIzLjAiLCJpYXQiOjE2NDg3NTYwOTQsImV4cCI6MTY0ODc3MDQ5NH0.9DRw1NNhN0cappV4TNX8jS1mB-3XWTdOmHPg9Wk7uNQ'
          }
    }).then((response) => response).catch((error) => error)
}