import example from "./../../public/projectImg/example-project.jpg";
import clivent from "./../../public/projectImg/clivent.jpg";
import furniture from "./../../public/projectImg/3.jpg";
import sneakers from "./../../public/projectImg/2.jpg";
import dino from "./../../public/projectImg/dino.jpg";


export const projectList = [
  {
    id: 1,
    title: "Кливент",
    imgSrc: clivent,
    code: "https://github.com/dakeylin",
    projectLink: "https://www.youtube.com/watch?v=2NIQ4_hpGP4",
    tech: ["React", "NextJS", "Frame-motion", "Formik"],
    description:
      "Анимированный сайт строительной компании с формой обратной связи",
    modalContent: (
      <>
        <p>
          Кливент - это анимированный сайт строительной компании. Для меня это был первым проектом при работе с анимацией.
        </p>
        <p>
          Сайт разработан на React + NextJS. Так же была сделана форма обратной связи, где данные клиентов отправляются в бот Telegram.
        </p>
        <p>
          Данным сайтом я еще занимаюсь. Мне нужно доделать стилизацию а также привести в порядок его адаптивность{" "}
          {":)"}
        </p>
      </>
    ),
  },
  {
    id: 2,
    title: "Тестовый магазин",
    imgSrc: furniture,
    code: "https://github.com/dakeylin",
    projectLink: "https://www.youtube.com/watch?v=2NIQ4_hpGP4",
    tech: ["React", "MongoDB"],
    description:
      "Тестовый проект, где я учился подключать внешнюю БД",
    modalContent: (
      <>
        <p>
          Проект верстался по видео с Ютуба. Хотел разобраться с работой с внешней БД!
        </p>
      </>
    ),
  },
  {
    id: 3,
    title: "Магазин кроссовок(test)",
    imgSrc: sneakers,
    code: "https://github.com/dakeylin/react-sneakers",
    projectLink: "https://www.youtube.com/watch?v=2NIQ4_hpGP4",
    tech: ["React"],
    description:
      "Самый первый мой проект по React. Основная задача была познакомиться с основными концепциями React",
    modalContent: (
      <>
        <p>
          Изучил что такое компоненты, хуки, пропсы и SPA
        </p>
      </>
    ),
  },
  {
    id: 4,
    title: "T-Rex Game",
    imgSrc: dino,
    code: "https://github.com/dakeylin/practiceJS/tree/main/game-dino-t-rex",
    projectLink: "https://www.youtube.com/watch?v=2NIQ4_hpGP4",
    tech: ["JS", "HTML", "CSS"],
    description:
      "Маленькая и простая игра в динозаврика, от которой я получал удовольствие при её создании",
    modalContent: (
      <>
        <p>Мне нечего добавить{":)"}</p>
      </>
    ),
  },
];
