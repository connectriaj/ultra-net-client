import React from "react";
import useTitle from "../../../Hooks/useTitle";
import Banner from "../Banner/Banner";
import Middle from "../Middle/Middle";
import Partners from "../Partners/Partners";
import ServiceData from "../ServiceMenu/ServiceData";
import CustomerReview from "./CustoperReview/CustomerReview";

const Home = () => {
  useTitle('Home')
  return (
    <div>
      <Banner></Banner>
      <Middle></Middle>
      <ServiceData></ServiceData>
      <Partners></Partners>
      <CustomerReview></CustomerReview>
    </div>
  );
};

export default Home;
