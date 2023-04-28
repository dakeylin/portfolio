import styles from "./contacts.module.scss";
import { AiFillMail } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import Reveal from "../utils/Reveal";

export default function Contacts() {
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Контакты<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Для связи со&nbsp;мной вы&nbsp;можете написать мне на&nbsp;почту или
            позвонить! Вы&nbsp;также можете найти меня в&nbsp;{" "}
            <Link
              href="https://vk.com/d_cmd"
              target="_blank"
              rel="nofollow"
            >
              ВКонтакте
            </Link>{" "}
            или{" "}
            <Link href="https://t.me/dakeylin" target="_blank" rel="nofollow">
              Telegram
            </Link>{", "}
            если Вам так удобнее.
          </p>
        </Reveal>
        <Reveal width="100%">
          <Link href="tel:+79282892799">
            <div className={styles.contactEmail}>
              <BsFillTelephoneFill size="2.4rem" />
              <span>+7 (928) 289 27 99</span>
            </div>
          </Link>
          <Link href="mailto:dakeylin@gmail.com">
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>dakeylin@gmail.com</span>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
