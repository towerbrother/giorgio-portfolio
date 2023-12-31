import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

import type { TabType } from '~/components/TabMenu';
import TabMenu from '~/components/TabMenu';

export const meta: MetaFunction = () => {
  return [
    { title: "Where I've Worked" },
    {
      name: 'description',
      content: 'Experience Page - Giorgio Torre portfolio.',
    },
  ];
};

const EXPERIENCE_TABS: TabType[] = [
  {
    displayName: 'Software Developer',
    content: {
      heading: 'Tenhil',
      subheading: 'January 2023 - Present',
      bullets: [
        'During my tenure at Tenhil, the parent company of stellenanzeigen.de, I assumed a pivotal role within a newly-formed team entrusted with the ground-up development of a transformative project. The objective was to create a versatile platform capable of constructing multiple portals using a unified code base and a shared CMS system. This initiative aimed not only to manage content efficiently but also to facilitate distinct theming for each portal. I actively participated in the initial discussions to define our tech stack and the project architecture.',
        'My contribution to the team was diverse and impactful. Assuming a lead role in decision-making, I established coding standards and ensured that high-quality code was consistently produced. Despite joining as a frontend developer, I leveraged my C# proficiency to assist the backend team, boosting our overall development velocity. Building a strong rapport with the project PO, I facilitated direct communication between management and developers, fostering a collaborative and efficient work environment.',
        'As my involvement deepened, I was entrusted with additional responsibilities. Beyond my role as a frontend developer, I temporarily assumed the position of content manager. This transition allowed me to gain a profound understanding of the challenges faced in the portal-building process. Drawing on this insight, I proposed user stories to enhance efficiency and intuitiveness, in addition to identifying and rectifying bugs. This holistic involvement showcases my adaptability and commitment to ensuring the success of the project.',
      ],
    },
  },
  {
    displayName: 'Junior Software Developer',
    content: {
      heading: 'stellenanzeigen.de',
      subheading: 'September 2021 - December 2022',
      bullets: [
        'Embarking on my career journey, I began as a junior software developer at stellenanzeigen.de, marking my initiation into the world of web development. Joining the core team responsible for the legacy website, coded in C# using the .NET Core framework with jQuery as the scripting language. I had never programmed in C#, nor in jQuery, so I had to quickly familiarise myself with these programming languages and their usage in a professional setting.',
        'Within the dynamic environment of the core team, I navigated the nuances of agile methodology in real-world scenarios. Embracing practices like Scrum processes, sprints, code reviews, and pull requests, I gained firsthand experience in agile development. My initial responsibilities included familiarising myself with the existing code base, addressing minor bugs, and gradually progressing to working on full-fledged features.',
        "I have also played a significant role in developing a separate console project aimed at expediting the seeding process of our CMS system with pre-existing content. This hands-on experience, not only enhanced my technical skills in C#, but also honed my ability to contribute meaningfully to the team's objectives in addition to planned features for the main website.",
      ],
    },
  },
  {
    displayName: 'Freelancer Software Developer',
    content: {
      heading: 'stellenanzeigen.de',
      subheading: 'December 2020 - August 2021',
      bullets: [
        "I began as a remote freelancer, where I tackled bugs, handled responsive design, supported the core team, and delved deep into the company's operations, paving the way for my eventual full-time employment.",
      ],
    },
  },
  {
    displayName: 'Project Commercial Manager',
    content: {
      heading: 'Bombardier Transportation UK (later Alstom)',
      subheading: 'September 2016 - May 2021',
      bullets: [
        'Serving as the Project Commercial Manager for a transportation company, I effectively oversaw three distinct projects spanning multiple railway depots. My responsibilities included the management of maintenance contracts with substantial financial implications, ensuring both operational efficiency and cost-effectiveness.',
        "Taking charge of negotiations and contract drafting, I successfully navigated the complexities of additional maintenance tasks. Whether initiated by my team or arising from requests by the customer (train operator), I orchestrated agreements that safeguarded the integrity of the project and protected the company's interests. This multifaceted approach not only ensured the seamless flow of projects but also fortified relationships with our clients.",
        "At the heart of my responsibilities was the protection of projects and the company from service penalties. I meticulously formulated strategies to mitigate risks and uphold contractual obligations. Simultaneously, I cultivated positive and collaborative relationships with customers, contributing to the company's reputation for reliability and professionalism in the transportation services sector.",
      ],
    },
  },
];

export default function Experience() {
  return (
    <>
      <div className='my-6 md:my-8 lg:mt-8 lg:mb-6 xl:mb-0 xl:mt-23'>
        <h1 className='text-shade-white text-4xl md:text-5xl lg:text-7xl mb-3 md:mb-5 lg:mb-8'>
          Where I've Worked
        </h1>
        <TabMenu tabs={EXPERIENCE_TABS} />
      </div>
      <Link
        to='/projects'
        className='max-w-max mt-3 mb-12 lg:mt-6 bg-transparent text-secondary border-2 border-solid border-secondary z-30 transition-all duration-200 ease-in-out text-xl py-2 px-3 hover:bg-secondary hover:text-primary'
      >
        Some Things I've Built
      </Link>
    </>
  );
}
