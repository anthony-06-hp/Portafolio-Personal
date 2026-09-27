
const skills = [ 
 
    { 
        name: "HTML5", 
        category: "frontend", 
        icon: "HTML", 
        level: "En desarrollo", 
        description: 
            "Estructuración semántica, formularios, accesibilidad y organización de páginas web." 
    }, 
 
    { 
        name: "CSS3", 
        category: "frontend", 
        icon: "CSS", 
        level: "En desarrollo", 
        description: 
            "Diseño responsive, Flexbox, Grid, variables CSS y organización de estilos." 
    }, 
 
    { 
        name: "JavaScript", 
        category: "frontend", 
        icon: "JS", 
        level: "En desarrollo", 
        description: 
            "Manipulación del DOM, eventos, validaciones, localStorage e interactividad." 
    }, 
 
    { 
        name: "Python", 
        category: "backend", 
        icon: "PY", 
        level: "En desarrollo", 
        description: 
            "Programación y desarrollo de proyectos académicos y aplicaciones." 
    }, 
 
    { 
        name: "Django", 
        category: "backend", 
        icon: "DJ", 
        level: "En desarrollo", 
        description: 
            "Desarrollo web, autenticación, registro de usuarios y manejo básico de sesiones." 
    }, 
 
    { 
        name: "MySQL", 
        category: "database", 
        icon: "SQL", 
        level: "En desarrollo", 
        description: 
            "Consultas, modelado y trabajo con bases de datos relacionales." 
    }, 
 
    { 
        name: "PostgreSQL", 
        category: "database", 
        icon: "PG", 
        level: "En desarrollo", 
        description: 
            "Modelado, consultas y gestión de bases de datos relacionales." 
    }, 
 
    { 
        name: "AWS", 
        category: "cloud", 
        icon: "AWS", 
        level: "Aprendiendo", 
        description: 
            "Experiencia académica con EC2, RDS y fundamentos de despliegue en la nube." 
    }, 
 
    { 
        name: "Git y GitHub", 
        category: "tools", 
        icon: "GIT", 
        level: "En desarrollo", 
        description: 
            "Control de versiones, repositorios y organización del código." 
    }, 
 
    { 
        name: "Visual Studio Code", 
        category: "tools", 
        icon: "VS", 
        level: "Uso habitual", 
        description: 
            "Entorno utilizado habitualmente para desarrollar, probar y organizar proyectos." 
    }, 
 
    { 
        name: "Microsoft Excel", 
        category: "tools", 
        icon: "XLS", 
        level: "Uso práctico", 
        description: 
            "Organización de datos, registros, tablas, filtros y elaboración de reportes básicos." 
    }, 
 
    { 
        name: "Microsoft Office", 
        category: "tools", 
        icon: "OFF", 
        level: "Uso habitual", 
        description: 
            "Uso de Word, Excel y PowerPoint para documentos, informes, presentaciones y trabajos académicos." 
    }, 
 
    { 
        name: "Notion", 
        category: "tools", 
        icon: "NOT", 
        level: "Uso práctico", 
        description: 
            "Organización de información, apuntes, tareas, proyectos y planificación personal." 
    } 
 
]; 

 
const projects = [ 
 
    { 
        id: 1, 
 
        title: "Aplicación de Notas", 
 
        category: "web", 
 
        categoryLabel: "Aplicación Web", 
 
        description: 
            "Aplicación web para crear, editar, organizar y eliminar notas de forma sencilla desde el navegador.", 
 
        problem: 
            "Necesidad de contar con una herramienta sencilla para registrar información y mantener notas organizadas desde una interfaz web.", 
 
        image: "assets/images/aplicacion_de_notas.png", 
 
        technologies: [ 
            "HTML5", 
            "CSS3", 
            "JavaScript" 
        ], 
 
        github: "https://github.com/anthony-06-hp/Mynotes-app.git",

        demo: "#"
    },


    {
        id: 2,

        title: "Aplicación de Cuestionarios",

        category: "web",

        categoryLabel: "Aplicación Web",

        description:
            "Aplicación interactiva de cuestionarios que permite presentar preguntas, seleccionar respuestas y mostrar los resultados obtenidos.",

        problem:
            "Crear una herramienta interactiva que permita practicar conocimientos mediante preguntas y respuestas, manteniendo una estructura que pueda ampliarse con nuevos cuestionarios.",

        image: "assets/images/aplicacion_de_cuestionarios.png",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "DOM"
        ],

        github: "https://github.com/anthony-06-hp/Devquiz-app.git",

        demo: "#"
    },


    {
        id: 3,

        title: "Aplicación de Lista de Tareas",

        category: "web",

        categoryLabel: "Aplicación Web",

        description:
            "Aplicación web para registrar tareas, marcarlas como completadas y mantener una lista organizada de actividades.",

        problem:
            "Gestionar actividades mediante una interfaz sencilla que permita agregar, completar y eliminar tareas de manera rápida.",

        image: "assets/images/aplicacion_de_lista_de_tareas.png",

        technologies: [
            "HTML5",
            "CSS3",
            "JavaScript"
        ],

        github: "https://github.com/anthony-06-hp/Taskflow-app.git",

        demo: "#"
    }

];

const html = document.documentElement;
const body = document.body;

const navToggle = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

const themeToggle = document.querySelector("#theme-toggle");
const themeIcon = document.querySelector("#theme-icon");

const skillsGrid = document.querySelector("#skills-grid");
const skillFilters = document.querySelectorAll(".skill-filter");

const projectsGrid = document.querySelector("#projects-grid");
const projectFilters = document.querySelectorAll(".project-filter");

const projectModal = document.querySelector("#project-modal");
const modalClose = document.querySelector("#modal-close");
const modalImage = document.querySelector("#modal-image");
const modalCategory = document.querySelector("#modal-category");
const modalTitle = document.querySelector("#modal-title");
const modalDescription = document.querySelector("#modal-description");
const modalProblem = document.querySelector("#modal-problem");
const modalTechnologies = document.querySelector("#modal-technologies");
const modalGithub = document.querySelector("#modal-github");
const modalDemo = document.querySelector("#modal-demo");

const contactForm = document.querySelector("#contact-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

const formStatus = document.querySelector("#form-status");

const backToTop = document.querySelector("#back-to-top");
const siteHeader = document.querySelector("#site-header");
const currentYear = document.querySelector("#current-year");


function setActiveButton(buttons, currentButton) {

    buttons.forEach((button) => {
        button.classList.remove("is-active");
    });

    currentButton.classList.add("is-active");
}


function closeNavigation() {

    navMenu?.classList.remove("is-open");

    navToggle?.setAttribute(
        "aria-expanded",
        "false"
    );

    navToggle?.setAttribute(
        "aria-label",
        "Abrir menú"
    );
}


navToggle?.addEventListener("click", () => {

    const isOpen = navMenu.classList.toggle("is-open");

    navToggle.setAttribute(
        "aria-expanded",
        String(isOpen)
    );

    navToggle.setAttribute(
        "aria-label",
        isOpen
            ? "Cerrar menú"
            : "Abrir menú"
    );

});


navLinks.forEach((link) => {

    link.addEventListener(
        "click",
        closeNavigation
    );

});


document.addEventListener("click", (event) => {

    if (
        navMenu?.classList.contains("is-open") &&
        !navMenu.contains(event.target) &&
        !navToggle.contains(event.target)
    ) {

        closeNavigation();

    }

});



function applyTheme(theme) {

    const validTheme =
        theme === "light"
            ? "light"
            : "dark";

    html.dataset.theme = validTheme;

    const isLight =
        validTheme === "light";

    themeIcon.textContent =
        isLight
            ? "☾"
            : "☼";

    themeToggle.setAttribute(
        "aria-label",
        isLight
            ? "Cambiar a tema oscuro"
            : "Cambiar a tema claro"
    );

    themeToggle.setAttribute(
        "aria-pressed",
        String(isLight)
    );

    localStorage.setItem(
        "portfolio-theme",
        validTheme
    );
}


function initializeTheme() {

    const savedTheme =
        localStorage.getItem(
            "portfolio-theme"
        );

    if (savedTheme) {

        applyTheme(savedTheme);

        return;
    }


    const prefersLight =
        window.matchMedia(
            "(prefers-color-scheme: light)"
        ).matches;


    applyTheme(
        prefersLight
            ? "light"
            : "dark"
    );
}


themeToggle?.addEventListener(
    "click",
    () => {

        const currentTheme =
            html.dataset.theme;

        applyTheme(
            currentTheme === "dark"
                ? "light"
                : "dark"
        );

    }
);


initializeTheme();


function renderSkills(filter = "all") {

    if (!skillsGrid) return;


    const filteredSkills =
        filter === "all"
            ? skills
            : skills.filter(
                (skill) =>
                    skill.category === filter
            );


    skillsGrid.innerHTML =
        filteredSkills
            .map(
                (skill) => `

                    <article class="skill-card">

                        <div class="skill-top">

                            <span
                                class="skill-icon"
                                aria-hidden="true"
                            >
                                ${skill.icon}
                            </span>

                            <span class="skill-level">
                                ${skill.level}
                            </span>

                        </div>


                        <h3>
                            ${skill.name}
                        </h3>


                        <p>
                            ${skill.description}
                        </p>


                        <span class="skill-category">
                            ${getCategoryLabel(skill.category)}
                        </span>

                    </article>

                `
            )
            .join("");
}


function getCategoryLabel(category) {

    const labels = {

        frontend: "Frontend",

        backend: "Backend",

        database: "Bases de datos",

        cloud: "Cloud",

        tools: "Herramientas"

    };


    return labels[category] || category;
}


skillFilters.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            setActiveButton(
                skillFilters,
                button
            );

            renderSkills(
                button.dataset.skillFilter
            );

        }
    );

});


renderSkills();


function renderProjects(filter = "all") {

    if (!projectsGrid) return;


    const filteredProjects =
        filter === "all"
            ? projects
            : projects.filter(
                (project) =>
                    project.category === filter
            );


    projectsGrid.innerHTML =
        filteredProjects
            .map(
                (project) => `

                    <article
                        class="project-card reveal is-visible"
                    >

                        <figure class="project-image">

                            <img
                                src="${project.image}"
                                alt="Vista previa del proyecto ${project.title}"
                                loading="lazy"
                            >


                            <figcaption class="project-overlay">

                                <span class="project-category">
                                    ${project.categoryLabel}
                                </span>

                            </figcaption>

                        </figure>


                        <div class="project-content">

                            <h3>
                                ${project.title}
                            </h3>


                            <p>
                                ${project.description}
                            </p>


                            <div class="tag-list">

                                ${project.technologies
                                    .map(
                                        (tech) =>
                                            `<span class="tag">${tech}</span>`
                                    )
                                    .join("")}

                            </div>


                            <div class="project-footer">

                                <div class="project-links">

                                    <a
                                        class="project-link"
                                        href="${project.github}"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        GitHub ↗
                                    </a>


                                    ${
                                        project.demo !== "#"
                                            ? `
                                                <a
                                                    class="project-link"
                                                    href="${project.demo}"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Demo ↗
                                                </a>
                                            `
                                            : ""
                                    }

                                </div>


                                <button
                                    class="details-btn"
                                    type="button"
                                    data-project-id="${project.id}"
                                >
                                    Detalles
                                </button>

                            </div>

                        </div>

                    </article>

                `
            )
            .join("");


    projectsGrid
        .querySelectorAll(
            "[data-project-id]"
        )
        .forEach((button) => {

            button.addEventListener(
                "click",
                () => {

                    openProjectModal(
                        Number(
                            button.dataset.projectId
                        )
                    );

                }
            );

        });

}


projectFilters.forEach((button) => {

    button.addEventListener(
        "click",
        () => {

            setActiveButton(
                projectFilters,
                button
            );

            renderProjects(
                button.dataset.projectFilter
            );

        }
    );

});


renderProjects();


function openProjectModal(projectId) {

    const project =
        projects.find(
            (item) =>
                item.id === projectId
        );


    if (
        !project ||
        !projectModal
    ) {

        return;
    }


    modalImage.src =
        project.image;

    modalImage.alt =
        `Imagen del proyecto ${project.title}`;


    modalCategory.textContent =
        project.categoryLabel;


    modalTitle.textContent =
        project.title;


    modalDescription.textContent =
        project.description;


    modalProblem.textContent =
        project.problem;


    modalTechnologies.innerHTML =
        project.technologies
            .map(
                (tech) =>
                    `<span class="tag">${tech}</span>`
            )
            .join("");


    modalGithub.href =
        project.github;


    if (
        project.demo === "#"
    ) {

        modalDemo.style.display =
            "none";

    } else {

        modalDemo.style.display =
            "inline-flex";

        modalDemo.href =
            project.demo;

    }


    projectModal.showModal();

    body.classList.add(
        "modal-open"
    );

    modalClose.focus();
}


function closeProjectModal() {

    projectModal?.close();

    body.classList.remove(
        "modal-open"
    );
}


modalClose?.addEventListener(
    "click",
    closeProjectModal
);


projectModal?.addEventListener(
    "click",
    (event) => {

        if (
            event.target ===
            projectModal
        ) {

            closeProjectModal();

        }

    }
);


document.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key === "Escape" &&
            projectModal?.open
        ) {

            closeProjectModal();

        }

    }
);


function getFieldError(fieldId) {

    return document.querySelector(
        `#${fieldId}-error`
    );
}


function showFieldError(
    fieldId,
    message
) {

    const field =
        document.querySelector(
            `#${fieldId}`
        );


    const error =
        getFieldError(fieldId);


    field
        ?.closest(".form-field")
        ?.classList.add(
            "has-error"
        );


    field
        ?.closest(".form-field")
        ?.classList.remove(
            "has-success"
        );


    if (error) {

        error.textContent =
            message;

    }

}


function clearFieldError(
    fieldId
) {

    const field =
        document.querySelector(
            `#${fieldId}`
        );


    const error =
        getFieldError(fieldId);


    field
        ?.closest(".form-field")
        ?.classList.remove(
            "has-error"
        );


    field
        ?.closest(".form-field")
        ?.classList.remove(
            "has-success"
        );


    if (error) {

        error.textContent =
            "";

    }

}


function showFieldSuccess(
    fieldId
) {

    const field =
        document.querySelector(
            `#${fieldId}`
        );


    field
        ?.closest(".form-field")
        ?.classList.remove(
            "has-error"
        );


    field
        ?.closest(".form-field")
        ?.classList.add(
            "has-success"
        );

}


function validateName(name) {

    if (!name) {

        return "El nombre es obligatorio.";

    }


    if (name.length < 2) {

        return "El nombre debe tener al menos 2 caracteres.";

    }


    if (name.length > 60) {

        return "El nombre no puede superar los 60 caracteres.";

    }


    const namePattern =
        /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s'-]+$/;


    if (!namePattern.test(name)) {

        return "El nombre contiene caracteres no válidos.";

    }


    return "";
}


function validateEmail(email) {

    if (!email) {

        return "El correo electrónico es obligatorio.";

    }


    if (email.length > 120) {

        return "El correo no puede superar los 120 caracteres.";

    }


    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;


    if (!emailPattern.test(email)) {

        return "Introduce un correo electrónico válido.";

    }


    return "";
}


function validateSubject(subject) {

    if (!subject) {

        return "";
    }


    if (subject.length < 3) {

        return "El asunto debe tener al menos 3 caracteres.";

    }


    if (subject.length > 100) {

        return "El asunto no puede superar los 100 caracteres.";

    }


    return "";
}


function validateMessage(message) {

    if (!message) {

        return "El mensaje es obligatorio.";

    }


    if (message.length < 10) {

        return "El mensaje debe tener al menos 10 caracteres.";

    }


    if (message.length > 1000) {

        return "El mensaje no puede superar los 1000 caracteres.";

    }


    return "";
}


function validateContactForm() {

    let isValid = true;


    const name =
        nameInput.value.trim();


    const email =
        emailInput.value.trim();


    const subject =
        subjectInput.value.trim();


    const message =
        messageInput.value.trim();


    [
        "name",
        "email",
        "subject",
        "message"
    ].forEach(clearFieldError);


    const nameError =
        validateName(name);


    if (nameError) {

        showFieldError(
            "name",
            nameError
        );

        isValid = false;

    } else {

        showFieldSuccess(
            "name"
        );

    }

    const emailError =
        validateEmail(email);


    if (emailError) {

        showFieldError(
            "email",
            emailError
        );

        isValid = false;

    } else {

        showFieldSuccess(
            "email"
        );

    }

    const subjectError =
        validateSubject(subject);


    if (subjectError) {

        showFieldError(
            "subject",
            subjectError
        );

        isValid = false;

    } else if (subject) {

        showFieldSuccess(
            "subject"
        );

    }

    const messageError =
        validateMessage(message);


    if (messageError) {

        showFieldError(
            "message",
            messageError
        );

        isValid = false;

    } else {

        showFieldSuccess(
            "message"
        );

    }


    return isValid;
}

[nameInput, emailInput, subjectInput, messageInput]
    .filter(Boolean)
    .forEach((field) => {

        field.addEventListener(
            "input",
            () => {

                const fieldId =
                    field.id;


                clearFieldError(
                    fieldId
                );


                if (
                    formStatus
                ) {

                    formStatus.textContent =
                        "";

                    formStatus.className =
                        "form-status";

                }

            }
        );

    });

contactForm?.addEventListener(
    "submit",
    (event) => {

        event.preventDefault();


        formStatus.textContent =
            "";

        formStatus.className =
            "form-status";


        const isValid =
            validateContactForm();


        if (!isValid) {

            formStatus.textContent =
                "Revisa los campos marcados antes de continuar.";

            formStatus.classList.add(
                "error"
            );

            const firstError =
                contactForm.querySelector(
                    ".has-error input, .has-error textarea"
                );


            firstError?.focus();

            return;
        }

        formStatus.textContent =
            "Formulario validado correctamente. Los datos están listos para ser enviados.";

        formStatus.classList.add(
            "success"
        );


        contactForm.reset();


        [
            "name",
            "email",
            "subject",
            "message"
        ].forEach(
            clearFieldError
        );

    }
);

function updateHeader() {

    const isScrolled =
        window.scrollY > 30;


    siteHeader?.classList.toggle(
        "is-scrolled",
        isScrolled
    );
}


window.addEventListener(
    "scroll",
    updateHeader,
    {
        passive: true
    }
);


updateHeader();


function updateBackToTop() {

    backToTop?.classList.toggle(
        "is-visible",
        window.scrollY > 500
    );
}


window.addEventListener(
    "scroll",
    updateBackToTop,
    {
        passive: true
    }
);


updateBackToTop();


backToTop?.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        !entry.isIntersecting
                    ) {

                        return;
                    }


                    const activeId =
                        entry.target.id;


                    navLinks.forEach(
                        (link) => {

                            const isActive =
                                link.getAttribute(
                                    "href"
                                ) ===
                                `#${activeId}`;


                            link.classList.toggle(
                                "is-active",
                                isActive
                            );

                        }
                    );

                }
            );

        },
        {
            rootMargin:
                "-35% 0px -55% 0px",

            threshold: 0
        }
    );


sections.forEach(
    (section) =>
        sectionObserver.observe(
            section
        )
);

const revealElements =
    document.querySelectorAll(
        ".reveal"
    );


const revealObserver =
    new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(
                (entry) => {

                    if (
                        !entry.isIntersecting
                    ) {

                        return;
                    }


                    entry.target.classList.add(
                        "is-visible"
                    );


                    observer.unobserve(
                        entry.target
                    );

                }
            );

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(
    (element) =>
        revealObserver.observe(
            element
        )
);

if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}