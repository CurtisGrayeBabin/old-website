import * as React from "react";
import Layout from "../components/utilities/layout";
import { error } from "../global styles/404.module.css";
import { Link } from "gatsby";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="404" layoutChoice={0} footerStick={true}>
      <section className={error}>
        <h1 className={`animate-pulse`}>404</h1>
        <p>Oops, this page doesn't exist!</p>
        <div>
          <Link to="/">
            <button>Home</button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
