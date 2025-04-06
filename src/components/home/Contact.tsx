import { EmailIcon } from "@assets/icons/Email";
import { GithubIcon } from "@assets/icons/Github";
import { LinkedInIcon } from "@assets/icons/LinkedIn";
import { UpworkIcon } from "@assets/icons/Upwork";
import ContactButton from "@components/shared/contactButton";

const Contact = () => {
  const contactButtons = [
    {
      href: "mailto:nipunraj99@gmail.com",
      gradient: "linear-gradient(to right, #4F46E5, #06B6D4) 1",
      icon: <EmailIcon />,
      text: "Send an email",
    },
    {
      href: "https://linkedin.com/in/yourusername",
      gradient: "linear-gradient(to right, #2563EB, #4F46E5) 1",
      icon: <LinkedInIcon />,
      text: "LinkedIn",
      external: true,
    },
    {
      href: "https://upwork.com/yourusername",
      gradient: "linear-gradient(to right, #059669, #10B981) 1",
      icon: <UpworkIcon />,
      text: "Upwork",
      external: true,
    },
    {
      href: "https://github.com/yourusername",
      gradient: "linear-gradient(to right, #7C3AED, #8B5CF6) 1",
      icon: <GithubIcon />,
      text: "Github",
      external: true,
    },
  ];

  return (
    <section id='contact' className='mb-20 mx-16'>
      <div className='max-w-6xl mx-auto'>
        <div className='mb-20'>
          <h2 className='text-neutral-300 font-raleway text-6xl font-normal mb-4'>
            Contact
          </h2>
        </div>

        <div className='max-w-3xl'>
          <p className='font-raleway text-lg font-normal tracking-wide text-zinc-100 leading-7 mb-8'>
            I'm currently looking to join a cross-functional team that values
            improving people's lives through accessible design. or have a
            project in mind? Let's connect.
          </p>

          <div className='flex gap-4 mt-12'>
            {contactButtons.map((button, index) => (
              <ContactButton
                key={index}
                href={button.href}
                gradient={button.gradient}
                icon={button.icon}
                children={button.text}
                external={button.external}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
