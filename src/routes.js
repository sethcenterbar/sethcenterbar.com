import About from "./About.svelte";
import Contact from "./Contact.svelte";
import Projects from "./Projects.svelte";

const routes = [
    { name: "/", component: About },
    { name: "contact", component: Contact },
    { name: "projects", component: Projects },
];

export { routes };