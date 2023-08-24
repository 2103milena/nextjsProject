import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { t } = useTranslation();
  const localizedStrings = {
    world: t("home:world"),
    hello: t("common:hello"),
  };
  return (
    <div>
      <div>{localizedStrings.world}</div>
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
