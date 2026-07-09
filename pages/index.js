import { useMemo, useState } from 'react';
import site from '../data/site';
import publications from '../data/publications';

const navItems = ['home', 'publications', 'projects', 'contact'];

export default function Home() {
  const [locale, setLocale] = useState('en');
  const content = useMemo(
    () => ({
      en: {
        nav: ['Home', 'Publications', 'Projects', 'Contact'],
        intro: 'Hello! I am a computer science student and researcher focused on immersive visual systems compression.',
        interests: 'Interests',
        educationTitle: 'Education',
        experience: 'Experience',
        publications: 'Publications',
        projects: 'A Few Projects',
        contact: 'Contact',
        changeLang: 'Português',
        isoTitle: 'International Organization for Standardization (ISO) - Contributions',
        articleTitle: 'Articles & Pre-prints',
        presentationTitle: 'Presentations',
        projectSectionText: 'Portfolio projects from JPEG Pleno research to university systems.',
        contactText: 'Interested in collaborations, publications, or research discussions? Reach out anytime.',
        education: [
          {
            year: '2023 - current',
            description: 'Bachelor of Science degree in Computer Science.\nFederal University of Santa Catarina, UFSC, Brazil.'
          },
          {
            year: '2019 - 2023',
            description: 'Technical degree in Electrotechnics.\nFederal Institute of Santa Catarina, IFSC, Brazil.'
          }
        ]
      },
      pt: {
        nav: ['Início', 'Publicações', 'Projetos', 'Contato'],
        intro: 'Olá! Sou estudante de ciência da computação e pesquisador com foco em compressão de sistemas visuais imersivos.',
        interests: 'Interesses',
        educationTitle: 'Educação',
        experience: 'Experiência',
        publications: 'Publicações & Pre-prints',
        projects: 'Alguns Projetos',
        contact: 'Contato',
        changeLang: 'English',
        isoTitle: 'Organização Internacional para Padronização (ISO) - Contribuições',
        articleTitle: 'Artigos',
        presentationTitle: 'Apresentações',
        projectSectionText: 'Projetos de portfólio de pesquisa JPEG Pleno a sistemas universitários.',
        contactText: 'Interessado em colaborações, publicações ou discussões de pesquisa? Entre em contato.',
        education: [
          {
            year: '2023 - atual',
            description: 'Bacharelado em Ciência da Computação.\nUniversidade Federal de Santa Catarina, UFSC, Brasil.'
          },
          {
            year: '2019 - 2023',
            description: 'Técnico em Eletrotécnica.\nInstituto Federal de Santa Catarina, IFSC, Brasil.'
          }
        ]
      }
    }), []);

  const lang = content[locale];

  return (
    <div className="page">
      <header className="topbar">
        <div className="brand">
          <strong>{site.name}</strong>
          <span>{site.role}</span>
        </div>
        <nav>
          {navItems.map((item, index) => (
            <a key={item} href={`#${item}`}>{lang.nav[index]}</a>
          ))}
        </nav>
        <button className="langButton" onClick={() => setLocale(locale === 'en' ? 'pt' : 'en')}>
          {lang.changeLang}
        </button>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-text">
            <p className="eyebrow">{site.location}</p>
            <h1>{site.name}</h1>
            <p>{site.about[locale]}</p>
            <div className="chips">
              {site.interests[locale].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
            <div className="socials">
              <div className="socialRow">
                {site.socials.slice(0, 3).map((social) => (
                  <a key={social.href} href={social.href} target="_blank" rel="noreferrer noopener">
                    {social.label}
                  </a>
                ))}
              </div>
              <div className="socialRow">
                {site.socials.slice(3, 6).map((social) => (
                  <a key={social.href} href={social.href} target="_blank" rel="noreferrer noopener">
                    {social.label}
                  </a>
                ))}
              </div>
            </div>
            <h3>{lang.educationTitle}</h3>
            <div className="education">
              {lang.education.map((item) => (
                <div key={item.year}>
                  <strong>{item.year}</strong>
                  <p>{item.description.split('\n').map((line, index) => (
                    <span key={index}>
                      {line}
                      {index < item.description.split('\n').length - 1 ? <br /> : null}
                    </span>
                  ))}</p>
                </div>
              ))}
            </div>
            <h3>{lang.experience}</h3>
            <div className="experienceGrid">
              {site.experience[locale].map((item) => (
                <div key={item.title} className="experienceCard">
                  <strong>{item.title}</strong>
                  <span>{item.date}</span>
                  {item.description ? <p className="experienceDesc">{item.description}</p> : null}
                </div>
              ))}
            </div>
          </div>
          <div className="hero-photo">
            <img src="/assets/pic.jpeg" alt="Leonardo de Sousa Marques" />
          </div>
        </section>

        <section id="publications" className="section cardSection">
          <div className="sectionHeader">
            <h2>{lang.publications}</h2>
            <p>{locale === 'en' ? 'Selected research contributions, articles and presentations.' : 'Contribuições de pesquisa, artigos e apresentações selecionadas.'}</p>
          </div>

          <div className="cards">
            <article className="card">
              <h3>{lang.isoTitle}</h3>
              <ul>
                {publications.isoContributions.map((item) => (
                  <li key={item.title}>
                    <a href={item.url} target="_blank" rel="noreferrer noopener">{item.title}</a>
                    <p className="itemAuthors" dangerouslySetInnerHTML={{ __html: item.authors }} />
                    <small>{item.reference} · {item.year}</small>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card">
              <h3>{lang.articleTitle}</h3>
              <ul>
                {publications.articles.map((item) => (
                  <li key={item.title}>
                    <a href={item.url} target="_blank" rel="noreferrer noopener">{item.title}</a>
                    <p className="itemAuthors" dangerouslySetInnerHTML={{ __html: item.authors }} />
                    <small>{item.journal} · {item.year}</small>
                  </li>
                ))}
              </ul>
            </article>

            <article className="card">
              <h3>{lang.presentationTitle}</h3>
              <ul>
                {publications.presentations.map((item) => (
                  <li key={item.title}>
                    <strong>{item.title}</strong>
                    <p className="itemAuthors" dangerouslySetInnerHTML={{ __html: item.authors }} />
                    <small>{item.event} · {item.year}</small>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="sectionHeader">
            <h2>{lang.projects}</h2>
            <p>{locale === 'en' ? 'Work and research themes from academics to applied software.' : 'Temas de pesquisa e trabalho, da academia ao software aplicado.'}</p>
          </div>
          <div className="projectGrid">
            {site.projects[locale].map((project) => (
              <article key={project.title} className="projectCard">
                <div className="projectImageWrap">
                  <img src={project.image} alt={project.title} />
                </div>
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.url} target="_blank" rel="noreferrer noopener">{locale === 'en' ? 'More details' : 'Mais detalhes'}</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contactSection">
          <div className="sectionHeader">
            <h2>{lang.contact}</h2>
            <p>{lang.contactText}</p>
          </div>
          <div className="contactCard">
            <p>{site.contact[locale]}</p>
            <p><strong>Email</strong>: <a href={`mailto:${site.email}`}>{site.email}</a></p>
            <p><strong>Linkedin</strong>: <a href={site.linkedin} target="_blank" rel="noreferrer noopener">{site.linkedin}</a></p>
          </div>
        </section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} {site.name}</p>
      </footer>
    </div>
  );
}
