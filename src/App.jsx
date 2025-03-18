import './sass/app.sass'
import html from './img/html.png'
import css from './img/css.png'
import bootstrap from './img/bootstrap.png'
import javascript from './img/javascript.png'
import react from './img/react.png'
import python from './img/python.png'
import excel from './img/excel.png'
import scrum from './img/scrum.png'

function App() {

  return (
    <>
      <div className="container">
        <div className='blocoPrincipal'>
          <h1>AARON MAGALHÃES</h1>
          <h3>Engenharia de Software - FIAP ( 3° semestre )</h3>
        </div>

        <div className="row blocolinha">
          <div className="bloco1 col-md-6">
            <div>
              <p className='apresentacao'>Curso Engenharia de Software na FIAP, onde tive o contato com metodologias ágeis e ferramentas de desenvolvimento como:<b> Python | HTML | CSS | Bootstrap | JavaScript | Reactjs</b>. Ao decorrer do curso fui criando apego pelo desenvolvimento web e no momento estou buscando me aprimorar cada vez mais na área.</p>
            </div>

            <div>
              <h4 className='experiencia'>EXPERIÊNCIA</h4>
              <div className='card'>
                <p className='experiencia-titulo'>Currículo</p>
                <p className='experiencia-titulo'>Desenvolvedor  Front-End
                </p>
                <p>Fevereiro 2025</p>
                <h5>Projeto: <b>Currículo Profissional</b></h5>
                <ul>
                  <li className='item1'>Criei um currículo profissional com o intuito de aplicar o conhecimento que obtive na faculdade e contar um pouco de mim. 
                  </li>

                  <div className='row'>
                    <div className='col-md-6 linha-botao'>
                      <li className='item1'>TECNOLOGIAS: React | Sass | Bootstrap
                      </li>
                    </div>

                    <div className='col-md-6 linha-botao'>
                      <a className='link-projeto' href="#">Link do Projeto Currículo</a>
                    </div>
                  </div>
                </ul>
              </div>
              
              <div className='card secundario'>
                <p className='experiencia-titulo'>Projeto Alura</p>
                <p className='experiencia-titulo'>Desenvolvedor  Front-End
                </p>
                <p>Agosto 2024</p>
                <h5>Projeto: <b>Alura Books</b></h5>

                <ul>
                  <li className='item1'>Projeto de um site de livros realizado ao longo do curso de responsividade da Alura onde criei um layout mobile (428px) | tablet (1024px) | desktop (1728px)</li>
                  
                  <div className='row'>
                    <div className='col-md-6 linha-botao'>
                      <li className='item1'>TECNOLOGIAS: Html | css | SwiperJS</li>
                    </div>

                    <div className='col-md-6 linha-botao'>
                      <a className='link-projeto' href="https://alurabook-tan-rho.vercel.app/">Link do Pojeto Alura Books</a>
                    </div>
                  </div>
                </ul>
              </div>
            </div>
          </div>
            
          <div className="bloco2 col-md-5">
            <div>
              <h4 className='topico-contato'>LINKS DE CONTATO</h4>
              <ul>
                <li className='topico-contato-item'>GitHub: <a className='topico-contato-link' href="https://github.com/AaronSena">/AaronSena</a></li>

                <li className='topico-contato-item'><a className='topico-contato-link' href='https://www.linkedin.com/in/aaron-magalh%C3%A3es/'>Linkedin</a></li>

                <li className='topico-contato-item'>Contact: (71) 98893-0810</li>

                <li className='topico-contato-item'>Email: aaronmagalhaes1@gmail.com</li>
              </ul>

              <h4 className='topico-conhecimento'>CONHECIMENTO</h4>
              <p className='topico-conhecimento-item'>HTML <img className='topico-conhecimento-img' src={html} alt="imagem html 5" /></p>
              <p className='topico-conhecimento-item'>CSS <img className='topico-conhecimento-img' src={css} alt="imagem css"/></p>
              <p className='topico-conhecimento-item'>Bootstrap <img className='topico-conhecimento-img' src={bootstrap} alt="imagem bootstrap"/></p>
              <p className='topico-conhecimento-item'>JavaScript <img className='topico-conhecimento-img' src={javascript} alt="imagem javascript"/></p>
              <p className='topico-conhecimento-item'>React.js <img className='topico-conhecimento-img' src={react} alt="imagem react"/></p>
              <p className='topico-conhecimento-item'>python <img className='topico-conhecimento-img' src={python} alt="imagem python"/></p>
              <p className='topico-conhecimento-item'>Word | Excel <img className='topico-conhecimento-img' src={excel} alt="imagem excel"/></p>
              <p className='topico-conhecimento-item'>Metodologia Scrum <img className='topico-conhecimento-img' src={scrum} alt="imagem metodologias scrum"/></p>

              <h4 className='topico-educacao'>EDUCAÇÃO</h4>
              <p className='topico-educacao-titulo'>Bacharelado em Engenharia de Software | FIAP |</p>
              <p>Jan/2024 - Jul/2028</p>

              <p className='topico-educacao-titulo'>Alura Escola de Tecnologia</p>
              <ul>
                <li className='topico-educacao-item'>HTML e CSS: Flex box | Design responsivo | mobile-first</li>

                <li className='topico-educacao-item'>JavaScript: Lógica de programação com JavaScrip</li>
              </ul>

              <p className='topico-educacao-titulo'>Inglês</p>
              <ul>
                <li className='topico-educacao-item'>Escola Girassol - 6 anos - 11 anos</li>

                <li className='topico-educacao-item'>Cultura inglesa - 11 anos - 15 anos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
