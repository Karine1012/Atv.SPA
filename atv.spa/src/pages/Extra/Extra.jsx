import styles from './Extra.module.css';
import foto1 from '../../assets/foto1.jpg';
import foto2 from '../../assets/foto2.jpg';

function Extra() {
    return (
        <section className={styles.equipe}>
            <h2>Nossa Equipe </h2>
            <p>❤️</p>
            <p>Conheça quem faz tudo acontecer</p>
            <div className={styles.membros}>
                <div className={styles.membro}>
                    <div>
                        <img src={foto1} alt="Karine Padilha" className={styles.fotoIntegrante} />
                    </div>
                    <h4>Karine Padilha</h4>
                    <p>Confeiteira</p>

                </div>
                <div className={styles.membro}>
                    <div>
                        <img
                            src={foto2}
                            alt="Ana Giulia Domingues"
                            className={styles.fotoIntegrante}
                        />
                    </div>
                    <h4>Ana Giulia Domingues</h4>
                    <p>Confeiteira</p>

                </div>
            </div>
        </section>
    );
}
export default Extra;
