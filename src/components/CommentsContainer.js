import React from 'react';
import CommentsList from './CommentsList';

const commentsData = [
  {
    name: 'Nidhi Gadge',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    replies: [
      {
        name: 'Nidhi Gadge',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        replies: [
          {
            name: 'Nidhi Gadge',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            replies: [
              {
                name: 'Nidhi Gadge',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                replies: [],
              },
              {
                name: 'Nidhi Gadge',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                replies: [
                  {
                    name: 'Nidhi Gadge',
                    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                    replies: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: 'Nidhi Gadge',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    replies: [
      {
        name: 'Nidhi Gadge',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        replies: [
          {
            name: 'Nidhi Gadge',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            replies: [
              {
                name: 'Nidhi Gadge',
                text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                replies: [],
              },
            ],
          },
        ],
      },
      {
        name: 'Nidhi Gadge',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        replies: [
          {
            name: 'Nidhi Gadge',
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: 'Nidhi Gadge',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    replies: [],
  },
  {
    name: 'Nidhi Gadge',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    replies: [],
  },
];

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2 w-2/3'>
      <h1 className='text-2xl font-bold'>Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
