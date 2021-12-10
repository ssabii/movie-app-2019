import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
  // function component로 사용한 이유 아래 링크 참조
  // https://stackoverflow.com/questions/64782949/how-to-pass-params-into-link-using-react-router-v6
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (location.state === null) {
      navigate("/");
    }
  });

  return <>{location.state ? <span>{location.state.title}</span> : null}</>;
}

export default Detail;
