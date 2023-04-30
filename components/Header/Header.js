import styles from "./header.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import {SlSocialVkontakte} from "react-icons/sl"
import {AiFillGithub} from "react-icons/ai"
import {TbBrandTelegram} from "react-icons/tb"
import {CgMail} from "react-icons/cg"

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.links}>
        <motion.span
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={styles.span}
        >
          <Link href="https://vk.com/d_cmd" target="_blank">
            <SlSocialVkontakte size="2.4rem"/>
          </Link>
        </motion.span>
        <motion.span
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={styles.span}
        >
          <Link href="https://github.com/dakeylin" target="_blank">
            <AiFillGithub size="2.4rem" />
          </Link>
        </motion.span>
        <motion.span
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={styles.span}
        >
          <Link href="https://t.me/dakeylin" target="_blank">
            <TbBrandTelegram size="2.4rem" />
          </Link>
        </motion.span>
        <motion.span
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className={styles.span}
        >
          <Link href="mailto:dakeylin@gmail.com" target="_blank">
            <CgMail size="2.4rem" />
          </Link>
        </motion.span>
      </div>
      <button className={styles.btn} onClick={() => window.open("/public/resume.pdf")}>Резюме</button>
    </header>
  );
}
