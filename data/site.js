const site = {
  name: 'Leonardo Marques',
  role: 'Computer Science | Researcher Scholar | Embedded Systems',
  location: 'Florianópolis, Brazil',
  lattes: 'http://lattes.cnpq.br/3648929450398886',
  linkedin: 'https://www.linkedin.com/in/leonardo-de-sousa-marques',
  about: {
    en: `Hi, I'm Leonardo de Sousa Marques! Computer Science undergraduate at UFSC, working as a research fellow in immersive visual systems compression at the Embedded Computing Laboratory. Currently doing an intership in Embedded Systems at Hexagon's Agriculture Solutions. Comitee member of ABNT/CB-021/CE 021 000 029 "Codificação de Áudio, Imagem, Multimídia e Hipermídia" and ISO/IEC JTC1/SC29/WG1 (JPEG) Standardization Committee.`,
    pt: `Olá, me chamo Leonardo de Sousa Marques! Estudante de Ciência da Computação na UFSC, bolsista de iniciação científica em mídias imersivas no Laboratório de Computação Embarcada. Atualmente realizo estágio em Sistemas Embarcados na Hexagon's Agricultre Solutions. Membro dos comitês ABNT/CB-021/CE 021 000 029 "Codificação de Áudio, Imagem, Multimídia e Hipermídia" e ISO/IEC JTC1/SC29/WG1 (JPEG) Standardization Committee.`
  },
  socials: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/leonardo-de-sousa-marques'},
    { label: 'GitHub', href: 'https://github.com/leonardosm14'},
    { label: 'GitLab', href: 'https://gitlab.com/leonardo.sm'},
    { label: 'Lattes', href: 'http://lattes.cnpq.br/3648929450398886'},
    { label: 'ORCID', href: 'https://orcid.org/0009-0007-4711-4426'},
    { label: 'IEEE Xplore', href: 'https://ieeexplore.ieee.org/author/349088634992121'}
  ],
  interests: {
    en: ['Image and Video Coding', 'Light Field Coding', 'Embedded Systems', 'Software/Hardware Development'],
    pt: ['Codificação de Imagem e Vídeo', 'Codificação de Light Fields', 'Sistemas Embarcados', 'Desenvolvimento de Software/Hardware']
  },
  experience: {
    en: [
      { title: 'Embedded Systems Test Analyst Intern, Hexagon', description: 'Software and Hardware in-the-loop testing and development.', date: '2026 – Present' },
      { title: 'Undergraduate Researcher, Embedded Computing Laboratory', description: 'Research in immersive visual systems and light field compression at the Embedded Computing Laboratory (ECL/UFSC).', date: '2025 – Present' },
      { title: 'Software Development Intern, Aprova Total', description: 'React, TypeScript, Python, MongoDB, AWS integrations, automation and technical documentation.', date: '2024 – 2025' },
      { title: 'Electrical and Electronical Projects Intern, Energiluz', description: 'Design of electrical systems and lighting projects in Santa Catarina.', date: '2022 – 2023' }
    ],
    pt: [
      { title: 'Estágio em Sistemas Embarcados, Hexagon', description: 'Software e Hardware in-the-loop teste e desenvolvimento.', date: '2026 – Present' },
      { title: 'Bolsista de Iniciação Científica, Laboratório de Computação Embarcada', description: 'Pesquisa em sistemas visuais imersivos e compressão de light fields.', date: '2025 – Atual' },
      { title: 'Estágio em Desenvolvimento de Software, Aprova Total', description: 'React, TypeScript, Python, MongoDB, integrações AWS, automações e documentação técnica.', date: '2024 – 2025' },
      { title: 'Estágio em Projetos Elétricos e Eletrônicos, Energiluz', description: 'Desenvolvimento de projetos elétricos e iluminação em Santa Catarina.', date: '2022 – 2023' }
    ]
  },
  contact: {
    en: 'Feel free to reach out by email or through the links above.',
    pt: 'Sinta-se à vontade para entrar em contato por e-mail ou pelos links acima.'
  },
  projects: {
    en: [
      {
        title: 'JPEG Pleno LFC Toolkit',
        description: 'Toolkit for Light Field Coding according to the JPEG Pleno Light Field Coding Common Test Conditions.',
        image: '/assets/jpeg-pleno-lfc-toolkit.png',
        url: 'https://gitlab.com/eclufsc/light-field-coding/jpeg-pleno-ctc-tools/'
      },
      {
        title: 'boxe.ml',
        description: 'Dectection and Classificaton of Boxe Punches with Machine Learning. University project for Computer Vision Class.',
        image: '/assets/boxe-ml.png',
        url: 'https://github.com/leonardosm14/boxe.ml'
      },
      {
        title: 'Interactive Graphic System',
        description: '2D and 3D interactive graphic system for lines, wireframes, curves, splines and other figures.',
        image: '/assets/sgi.png',
        url: 'https://github.com/leonardosm14/Interactive-Graphic-System'
      }
    ],
    pt: [
      {
        title: 'JPEG Pleno LFC Toolkit',
        description: 'Conjunto de ferramentas para codificação de light fields de acordo com as Condições de Teste Comum de Codificação de Light Field do JPEG Pleno.',
        image: '/assets/jpeg-pleno-lfc-toolkit.png',
        url: 'https://gitlab.com/eclufsc/light-field-coding/jpeg-pleno-ctc-tools/'
      },
      {
        title: 'boxe.ml',
        description: 'Detecção e classificação de golpes de boxe com aprendizado de máquina. Projeto universitário para a disciplina de Visão Computacional.',
        image: '/assets/boxe-ml.png',
        url: 'https://github.com/leonardosm14/boxe.ml'
      },
      {
        title: 'Interactive Graphic System',
        description: 'Sistema gráfico interativo 2D e 3D para linhas, wireframes, curvas, splines e outras figuras.',
        image: '/assets/sgi.png',
        url: 'https://github.com/leonardosm14/Interactive-Graphic-System'
      }
    ]
  },
  email: 'leosouzaam@hotmail.com'
};

export default site;
