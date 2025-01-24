import Link from "next/link";

async function fetchPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  return res.json();
}

export default async function BlogDetails({ params }) {
  const post = await fetchPost(params.id);

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto px-4 py-12 min-h-screen ">
        <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">
            {post.title}
          </h1>
          <p className="text-gray-700 leading-relaxed text-lg">{post.body}</p>
          <div className="mt-6">
            <Link href="/">
              <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition w-full ">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
