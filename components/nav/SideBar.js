import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";

export const SideBar = () => {
  const [selected, setSelected] = useState("");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const options = {
      threshold: 0.3,
    };

    const callback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setSelected(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    sections.forEach((section) => observer.observe(section));
  }, []);
  return (
    <motion.nav className={styles.list}>
      <motion.span
        className={styles.span}
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        Д<span className={styles.point}>.</span>
      </motion.span>
      <motion.a
        onClick={() => setSelected('about')}
        className={selected === 'about' ? styles.linkActive : styles.link}
        href="#about"
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
      >
        О себе
      </motion.a>
      <motion.a
        onClick={() => setSelected('projects')}
        className={selected === 'projects' ? styles.linkActive : styles.link}
        href="#projects"
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Проекты
      </motion.a>
      <motion.a
        onClick={() => setSelected('experience')}
        className={selected === 'experience' ? styles.linkActive : styles.link}
        href="#experience"
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Опыт
      </motion.a>
      <motion.a
        onClick={() => setSelected('contact')}
        className={selected === 'contact' ? styles.linkActive : styles.link}
        href="#contact"
        initial={{ x: -70 }}
        animate={{ x: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Контакты
      </motion.a>
    </motion.nav>
  );
};
