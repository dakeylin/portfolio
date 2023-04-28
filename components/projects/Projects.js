import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { projectList } from "./data";
import Project from "./project/Project";
import ProjectModal from "./projectModal/ProjectModal";
import styles from "./projects.module.scss";
import { SectionTitle } from "../sectionTitle/SectionTitle";

export default function Projects() {
  const [selectedId, setSelectedId] = useState(null);
  const [isOpen, setIsOpen] = useState(false);


  // className={styles.container}

  return (
    <section className={styles.container} id="projects">
      <SectionTitle title="Проекты" dir="r" />
      <ul className={styles.projects}>
        {projectList.map((item) => (
          <Project setSelectedId={setSelectedId} item={item} setIsOpen={setIsOpen}/>
        ))}
      </ul>
      <AnimatePresence>
        {selectedId && (
          <ProjectModal setSelectedId={setSelectedId} selectedId={selectedId} isOpen={isOpen} setIsOpen={setIsOpen}/>
        )}
      </AnimatePresence>
    </section>
  );
}
