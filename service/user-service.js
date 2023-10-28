const urlProjects = "https://projects-api-gold.vercel.app/projects";

const listProjects = () => fetch(urlProjects).then(response => response.json());

export const userServices = {
    listProjects
}