
    <section id="portfolio">
        <div class="hidden">

            <h2 class="slideIn ">Portfolio</h2>
            <div class="projects ">
                <div class="project-header">
                    <p>
                        Following projects showcase my skills and knowledge through real-world
                        examples of my work.
                        Every project is described in detail and includes a link to the source
                        code as well as a live
                        demo. It showcases my abilities in problem solving, working with
                        different technologies and
                        managing projects.
                    </p>
                </div>
                <div class="project ">
                    <img src="/images/Project1.png" alt="Project 1">
                    <h3 class="project-title">3D portfolio</h3>
                    <p class="project-desc">My other, more advanced portfolio website made with
                        interactive 3D models</p>
                </div>
                <div class="project ">
                    <img src="project2.jpg" alt="Project 2">
                    <h3 class="project-title">Project 2</h3>
                    <p class="project-desc">Project 2 description goes here.</p>
                </div>
            </div>
        </div>
    </section>

    #portfolio {
    text-align: center;
    color: var(--accent-color);
}

.projects {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 100px;
    margin-top: 40px;
}

.project {
    background-color: var(--primary-color);
    /* padding: 20px; */
    border: 2px solid var(--accent-color);
    border-radius: 4px;
    width: calc(33.333% - 20px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s;
}
.project:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
}

.project img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 4px;
    margin-bottom: 10px;
}

.project-title {
    font-size: 25px;
    font-weight: bold;
    color: var(--white);
    margin-bottom: 5px;
}

.project-desc {
    color: var(--white);
    font-size: 20px;
    margin-bottom: 10px;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    font-size: 30px;
}

.project-header p {
    margin: 0;
    font-size: 30px;
}

