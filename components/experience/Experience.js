import { SectionTitle } from "../sectionTitle/SectionTitle";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <section id="experience" className="section-wrapper">
      <SectionTitle title="Опыт" dir="l" />
      {experience.map((item) => (
        <ExperienceItem key={item.id} {...item}/>
      ))}
    </section>
  );
}

const experience = [
  {
    id: 10,
    title: "Индивидуальный предприниматель",
    time: "2021 - н.в.",
    location: "Ростов-на-Дону",
    description:
      "Реализовываю проекты по проектированию и монтажу промышленных инженерных систем",
  },
  {
    id: 11,
    title: `ООО "Профи"`,
    position: "Менеджер по работе с клиентами",
    time: "2019 - 2021",
    location: "Ростов-на-Дону",
    description:
      "Выявлял потребности клиентов, принимал и обрабатывал заказы клиентов. Следил за контролем оплаты и стабильно выполнял план продаж"
  },
  {
    id: 12,
    title: "ЮСК",
    position: "Менеджер проектов",
    time: "2017 - 2019",
    location: "Ростов-на-Дону",
    description:
      "Организовывал поиск и привлечение клиентов. Проводил переговоры и заключение договоров на внедрение коплексных решений по оптимизации и автоматизации процессов в компании.",
  },
];
