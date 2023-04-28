import Reveal from "./../utils/Reveal";
import styles from "./hero.module.scss";
import {FaYoutube} from 'react-icons/fa'
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section className={`section-wrapper ${styles.hero}`}>
      <div className={styles.copyWrapper}>
        <Reveal>
          <h1 className={styles.title}>
          Привет, я&nbsp;Даниил<span>.</span>
          </h1>
        </Reveal>
        <Reveal>
          <h2 className={styles.subTitle}>
            <Typewriter
              options={{
              strings: [`I'm Web Developer`, `I'm React Developer`, `I'm Web Designer`],
              autoStart: true,
              loop: true,
              deleteSpeed:25,
              delay:50
              }}
            />
          </h2>
        </Reveal>
        <Reveal>
          <p className={styles.aboutCopy}>
          Первый опыт в&nbsp;Web разработке я&nbsp;получил в&nbsp;2019&nbsp;году, когда начал изучать HTML и&nbsp;CSS, чтобы воплотить свои проекты в&nbsp;жизнь, а&nbsp;также помочь знакомым и&nbsp;друзьям в&nbsp;их&nbsp;идеях. Последний год я&nbsp;активно углубился в&nbsp;изучение React, чтобы создавать уже более сложные и&nbsp;продвинутые проекты. Все знания я&nbsp;получил самостоятельно, из&nbsp;книг и&nbsp;октрытых уроках&nbsp;на <span className={styles.youtube}><FaYoutube size={25}/></span> 
          </p>
        </Reveal>
        <Reveal>
          <button
          onClick={() => document.getElementById("contact")?.scrollIntoView()}
          className={styles.btn}
          >
            Контакты
          </button>
        </Reveal>
      </div>
    </section>
  );
}
