import About from "./About.svelte";
import Contact from "./Contact.svelte";

const routes = [
    { name: "/", component: About },
    { name: "contact", component: Contact },
];

export { routes };