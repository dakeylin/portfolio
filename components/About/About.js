import Reveal from "../utils/Reveal";
import { SectionTitle } from "../sectionTitle/SectionTitle";
import styles from "./about.module.scss";
import { Stats } from "./Stats";
import Link from "next/link";
import { AiOutlineArrowRight, AiFillGithub } from "react-icons/ai";
import { SlSocialVkontakte } from "react-icons/sl";
import { TbBrandTelegram } from "react-icons/tb";
import { CgMail } from "react-icons/cg";

export default function About() {
  return (
    <section id="about" className="section-wrapper">
      <SectionTitle title="О себе" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              Мне 25&nbsp;лет. За&nbsp;годы своей трудовой деятельности
              я&nbsp;занимался работой менеджера по&nbsp;работе с&nbsp;клиентом,
              &nbsp;менеджера проектов по&nbsp;внедрению 1С&nbsp;ERP,
              а&nbsp;также работой монтажника промышленных систем вентиляции
              и&nbsp;кондиционирования. В&nbsp;течение последних нескольких лет
              я&nbsp;работаю как индивидуальный предприниматель, реализуя
              проекты по&nbsp;проектированию и&nbsp;монтажу инженерных систем.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              Я&nbsp;может быть и&nbsp;не&nbsp;так опытен,
              но&nbsp;я&nbsp;человек, который понимает что эта работа нужна
              именно мне, а&nbsp;значит у&nbsp;меня нет никакого интереса просто
              отсидеться в&nbsp;офисе.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
              От&nbsp;будущей работы для меня наиболее важно получить новый опыт
              в&nbsp;интересных проектах, ценные советы от&nbsp;старших коллег,
              а&nbsp;так&nbsp;же возможность дорасти
              до&nbsp;высококвалифицированного сотрудника!
            </p>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>Ссылки</span>
                <AiOutlineArrowRight />
                <div className={styles.linkIcon}>
                  <Link href="https://vk.com/d_cmd" target="_blank">
                    <SlSocialVkontakte size="2.4rem" />
                  </Link>
                  <Link href="https://github.com/dakeylin" target="_blank">
                    <AiFillGithub size="2.4rem" />
                  </Link>
                  <Link href="https://t.me/dakeylin" target="_blank">
                    <TbBrandTelegram size="2.4rem" />
                  </Link>
                  <Link href="mailto:dakeylin@gmail.com" target="_blank">
                    <CgMail size="2.4rem" />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
}
