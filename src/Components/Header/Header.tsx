import React from "react";


const Header = ({title}: {title: string}) => {
    return <header>
        {title}
    </header>
}

Header.defaultProps = {
    title: "App Title"
}

export default Header;