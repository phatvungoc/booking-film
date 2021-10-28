import React from 'react';
import { useSelector } from 'react-redux';

const Comment = () => {
    const userComments = useSelector((state) => state.detail.comment);
    // const starComment = useSelector((state) => state.detail.listStar);

    const renderStarRating = (item) => {
        const arrStar = [];
        for (let i = 1; i < item + 1; i++) {
            arrStar.push(
                <i className="fa fa-star active" aria-hidden="true"></i>
            );
        }
        for (let i = 1; i <= 5 - item; i++) {
            arrStar.push(<i className="fa fa-star" aria-hidden="true"></i>);
        }

        return arrStar.map((element) => {
            return <>{element}</>;
        });
    };

    const renderUserComment = () => {
        return (
            userComments &&
            userComments.map((item) => {
                return (
                    <>
                        <div className="comment-list-title">
                            {item.user}{' '}
                            <span className="comment-list-star">
                                {renderStarRating(item.star)}
                            </span>
                        </div>
                        <div className="comment-list-content">
                            {item.comment}
                        </div>
                    </>
                );
            })
        );
    };

    return (
        <div className="comment-list">
            <h3 className="heading-left">Danh sách bình luận</h3>
            {renderUserComment()}
        </div>
    );
};

export default Comment;
