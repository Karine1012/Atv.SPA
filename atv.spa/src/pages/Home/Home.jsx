import Card from '../../components/Card/Card';
import styles from './Home.module.css';

function Home() {
  const destaques = [
    { id: 1, t: "Destaque do dia", d: "Garanta o seu antes que acabe!" },
    { id: 2, t: "Promoção Especial", d: "Ofertas imperdíveis por tempo limitado!" },
    { id: 3, t: "Produto Premium", d: "Experimente essa delícia irresistível!" }
  ];

  return (
    <section className={styles.homeContainer}>
      <h1>Bem-vindo ao Pity'kas Doces 🌸</h1>
      <p>Quando o doce é feito com amor, cada mordida é uma experiência única.</p>
      <div className={styles.grid}>
        {destaques.map(item => (
          <Card key={item.id} titulo={item.t} descricao={item.d} />
        ))}
      </div>
    </section>
  );
}
export default Home;
