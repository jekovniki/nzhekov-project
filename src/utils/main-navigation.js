

const getNavigation = (username) => {
    const navLink = [
        {
            title: "Home",
            link: "/"
        },
        {
            title: "Team",
            link: "/team"
        },
        {
            title: "Profile",
            link: `/profile/${username}`
        },
        {
            title: "Services",
            link: "/services"
        },
        {
            title: "Blog",
            link: "/blog"
        },
        {
            title: "Sign Up",
            link: "/sign-up"
        },
        {
            title: "Sign In",
            link: "/sign-in"
        }
    
    ]
    return navLink
}

export default getNavigation