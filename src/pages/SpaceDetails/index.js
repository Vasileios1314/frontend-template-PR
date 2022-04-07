import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSpaceDetails } from "../../store/spaces/actions";
import { selectSpace } from "../../store/spaces/selectors";

export default function SpaceDetails(props) {
  const params = useParams();
  const { id } = params;
  const dispatch = useDispatch();
  const space = useSelector(selectSpace);

  useEffect(() => {
    dispatch(fetchSpaceDetails(id));
  }, [dispatch, id]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  };

  if (!space) return <div>loading</div>;

  return (
    <div
      key={space.id}
      style={{ backgroundColor: space.backgroundColor, color: space.color }}
    >
      <Link to="/">Back</Link>
      <h2>{space.title}</h2>
      <p>{space.description}</p>
      {space.stories
        .sort((story1, story2) => {
          return story1.createdAt.localeCompare(story2.createdAt);
        })
        .map((story) => (
          <div key={story.id}>
            <h2>{story.name}</h2>
            <img width="100px" src={story.imageUrl} alt={story.name} />
            <h5>{story.content}</h5>
            <h6>{formatDate(story.createdAt)}</h6>
          </div>
        ))}
    </div>
  );
}
