import React from "react";
// import { useQuery } from "@apollo/react-hooks";
// import gql from "graphql-tag";

function Home() {
  //   const { loading, data } = useQuery(FETCH_BLOGS_QUERY);
  //   if (data) {
  //     console.log(data);
  //   }
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
}

// const FETCH_BLOGS_QUERY = gql`
//   {
//     getBlogs {
//       id
//       description
//       createdAt
//       authorName
//       commentCount
//       comments {
//         id
//         body
//         authorName
//       }
//       likeCount
//       likes {
//         authorName
//       }
//     }
//   }
// `;

export default Home;
