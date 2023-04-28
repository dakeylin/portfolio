import styles from "./projectModal.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { AiFillGithub, AiOutlineExport } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { useEffect } from "react";

export default function ProjectModal({ selectedId, setSelectedId, isOpen, setIsOpen }) {

  // useEffect(() => {
  //   const body = document.querySelector("body");

  //   if (isOpen) {
  //     body.style.overflowY = "hidden";
  //   } else {
  //     body.style.overflowY = "scroll";
  //   }
  // }, [isOpen]);


  const closeModal = () => {
    setSelectedId(null);
    // setIsOpen(false);
  }

  return (
    <div className={styles.modal} onClick={() => closeModal()}>
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <Image
          className={styles.modalImage}
          src={selectedId.imgSrc}
          alt={`An image of the ${selectedId.title} project.`}
        />
        <div className={styles.modalContent}>
          <h4>{selectedId.title}</h4>
          <div className={styles.modalTech}>{selectedId.tech.join(" - ")}</div>

          <div className={styles.suppliedContent}>{selectedId.modalContent}</div>

          <div className={styles.modalFooter}>
            <p className={styles.linksText}>
              Ссылки на проект<span>.</span>
            </p>
            <div className={styles.links}>
              <Link target="_blank" rel="nofollow" href={selectedId.code}>
                <AiFillGithub /> source code
              </Link>
              <Link target="_blank" rel="nofollow" href={selectedId.projectLink}>
                <AiOutlineExport /> live project
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
