import styles from './Extra.module.css';
import foto1 from '../../assets/foto1.jpg';
import foto2 from '../../assets/foto2.jpg';



function Extra() {
  return (
    <section className={styles.equipe}>
      <h1>Nossa Equipe</h1>
      <div className={styles.membros}>
        <div className={styles.membro}>
          <div className={styles.fotoPlaceholder1}>
            <img src={foto1} alt="Karine Padilha" />
          </div>
          <h4>Karine Padilha</h4>
          <p>Confeiteira</p>
        </div>
        <div className={styles.membro}>
          <div className={styles.fotoPlaceholder2}>
            <img src={foto2} alt="Ana Giulia Domingues" />
          </div>
          <h4>Ana Giulia Domingues</h4>
          <p>Confeiteira</p>
        </div>
      </div>
    </section>
  );
}
export default Extra;
