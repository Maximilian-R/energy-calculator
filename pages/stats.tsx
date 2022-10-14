import type { NextPage } from "next";
import Page from "../components/page";

const StatsPage: NextPage = () => {
  return (
    <Page>
      <h1>Visste du att...</h1>
      <p>Lägg till exempel som kan styras med inputparametrar.</p>
      <p>Hus vs Lägenhet</p>
      <p>Elförbrukning i standby</p>
    </Page>
  );
};

export default StatsPage;
