import React from "react";
import FollowsCard from "../followsCard";
import { Card } from "semantic-ui-react";
import "./followsList.css";

export default function Follows({ followList }) {
  const followersCards = followList.map((followers) => (
    <FollowsCard key={followList.student} followers={followers} />
  ));

  return (
    <>
        <Card.Group
          id="followersCards"
          centered
          stackable
          doubling
          itemsPerRow={1}
        >
          {followersCards}
        </Card.Group>
    </>
  );
}
