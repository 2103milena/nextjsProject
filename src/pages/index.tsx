import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

export default function Home() {
  const { t } = useTranslation();
  const localizedStrings = {
    world: t("home:world"),
    hello: t("common:hello"),
  };
  return (
    <div className="relative h-screen">

      <div className="absolute inset-0 bg-custom-background bg-cover bg-center opacity-40"></div>

      <div className="relative z-40 flex items-center justify-center h-full">
        <div>
          <div className="font-whisper">{localizedStrings.world}</div>
          <div>{localizedStrings.hello}</div>
        </div>
      </div>

    </div>

  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["home", "common"])),
    },
  };
};
