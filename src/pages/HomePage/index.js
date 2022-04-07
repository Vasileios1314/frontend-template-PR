import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoading, selectSpaces } from "../../store/spaces/selectors";
import { fetchSpaces } from "../../store/spaces/actions";
import Space from "../../components/Space";

export default function HomePage() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);
  const loading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchSpaces());
  }, []);

  if (loading) return <div>LOADING</div>;

  return (
    <div>
      {spaces.length !== 0 &&
        spaces.map((space) => (
          <Space
            key={space.id}
            id={space.id}
            title={space.title}
            description={space.description}
            backgroundColor={space.backgroundColor}
            color={space.color}
            showLink={true}
          />
        ))}
    </div>
  );
}
