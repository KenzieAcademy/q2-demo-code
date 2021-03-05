import { Link } from 'react-router-dom'

const styles = {
  wrapper: {
    backgroundColor: 'lightgray',
    height: '60px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 10px'
  },
  logoSection: {
  },
  linkSection: {
  },
  link: {
    marginLeft: '10px'
  }
}

function TopNav() {
  return (
    <div style={styles.wrapper}>
      <div style={styles.logoSection}>
        Awesome Shop
      </div>
      <div style={styles.linkSection}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/store">Store</Link>
        <Link style={styles.link} to="/cart">Cart</Link>
      </div>
    </div>
  );
}

export default TopNav;
