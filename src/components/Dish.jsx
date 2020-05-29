import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

function RenderDish({ dish }) {
  if (dish != null)
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  else return <div></div>;
}

function RenderComments({ comments }) {
  if (comments != null)
    return (
      <div>
        <h4 className="mt-2 mb-3">Comments</h4>
        <ul className="list-unstyled">
          {comments.map((comment) => (
            <li>
              {comment.comment} <br />
              <p className="mt-2 mb-3">
                - - {comment.author} ,
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </li>
          ))}
        </ul>
      </div>
    );
  else return <div></div>;
}

const Dish = (props) => {
  const item = props.dish;
  if (item != null)
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-5 m-1">
            <RenderDish dish={item} />
          </div>
          <div className="col-12 col-sm-5 m-1">
            <RenderComments comments={item.comments} />
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};

export default Dish;
