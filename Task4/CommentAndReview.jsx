import React, { useState } from 'react'

export default function CommentAndReview() {
    const [comments, setComments] = useState('');
    const [review, setReview] = useState('');
    const [text, setText] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (review && text) {
            setText([...text, { review, comments }]);
            setReview('');
            setComments('');
        }
    };

    return (
        <div>
            <h1>Comment And Review</h1>
            <form onSubmit={handleSubmit}>
                <input placeholder="Add Comment" value={comments} onChange={(e) => setComments(e.target.value)} required />
                <input type="text" placeholder="Add Review" value={review} onChange={(e) => setReview(e.target.value)} required />
                <button type="submit">Submit</button>
            </form>
            <h2>LIST</h2>
            {
                text.map((text, index) => (
                        <ul key={index}>
                            {
                                <li>{text.comments} : {text.review}</li>
                            }
                        </ul>
                ))
            }
        </div>
    );
}