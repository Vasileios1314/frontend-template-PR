import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../store/user/selectors";
import { useNavigate, Link } from "react-router-dom";
import Space from "../../components/Space";
import Loading from "../../components/Loading";
import { useDispatch } from "react-redux";
import { deleteStory } from "../../store/user/actions";

export default function MySpace() {
  const dispatch = useDispatch();
  const { token, space, id } = useSelector(selectUser);

  const navigate = useNavigate();

  const onDelete = (id) => {
    console.log("deleting story!", id);
    dispatch(deleteStory(id));
  };

  if (token === null) {
    navigate("/");
  }

  if (space === null) {
    return <Loading />;
  }

  return (
    <div>
      <Link to="/">Back</Link>
      <Space
        id={space.id}
        title={space.title}
        description={space.description}
        backgroundColor={space.backgroundColor}
        color={space.color}
        showLink={false}
      />
      <div>
        {space.stories
          .sort((story1, story2) => {
            return story1.createdAt.localeCompare(story2.createdAt);
          })
          .map((story) => (
            <div key={story.id}>
              <h2>{story.name}</h2>
              <img width="100px" src={story.imageUrl} alt={story.name} />
              <h5>{story.content}</h5>
              <h6>{story.createdAt}</h6>
              {token && (
                <button variant="danger" onClick={() => onDelete(story.id)}>
                  Delete story
                </button>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}
