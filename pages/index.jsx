
function Button() {
  return (
    <a href="https://sun.eduzz.com/655722" className="btn custom-btn my-4 mt-5">
      <span className="h2"> Quero me inscrever agora </span>
    </a>
  )
}

export default function Home() {

  const depoimentos = [
    {
      title: 'Alanderson Macedo',
      video: "https://www.youtube.com/embed/Fi7Dp4M-3m0?controls=0",
      description: "Alanderson Macedo - ex assistente administrativo em uma loja de móveis, ganhava R$1.500 reais por mês trabalhando 8 horas por dia, começou no mercado digital e hoje tem sua liberdade, com 2 meses de mercado lucrou + R$6 mil reais e pediu demissão do trabalho."
    },
    {
      title: 'Henrique',
      video: "https://player.vimeo.com/video/719827491?h=fd8e22ade1",
      description: "Letícia - com 19 anos ganha +20 mil reais todos os meses aplicando tudo o que aprendeu no treinamento quando começou era uma total iniciante que não entendia nada do mercado hoje é uma profissional"
    },
    {
      title: 'Talisom Jeimes',
      video: "https://www.youtube.com/embed/EnUHHNN75KM?controls=0",
      description: "Talisom - um aluno bem antigo que já fatura na internet desde 2019, quando começou no nosso treinamento hoje ganha, em média 3-10 mil reais por mês aplicando tudo o que aprendeu no treinamento"
    }
  ];

  const news = [
    "https://www.youtube.com/embed/0gvUOiVtfqQ?controls=0",
    "https://www.youtube.com/embed/YVDHnAEz7ic?controls=0",
    "https://www.youtube.com/embed/H5fMJEt83ic?controls=0",
  ]

  const images = [
    "https://static.wixstatic.com/media/40bd24_4c64382df1c54057a1981e2ae679fccd~mv2.jpeg/v1/fill/w_255,h_552,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202021-09-22%20at%2023_29_29.jpeg",
    "https://static.wixstatic.com/media/40bd24_eaafa3d2453e4281a7fa2edb5e6b09dd~mv2.jpeg/v1/fill/w_255,h_552,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202021-09-22%20at%2023_29_30%20(1).jpeg",
    "https://static.wixstatic.com/media/40bd24_bbf077ce98b3475c92bd6c20fb69060f~mv2.jpeg/v1/fill/w_255,h_552,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202021-09-22%20at%2023_29_30.jpeg",
  ]


  return (
    <main>
      <header className="py-4 back_header" >
        <div className="container">
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div style={{ width: "65%" }} className="mb-4">
              <h1 className="h2 text-center fw-bolder text-white">
                Descura o <span className="gold">Método exclusivo</span> que pessoas estão usando para ganhar 5 SALÁRIOS por mês através da INTERNET <span className="gold">começando do ABSOLUTO ZERO!</span>
              </h1>
            </div>
            <main className="ratio ratio-16x9 custom-box-shadow" style={{ width: "65%" }}>
              <iframe height="400" src="https://www.youtube.com/embed/N3inZpIfCbs?autoplay=1&controls=0" title="Vídeo principal de vendas"></iframe>
            </main>
            <Button />
          </div>
        </div>
      </header>
      <section className="py-4" style={{ backgroundColor: "#121214" }}>
        <h1 className="text-center fw-bolder gold">+17.000 Alunos</h1>
      </section>
      <section className="container py-4">
        <div className="row">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div>
              <h1 className="h4 text-center fw-bolder">
                O Método Turbo Digital foi feito para você! Não importa a sua idade, escolaridade ou experiência o objetivo do treinamento é justamente te ensinar, Absoluto zero até modo mais avançado!
              </h1>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-3 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://static.wixstatic.com/media/40bd24_290ea0deb2b74deea4ac9ee1b9f7c1d6~mv2.png/v1/crop/x_239,y_136,w_263,h_241/fill/w_251,h_230,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/WhatsApp%20Image%202021-09-24%20at%2021_35_39.png" alt="Imagem de um aluno" className="w-75 img-fluid custom-box-shadow p-3 rounded-circle" />
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 bg-black py-4">
        <h1 className="h1 gold text-center mb-5">Depoimentos dos Alunos</h1>
        <div className="d-flex flex-row justify-content-center flex-wrap gap-5">
          {depoimentos.map((depoimento, index) => (
            <article key={index} style={{ width: "400px" }} className="d-flex flex-column align-items-center gap-3">
              <h1 className="gold">
                {depoimento.title}
              </h1>
              <main className="d-flex flex-column align-items-center gap-3">
                <div className="ratio ratio-16x9 custom-box-shadow" style={{ width: "100%" }}>
                  <iframe src={depoimento.video} title={depoimento.title}></iframe>
                </div>
                <h2 className="h6 text-white fw-normal">{depoimento.description}</h2>
              </main>
            </article>
          ))}
        </div>
      </section>
      <section className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <div className="p-3 text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/images/brendo.jpg" alt="Imagem de um aluno" className="w-75 img-fluid custom-box-shadow rounded" />
            </div>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <div>
              <h1>Brendo Macedo</h1>
              <p>Aliás quem é Brendo Macedo? Atualmente tenho apenas 21 anos, e mesmo com pouca idade, já consegui conquistar diversos sonhos através do marketing Digital, Hoje tenho a liberdade de trabalhar quando quiser graças ao meu negócio online. Vim de uma família muito humilde da zona rural, morei na roça por 17 anos, lá trabalhei de catador de tomate, camelô e vendedor de porta em porta.</p>
              <p>Comecei a empreender as meus 18 anos, onde decidir começar no mercado digital em 2019. Com meus 19 anos fiz meus primeiros 100 mil reais, em 2020 em plena pandemia cheguei nos meus primeiros 300 mil reais faturados pela internet. Hoje estou quase chegando a 1 milhão de reais isso consegui através da internet, por meio do meu método ajudo pessoas a começarem um negócio na internet do zero igual eu comecei!! Hoje somos mais de 20 mil alunos através desse método.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-4 bg-black py-4">
        <h1 className="h1 gold text-center mb-5">Oque os jornais estão falando sobre o marketing digital</h1>
        <div className="d-flex flex-row justify-content-center flex-wrap gap-5">
          {news.map((paper, index) => (
            <main className="d-flex flex-column align-items-center gap-3" style={{ width: "33%" }} key={index}>
              <div className="ratio ratio-16x9 custom-box-shadow" style={{ width: "100%" }}>
                <iframe src={paper}></iframe>
              </div>
            </main>
          ))}
        </div>
      </section>
      <section className="py-4 py-4 text-center">
        <h1 className="h1 text-center mb-5">Nossos Afiliados</h1>
        <div className="d-flex flex-row justify-content-center flex-wrap gap-5">
          {images.map((paper, index) => <img key={index} src={paper} />)}
        </div>
        <Button />
      </section>
      <section className="py-4 py-4 bg-black text-center d-flex flex-column justify-content-center align-items-center border-bottom">
        <h1 className="h1 text-center mb-5 fw-900 gold">Como funciona o Turbo Digital por dentro?</h1>
        <main className="ratio ratio-16x9 custom-box-shadow" style={{ width: "65%" }}>
          <iframe height="400" src="https://www.youtube.com/embed/Qc9IR-1-xVc?controls=0" title="Vídeo principal de vendas"></iframe>
        </main>
        <p className="w-50 h5 text-white mt-3">Bom agora você já sabe oque precisa fazer para mudar sua vida, volte lá no WhatsApp e peça seu link de inscrição ou volte para o começo da página e se inscreva. Só volte se você tiver assistido toda a vídeo aula e olhado toda a página.</p>
        <Button />
      </section>
      <footer className="py-2 bg-black">
        <div className="container p-3">
          <div className="row g-3">
            <div className="col-md-6 text-white">
              <ul>
                <li>Declaração de Ganhos</li>
                <li>Política de Privacidade</li>
                <li>Termos de uso</li>
              </ul>
              CNPJ: 33.634.561/0001-00
            </div>
            <div className="col-md-6 text-white  d-flex flex-column justify-content-center align-items-center ">
              Nada nesse site é promessa ou garantia de resultado. Seus resultados dependem do seu esforço e dedicação.
            </div>
          </div>
        </div>
        <div className="col-12 text-center text-white border-top pt-2 mt-3">
          &copy; 2022 Turbo Digital
        </div>
      </footer>
    </main >
  )
}
