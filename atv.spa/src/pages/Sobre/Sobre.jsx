import styles from './Sobre.module.css';

function Sobre() {
  return (
    <section className={styles.container}>
      <h1>Sobre nós</h1>
      <p className={styles.descricao}>
        Somos uma loja que oferece produtos e serviços de qualidade.
      </p>
      <div className={styles.mvvGrid}>
        <div className={styles.item}>
          <h3>Missão</h3>
          <p>Buscamos, todos os dias, oferecer doces que vão além do sabor, proporcionando momentos especiais e cheios de amor.</p>
        </div>
        <div className={styles.item}>
          <h3>Visão</h3>
          <p>Ser uma doceria reconhecida por transformar pequenos momentos em grandes experiências.</p>
        </div>
        <div className={styles.item}>
          <h3>Valores</h3>
          <p>Qualidade, satisfação e amor pelo o que fazemos.</p>
        </div>
      </div>
    </section>
  );
}
export default Sobre;
