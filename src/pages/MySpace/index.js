import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { useNavigate } from "react-router-dom";
import Space from "../../components/Space";
import Loading from "../../components/Loading";

export default function MySpace(props) {
  const { token, space, id } = useSelector(selectUser);

  const navigate = useNavigate();

  if (token === null) {
    navigate("/");
  }

  if (space === null) {
    return <Loading />;
  }

  return (
    <div>
      <Space
        id={props.id}
        title={props.title}
        description={props.description}
        backgroundColor={props.backgroundColor}
        color={props.color}
      />
    </div>
  );
}
