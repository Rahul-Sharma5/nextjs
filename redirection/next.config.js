/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects:async()=>{
        return [
            //! Static Page Redirection
            {
                source:"/user",
                destination:'/',
                permanent: false
            },
            //! Dynamic Page Redirection
            {
                source:"/user/:userid",
                destination:'/',
                permanent: false
            },
            //! Multiple Page Redirection
            {
                source:"/admin",
                destination:'/',
                permanent: false
            }
        ]
    }
}

module.exports = nextConfig
