const Header = ({ title, logo }) => {
  return (
    <div className="header">
      <img className="headerLogo" src={logo} />
      <h1 className="headerLabel" >
        {title}
      </h1>
    </div>
  )
}

Header.defaultProps = {
  title: '',
  logo: '',
}

export default Header
