// import Link from "next/link";

// async function fetchPosts() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// }

// export default async function Home() {
//   const posts = await fetchPosts();

//   return (
//     <div className="bg-gray-100">
//       <div className="container mx-auto px-4 py-8 min-h-screen">
//         <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
//           Latest Blog Posts
//         </h1>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {posts.map((post) => (
//             <div
//               key={post.id}
//               className="flex flex-col bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
//             >
//               <h2 className="text-2xl font-semibold text-gray-700 mb-2">
//                 {post.title}
//               </h2>
//               <p className="text-gray-600 line-clamp-3 mb-4">{post.body}</p>
//               <div className="mt-auto w-full">
//                 <Link href={`/blog/${post.id}`}>
//                   <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition w-full ">
//                     View Details
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

async function fetchPosts(page = 1, limit = 6) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  );
  return res.json();
}

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;

  const totalPosts = 100; // Since jsonplaceholder always has 100 posts
  const totalPages = Math.ceil(totalPosts / postsPerPage);

  useEffect(() => {
    async function loadPosts() {
      const fetchedPosts = await fetchPosts(currentPage, postsPerPage);
      setPosts(fetchedPosts);
    }

    loadPosts();
  }, [currentPage]);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Latest Blog Posts
        </h1>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex flex-col bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
            >
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                {post.title}
              </h2>
              <p className="text-gray-600 line-clamp-3 mb-4">{post.body}</p>
              <div className="mt-auto w-full">
                <Link href={`/blog/${post.id}`}>
                  <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition w-full">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded mr-4 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-4 py-2 text-gray-700">{`Page ${currentPage} of ${totalPages}`}</span>
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded ml-4 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
