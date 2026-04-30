import styles from './Produtos.module.css';

function Produtos() {
  const listaProdutos = [
    { id: 1, nome: "Cones Trufados", desc: "Deliciosos cones trufados, otimo para degustar.", foto:"https://mail.google.com/mail/u/0?ui=2&ik=95a1e13bbc&attid=0.1&permmsgid=msg-f:1863917551282564420&th=19ddf7232ed02d44&view=fimg&fur=ip&permmsgid=msg-f:1863917551282564420&sz=s0-l75-ft&attbid=ANGjdJ-qCch2yl1LgFvEBddUd9q9Eh-jfEkix6F2oiRZYzKeJU4og_F8KYwp3zFgxjL9-EEoGEKQR6R8LIC_cHgnS_33s2VW8nTLjtRb7Zq8Fi7KJejC90Nma8ngNy4&disp=emb&realattid=7F613720-A313-4361-8597-FF175DD96103&zw"},
    { id: 2, nome: "Morangos Do Amor", desc: "Morangos frescos e saborosos, perfeitos para sobremesas.",  foto: "https://mail.google.com/mail/u/0?ui=2&ik=95a1e13bbc&attid=0.1&permmsgid=msg-f:1863915416846375095&th=19ddf532388098b7&view=fimg&fur=ip&permmsgid=msg-f:1863915416846375095&sz=s0-l75-ft&attbid=ANGjdJ--PTSxXhYn7eEotMGns3VnY47A9wsUEPD_mDef1WyGUITnbCNbOkI7oK45xxBy2Q24utnBZQyURek6dkBUCU1a7unbx_bvSs8hV_2nPbTQBzWVRZSM9FM-WUA&disp=emb&realattid=C2B7ADAA-3E75-4E60-A7E4-B8A6BBBD8CF8&zw"},
    { id: 3, nome: "Copo da Felicidade", desc: "Um lindo doce para presentear.", foto: "https://mavalerio.com.br/wp-content/uploads/2020/11/Copo-da-Felicidade.jpg"},
    { id: 4, nome: "Brownie Recheado", desc: "Cada mordida, uma explosão de sabor.", foto:"https://mail.google.com/mail/u/0?ui=2&ik=95a1e13bbc&attid=0.1&permmsgid=msg-f:1863917656522221670&th=19ddf73baf95e866&view=fimg&fur=ip&permmsgid=msg-f:1863917656522221670&sz=s0-l75-ft&attbid=ANGjdJ8fMHzFuWcJTonq1imNF0PazgMau2jenCJOr7JKARpMZPzZ7CX3bxvobKyIap8ts5XsvmRZVPHd6wjwBvLMHGPsa5DHtD2L0NTF3Jo12eg7yq-MYzvGWCRosDU&disp=emb&realattid=A0A03136-5504-4847-B92D-5414DB72EF4E&zw"}
  ];

  return (
    <section>
      <h1>Nossos Produtos</h1>
      <div className={styles.lista}>
        {listaProdutos.map(p => (
          <div key={p.id} className={styles.produtoCard}>
            <h3>{p.nome}</h3>
            <p>{p.desc}</p>
            <img className={styles.fotoProduto} src={p.foto} />
          </div>
        ))}
      </div>
    </section>
  );
}
export default Produtos;


