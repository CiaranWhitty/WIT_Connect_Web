import React from "react";
import { Link } from "react-router-dom";
import { Item, Card } from "semantic-ui-react";
import "./studentsPortfoliosTimelineCard.css";

export default function StudentsPortfoliosTimelineCard({ portfolio }) {
  return (
    <>
      {/* https://codepen.io/NilsWe/pen/FemfK */}
      <ul class="timeline">
        <li>
          <div class="direction-r">
            <div class="flag-wrapper">
              <Link to={`/u/students/${portfolio.uId}/${portfolio.id}/`}>
                <span class="flag">{portfolio.title}</span>
              </Link>
              <span class="time-wrapper">
                <span class="time">{portfolio.creationDate}</span>
              </span>
            </div>
            <div class="desc">{portfolio.shortDesc}</div>
          </div>
        </li>
      </ul>
    </>
  );
}
