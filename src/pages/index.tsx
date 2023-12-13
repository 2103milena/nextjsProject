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
    <div>
      <div className={"font-whisper"}>{localizedStrings.world}</div>
      <div>{localizedStrings.hello}</div>
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
