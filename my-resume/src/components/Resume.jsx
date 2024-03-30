import { Component } from "react";
import Description from "./Description";
import Qualities from "./Qualities"
import Skills from "./Skills"
import Formation from "./Formation";
import ProfilePicture from "./ProfilePicture";
import { Col, Container, Row } from "react-bootstrap";
import PersonalInformation from "./PersonalInformation";
import ProfessionalXP from "./ProfessionalXP";

class Resume extends Component {

    state = {
        description: "As a Data expert, I help companies creating value through their data. I raise awareness among my colleagues regarding software quality through internal training sessions, mob programming, and code reviews. I use agile principles to lead projects iteratively, relying on the trial-and-error method.",
        formations: [
            {title: "Engineering school, Big Data speciality", school: "ENSAI", startYear: 2013, endYear: 2016, link: "http://www.ensai.fr"},
            {title: "BSc in Mathematics", school: "Université de Rennes 1", startYear: 2014, endYear: 2015, link: "https://www.univ-rennes.fr/"},
            {title: "Classes préparatoires aux Grandes Ecoles, MPSI/MP", school: "Alphonse Daudet", startYear: 2010, endYear: 2013, link: "https://alphonse-daudet-nimes.mon-ent-occitanie.fr/"},
            {title: "Baccalauréat Scientifique", school: "Jean Vilar", startYear: 2007, endYear: 2010, link: "https://jeanvilar.net/"},
        ],
        skills: [
            {skill: "Scala, Kafka, Spark", progress: "99"},
            {skill: "Airflow, AWS, Postgresql", progress: "90"},
            {skill: "Java, Python, Clojure", progress: "80"},
            {skill: "Terraform", progress: "70"},
        ],
        personnalInformation: {
            phone: "0612886872",
            email: "samy.zarour8430@gmail.com",
            links: [
                "http://github.com/zaroursamy",
                "http://szarour.wordpress.com",
            ]
        },
        experiences: [
            {jobTitle: "Senior Data Engineer",
             company: {name: "Kpler", link: "http://www.kpler.com"}, 
             from: "2022",
             to: "2024", 
             projects: [
                "Intégration de modèles des Data Scientists prédisant la composition de cargaisons de bateaux",
                "Création du' n nouveau produit permettant de visualiser les 4 plateformes de l'entreprise en une seule",
                "Développement from scratch d'une pipeline d'ingestion streaming de Bil of Ladings",
                "Mentoring de 4 Data Engineers et d'un Data Scientist"
             ]
            },
            {jobTitle: "Senior Data Engineer",
             company: {name: "Predictice", link: "http://www.predictice.com"}, 
             from: "2021",
             to: "2022", 
             projects: [
                "Intégration de multiples datasources juridiques dans le search engine (open data scraping, API, OCR)",                "Création du'n produit Data Quality permettant àl'humain de corriger les décisions de justice",
                "Optimisation des clusters Spark (monitoring, partitionnement, sizing...)",
                "Création de datalake et de datawarehouse",
                "Mentoring des équipes Data Engineer et Data Scientist: code review, mob programming, formations internes",
                "Participation à al création des OKR de l'équipe technique",
             ]
            },
            {jobTitle: "Software/Data Engineer",
             company: {name: "BeOp", link: "https://beop.io/"}, 
             from: "2019",
             to: "2021", 
             projects: [
                "Création d'un produit d'optimisation sémantique des campagnes publicitaires",
                "Création d'API affichant des KPI métiers (inventaire, dépenses, diffusion...)",
                "Création d'un webserver catégorisant les articles media (IAB)",
                "Optimisation du stockage des données dans le datawarehouse"
             ]
            },
            {jobTitle: "Data Engineer",
             company: {name: "Hawk", link: "https://hawk-tech.io/"},
             from: "2018",
             to: "2019", 
             projects: [
                "Développement d'ETL streaming et batch permettant d'alimenter/consommer le datalake et le datawarehouse",
                "Enrichissement des bid-request avec les segments utilisateurs",
                "Création d'un produit calculant les visites en magasin après exposition à une publicité"       
             ]
            }
        ],
        qualities: [
            "Pragmatic",
            "Perseverent",
            "Result oriented",
        ]
    }
    
    render(){

        return (
            <Container className="border" style={{marginBottom: "10px", marginTop: '10px', borderRadius: "10px", padding: "1em"}}>
                <Row>
                    <Col md={3}>
                        <ProfilePicture/>
                        <PersonalInformation information={this.state.personnalInformation}/>
                        <Skills skills={this.state.skills} />
                        <Qualities qualities={this.state.qualities}/>
                    </Col>

                    <Col md={9}>
                        <Container fluid className="border border-success border-2 justify-content-md-center" style={{marginBottom: "10px", marginTop: '10px', borderRadius: "10px", padding: "1em"}}>
                            <Description description={this.state.description} />
                            <Formation formations={this.state.formations} />
                            <ProfessionalXP experiences={this.state.experiences} />
                        </Container>           
                    </Col>
                </Row>
            </Container>
        
        )
    }
}


export default Resume