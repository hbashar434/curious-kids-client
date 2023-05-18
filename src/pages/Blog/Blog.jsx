import React from "react";

const Blog = () => {
  return (
    <div className=" bg-purple-300 p-8 rounded shadow">
      <h2 className="text-2xl font-bold mb-4">
        Tech Insights: Access Tokens, Databases, and Web Frameworks
      </h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">
          Access Tokens and Refresh Tokens
        </h3>
        <p>
          Access tokens are credentials representing authorization, while
          refresh tokens obtain new access tokens after expiration. Store access
          tokens securely using mechanisms like HTTP-only cookies or local
          storage. Keep refresh tokens on the server-side for enhanced security.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">SQL vs. NoSQL Databases</h3>
        <p>
          SQL databases use structured models and enforce data integrity, while
          NoSQL databases offer flexibility and scalability for unstructured
          data. Choose based on data nature, scalability requirements, and use
          case.
        </p>
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Express.js and Nest.js</h3>
        <p>
          Express.js is a minimal web framework for Node.js, allowing easy web
          app and API development. Nest.js is a progressive framework built on
          Express.js for efficient and scalable server-side applications.
        </p>
      </div>
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">MongoDB Aggregate</h3>
        <p>
          MongoDB&apos;s aggregate is a powerful feature for advanced data
          aggregation and transformation. It allows for complex data
          manipulations and analytics using aggregation pipelines across
          multiple documents and collections.
        </p>
      </div>
    </div>
  );
};

export default Blog;
