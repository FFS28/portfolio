import { Border, FadeIn, FadeInStagger } from '@/components';
import clsx from 'clsx';
import { default as Image } from 'next/image';

const experience = [
  {
    title: 'Farmcity | Full Stack Developer.',
    date: 'Aug 2021 - Sep 2023',
    description: [
      'Created the architecture for the web application, including the database schema, authentication and authorization, front-end framework, as well as supporting external APIs and tools.',
      'Set up the infrastructure, deployment processes, and monitoring for the updated application on an AWS cloud platform; integrated user analytics and client-side error tracking.',
      'Analyzed Satellite Image using python and ML and improved loading speed using perfect Cache structure and CDN.',
      'Developed a comprehensive REST API on top of the existing React app.',
      'Designed and developed a user interface to keep track of their referral discounts and commissions, and claim funds periodically.',
      'Implemented SEO optimization, A/B testing, and conversion rate optimization.'
    ],
    image: { url: '/work/farmcity.png', height: 96, width: 96, className: 'rounded-none' },
  },
  {
    title: 'Finance Lab | Full Stack developer.',
    date: 'Aug 2018 - June 2021',
    description: [
      'Integrated back-end services and front-end applications using MERN Stack and Next.js, and implemented third-party API using Python.',
      'Optimized application performance, implemented CI/CD pipelines using Jenkins and GitHub, and worked in an Agile environment.',
      'Worked in TDD and performed testing using Jasmin and Karma',
      'Optimized application performance by identifying and refactoring inefficient code, resulting in a 20% increase speed.',
      'Participated in code reviews to provide constructive feedback and ensure adherence to best practices.'
    ],
    image: { url: '/work/financelab.png', height: 96, width: 96, className: '' },
  },
  {
    title: 'Alliance | Full Stack Developer.',
    date: 'Jul 2014 - Jun 2018',
    description: [
      'Developed 15 new UI building blocks, enhanced the creation of smart and visually appealing enterprise-level software experiences.',
      'Worked with Content Management Tools such as Drupal 6 and Drupal 7, Joomla, Wordpress, Bagisto and Magento.',
      'Attended in Web Application development using PHP-Symfony2, Laravel, CakePHP and Zend.',
      'Worked with TDD and implemented PHPUnit, SimpleTest and used Codeception.'
    ],
    image: { url: '/work/alliance.png', height: 96, width: 96, className: '' },
  },
  // {
  //   title: 'Loteria Monarca | Co-Founder.',
  //   date: 'Jan 2020 - March 2021',
  //   description: [
  //     'Tasked with creating a web app to play ‘Loteria Mexicana’ online with the technology of my choosing.',
  //     'Designed and built an initial demo with HTML, EJS, CSS, VanillaJS & JQuery, Bootstrap, ExpressJS, MongoDB, and Heroku.',
  //     'After 2/3 months of success and after reaching 15k unique users, 100s of concurrent users on game night, and 12k USD NRR, I made the decision to transition the front end app over to SvelteJs and TailwindCSS for a better user experience and speed, and implemented Stripe and Paypal payment processing.',
  //   ],
  //   image: { url: '/work/loteria.png', height: 96, width: 144, className: 'bg-white' },
  // },
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole key={index} title={item.title} date={item.date} image={item.image}>
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({ children, title, date, image }: { children: React.ReactNode; title: string; date?: string; image: { url: string; className: string; height: number; width: number } }) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">{date}</p>
        <div className={clsx('flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto', image.className)}>
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || 'auto',
              height: image.height || 'auto',
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div className={clsx('flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden', image.className)}>
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || 'auto',
                height: image.height || 'auto',
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">{title}</p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
