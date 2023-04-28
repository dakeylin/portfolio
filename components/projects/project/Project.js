import styles from "./project.module.scss";
import Image from "next/image";
import Reveal from "@/components/utils/Reveal";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Project({ setSelectedId, item }) {

  return (
    <li>
      <motion.div className={styles.projectImage} onClick={() => setSelectedId(item)}>
        <Image src={item.imgSrc} className={styles.img} />
      </motion.div>
      <div className={styles.projectCopy}>
        <Reveal width="100%">
          <div className={styles.projectTitle}>
            <h4>{item.title}</h4>
            <div className={styles.projectTitleLine} />

            <Link href={item.code} target="_blank" rel="nofollow">
              <AiFillGithub size="2.8rem" />
            </Link>

            <Link href={item.projectLink} target="_blank" rel="nofollow">
              <AiOutlineExport size="2.8rem" />
            </Link>
          </div>
        </Reveal>
        <Reveal>
          <div className={styles.projectTech}>{item.tech.join(" - ")}</div>
        </Reveal>
        <Reveal>
          <p className={styles.projectDescription}>
            {item.description}{" "}
            <span onClick={() => setSelectedId(item)}>Подробнее {">"}</span>
          </p>
        </Reveal>
      </div>
    </li>
  );
}
