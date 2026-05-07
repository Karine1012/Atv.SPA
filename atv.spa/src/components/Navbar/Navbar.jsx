import styles from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Pity'kas</div>
      <ul className={styles.links}>
        <li><a href="/">Home</a></li>
        <li><a href="/sobre">Sobre</a></li>
        <li><a href="/produtos">Produtos</a></li>
        <li><a href="/contato">Contato</a></li>
        <li><a href="/extra">Equipe</a></li>
      </ul>
    </nav>
  );
}
export default Navbar;
