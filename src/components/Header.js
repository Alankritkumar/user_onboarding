const Header = ({title, logo}) => {
  return (
    <header>
      <h1 className="HeaderFont" >
        <span><img src={logo} /> </span>
        <span>{title}</span>
      </h1>
    </header>
  )
}

Header.defaultProps ={
title:'',
logo:'',
}

export default Header
