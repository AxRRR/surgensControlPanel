import jwt from 'jsonwebtoken';
// TODO: Cambiar los tipos

declare var process: {
    env: {
        SECRET_JWT_SEED: string;
    };
  };

const GenerateJWT = (id: string, name: string) => {
  return new Promise((resolve, reject) => {
    const payload = { id, name };

    jwt.sign(
      payload,
      process.env.SECRET_JWT_SEED,
      {
        expiresIn: '4h',
      },
      (err: any, token: any) => {
        if (err) {
          console.log(err);
          reject('Error: jwt dont generated');
        }

        resolve(token);
      }
    );
  });
};

export default GenerateJWT;
