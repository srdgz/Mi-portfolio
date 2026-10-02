import { getProfile } from "@/container";
import Corners from "@/presentation/components/atoms/Corners";
import {
  ArrowUpRightIcon,
  GithubIcon,
  LinkedinIcon,
  MailIcon,
} from "@/presentation/components/atoms/Icons";
import CopyEmail from "@/presentation/components/molecules/CopyEmail";
import Heading from "@/presentation/components/molecules/Heading";
import useLanguage from "@/presentation/hooks/useLanguage";
import useReveal from "@/presentation/hooks/useReveal";

const Contact = () => {
  const ref = useReveal();
  const { locale, t } = useLanguage();
  const { email, linkedinUrl, githubUrl } = getProfile(locale);

  return (
    <section
      id="contacto"
      ref={ref}
      className="reveal mx-auto max-w-300 px-5 pb-[clamp(64px,9vw,112px)] sm:px-8 lg:px-12"
    >
      <div className="relative border border-line bg-card/80 p-[clamp(24px,4vw,48px)]">
        <Corners />
        <div className="grid items-center gap-x-16 gap-y-8 lg:grid-cols-12">
          <div className="flex flex-col gap-5 lg:col-span-6">
            <Heading number="05" label={t.contact.label}>
              {t.contact.titleStart}
              <span className="text-warm">{t.contact.titleEnd}</span>
            </Heading>
          </div>
          <div className="flex min-w-0 flex-col gap-3 lg:col-span-6">
            <a
              href={`mailto:${email}`}
              className="group flex items-center justify-between gap-4 rounded-full bg-accent px-6 py-3.5 font-semibold text-on-accent hover:brightness-110"
            >
              <span className="flex items-center gap-3">
                <MailIcon size={20} />
                {t.contact.email}
              </span>
              <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <ArrowUpRightIcon />
              </span>
            </a>
            <CopyEmail email={email} />
            <div className="grid grid-cols-[repeat(auto-fit,minmax(min(160px,100%),1fr))] gap-3">
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-full border border-line px-6 py-3 font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                <span className="flex items-center gap-3">
                  <LinkedinIcon size={20} />
                  LinkedIn
                </span>
                <ArrowUpRightIcon />
              </a>
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-3 rounded-full border border-line px-6 py-3 font-semibold transition-colors hover:border-accent hover:text-accent"
              >
                <span className="flex items-center gap-3">
                  <GithubIcon size={20} />
                  GitHub
                </span>
                <ArrowUpRightIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
