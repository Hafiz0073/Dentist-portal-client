import React from 'react';

const Review = ({ review }) => {
    const { name, location, img, review: userReview } = review
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>{userReview}</p>
                    <div className="card-actions mt-8">
                        <div className="avatar mr-4">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src={img} alt='' />
                            </div>
                        </div>
                        <div>
                            <h5 className="text-lg">{name}</h5>
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;