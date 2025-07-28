import blog1 from "../assets/service2.jpg"
import blog2 from "../assets/service1.jpg"
import blog3 from "../assets/service3.jpg"
import blog4 from "../assets/service4.webp"
import blog5 from "../assets/imgMobile.jpg"

export type BlogCardsData = {
    img: string
    title: string
    description: string
    slug: string
}

export const blogCardsData: BlogCardsData[] = [
    {
        img: blog1,
        title: "PGRS - Plano de Gerenciamento de Resíduos Sólidos",
        description:
            "O Plano de Gerenciamento de Resíduos Sólidos (PGRS) é um documento técnico que descreve o conjunto de medidas voltadas para o manejo adequado dos resíduos gerados por uma atividade ou empreendimento, desde a geração até a disposição final ambientalmente adequada.",
        slug: "/service/pgrs",
    },
    {
        img: blog2,
        title: "MTR - Manifesto de Transporte de Resíduos ",
        description:
            "O Manifesto de Transporte de Resíduos (MTR) é um documento obrigatório que acompanha o transporte dos resíduos gerados pelas empresas, garantindo a rastreabilidade e o controle ambiental do destino final desses materiais.",
        slug: "/service/mtr",
    },
    {
        img: blog3,
        title: "Cadastro Técnico Federal ",
        description:
            "O Manifesto de Transporte de Resíduos (MTR) é um documento obrigatório que acompanha o transporte dos resíduos gerados pelas empresas, garantindo a rastreabilidade e o controle ambiental do destino final desses materiais.",
        slug: "/service/ctf",
    },
    {
        img: blog4,
        title: "Precend",
        description:
            "O PRECEND é um programa da Companhia de Saneamento de Minas Gerais (COPASA) que regulamenta o lançamento de efluentes não domésticos (como óleos, graxas, solventes, resíduos químicos e gorduras) nas redes coletoras de esgoto.",
        slug: "/service/precend",
    },
    {
        img: blog5,
        title: "PGR - Programa de Gerenciamento de Riscos",
        description:
            "O PGR (Programa de Gerenciamento de Riscos) é um documento obrigatório exigido pela NR-01, que tem como objetivo identificar, avaliar e controlar os riscos ocupacionais presentes nas atividades da empresa.",
        slug: "/service/pgr"
    },
    {
        img: blog5,
        title: "Licencialemento ambiental",
        description:
            "O PRECEND é um programa da Companhia de Saneamento de Minas Gerais (COPASA) que regulamenta o lançamento de efluentes não domésticos (como óleos, graxas, solventes, resíduos químicos e gorduras) nas redes coletoras de esgoto.",
        slug: "/service/licencialemento-ambiental",
    },
    {
        img: blog3,
        title: "AVCB – Auto de Vistoria do Corpo de Bombeiros",
        description:
            "O AVCB – Auto de Vistoria do Corpo de Bombeiros é o documento emitido pelo Corpo de Bombeiros Militar de Minas Gerais (CBMMG) que atesta que uma edificação possui as condições mínimas de segurança contra incêndio e pânico, conforme a legislação estadual vigente.",
        slug: "/service/avcb",
    },

]
