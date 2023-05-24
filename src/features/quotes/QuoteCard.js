import React from "react";
import { removeQuote, downvoteQuote, upvoteQuote } from "./quotesSlice";
import { useDispatch } from "react-redux";
function QuoteCard({ id, votes, author, content, }) {
   const dispatch = useDispatch();

   function handleRemoveItem() {
     dispatch(removeQuote(id));
   }

   function handleUpVote() {
     dispatch(upvoteQuote(id));
   }
   function handleDownVote() {
     dispatch(downvoteQuote(id));
   }
  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            <p>{content}</p>
            <footer>
              - author{" "}
              <cite title="Source Title">{author}</cite>
            </footer>
          </blockquote>
        </div>
        <div className="float-right">
          <div
            className="btn-group btn-group-sm"
            role="group"
            aria-label="Basic example"
          >
            <button onClick={handleUpVote} type="button" className="btn btn-primary">
              Upvote
            </button>
            <button onClick={handleDownVote} type="button" className="btn btn-secondary">
              Downvote
            </button>
            <button onClick={handleRemoveItem} type="button" className="btn btn-danger">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div>Votes: {votes}</div>
        </div>
      </div>
    </div>
  );
}

export default QuoteCard;
