import toast from "react-hot-toast";

import { copyText } from "@/container";
import { CopyIcon } from "@/presentation/components/atoms/Icons";
import useLanguage from "@/presentation/hooks/useLanguage";

const CopyEmail = ({ email }: { email: string }) => {
  const { t } = useLanguage();

  const copyEmail = async () => {
    try {
      await copyText(email);
      toast.success(t.contact.copied);
    } catch {
      toast.error(t.contact.copyError);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 rounded-full border border-line py-0.5 pr-1 pl-6 max-sm:rounded-3xl">
      <span className="min-w-0 py-2 font-mono text-[15px] wrap-anywhere">
        {email}
      </span>
      <button
        type="button"
        onClick={copyEmail}
        className="inline-flex h-12 cursor-pointer items-center gap-2 rounded-full px-4 text-[15px] font-semibold hover:text-accent"
      >
        <CopyIcon />
        {t.contact.copy}
      </button>
    </div>
  );
};

export default CopyEmail;
