import NextAuth from "next-auth/next"
import CredentialsProvider from "next-auth/providers/credentials"
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    maxAge: 30 * 24 * 60 * 60,
    providers: [
        CredentialsProvider({
            credentials: {
                email: {
                    label: 'Email', type: 'text', required: true, placeholder: 'Type your Email'
                },
                password: {
                    label: 'Password', type: 'password', required: true, placeholder: 'Type your Password'
                }
            },

            async authorize(credentials) {
                console.log(credentials);
                let { email, password } = credentials
                if (!credentials) {
                    return null
                }
                const currentUser = users.find((user) => user.email === email);

                if (currentUser && currentUser.password === password) {
                    return currentUser;
                }
                return null;
            }
        }),

        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })

    ],

    callbacks: {
        async jwt({ token, account, user }) {
            // Persist the OAuth access_token and or the user id to the token right after signin
            if (account) {
                token.type = user.type
                //   token.id = profile.id
            }
            return token;
        },
        async session({ session, token }) {
            session.user.type = token.type
            return session;
        },

    }
}

let users = [
    {
        email: 'sakib@shishir.com',
        type: 'admin',
        password: '123asd',
        name: 'Sakib',
        image: 'https://www.parliament.gov.bd/mps/012009101.jpg',
        id: 1
    },
    {
        email: 'shishir@sakib.com',
        password: '123asd',
        name: 'Shishir',
        id: 2,
        type: 'admin'
    },
    {
        email: 'pori@gmail.com',
        password: 'password',
        name: 'Pori Moni',
        id: 3,
        type: 'admin'
    },
    {
        email: 'sabila@noor.com',
        password: '123asd',
        name: 'Sabila Noor',
        id: 4,
        image: 'https://www.imdb.com/name/nm7132294/mediaviewer/rm2510881537/?ref_=nm_ov_ph',
        type: 'admin'
    },
    {
        email: 'tasniya@farin.com',
        password: '123asd',
        name: 'Tasniya',
        id: 5,
        type: 'admin'
    },
    {
        email: 'samira@mahi.com',
        password: 'mahi',
        name: 'Mahi',
        id: 6,
        type: 'admin'
    },
    {
        email: 'mahiya@mahi.com',
        password: '123asd',
        name: 'Mahiya',
        id: 7,
        type: 'admin'
    },
    {
        email: 'sadiya@ayman.com',
        password: '123asd',
        name: 'Sadiya',
        id: 8,
        type: 'admin'
    },
    {
        email: 'tanjin@tisha.com',
        password: '123asd',
        name: 'Tanjin',
        id: 9,
        type: 'admin'
    },

]


const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }








