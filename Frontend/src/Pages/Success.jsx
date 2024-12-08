import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Success = () => {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timeOutId = setInterval(() => {
      setCountdown((prevCount) => {
        if (prevCount == 1) {
          clearInterval(timeOutId);
          navigate("/");
        }
        return prevCount - 1;
      });
    }, 1000);
    return () => clearInterval(timeOutId);
  }, []);

  return (
    <section className="notFound">
      <div className="container">
        <img src="/sandwich.png" alt="sandwich" />
        <h1>Redirecting to Home in {countdown} seconds....</h1>
        <Link to={"/"}>
          Back to Home <HiOutlineArrowNarrowRight />{" "}
        </Link>
      </div>
    </section>
  );
};

export default Success;
