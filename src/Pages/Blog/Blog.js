import React from "react";
import Card from "react-bootstrap/Card";

const Blog = () => {
  return (
    <div>
      <Card className="w-75 mx-auto my-5">
        <Card.Img
          style={{ height: "500px" }}
          variant="top"
          src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <Card.Body className="py-4">
          <Card.Title>Difference between SQL and NoSQL</Card.Title>
          <p className="fw-semibold">
            Author name: David Luis || Publish Date: 15-5-2021
          </p>
          <Card.Text>
            From analysts and engineers to IT decision makers, many are familiar
            with Relational Database Management Systems (RDBMS) and the
            Structured Query Language (SQL) used to interact with them. While
            these terms refer to a decades-old paradigm which remains a wide
            standard, today the sheer variety and depth of database systems can
            be dizzying. What’s more, rising volumes of unstructured data,
            availability of storage and processing power, and evolving analytic
            requirements have generated interest in fundamentally different
            technologies. Collectively known as NoSQL, these popular
            alternatives to traditional RDBMSs show promise for a variety of
            modern use cases. To make informed decisions about which to use,
            practitioners should be aware of the differences between SQL, NoSQL,
            individual Database Management Systems (DBMS) and languages, as well
            as the situations each is best-suited for, and how the landscape is
            changing.
          </Card.Text>
        </Card.Body>
      </Card>

      <Card className="w-75 mx-auto my-5">
        <Card.Img
          style={{ height: "500px" }}
          variant="top"
          src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        />
        <Card.Body className="py-4">
          <Card.Title>What is JWT, and how does it work?</Card.Title>
          <p className="fw-semibold">
            Author name: Martin Hans || Publish Date: 5-11-2022
          </p>
          <Card.Text>
            JSON Web Token (JWT) is an open standard (RFC 7519) for securely
            transmitting information between parties as JSON object. It is
            compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdP). So the integrity and
            authenticity of the token can be verified by other parties involved.
            The purpose of using JWT is not to hide data but to ensure the
            authenticity of the data. JWT is signed and encoded, not encrypted.
            JWT is a token based stateless authentication mechanism. Since it is
            a client-side based stateless session, server doesn't have to
            completely rely on a datastore(database) to save session
            information.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="w-75 mx-auto my-5">
        <Card.Img
          style={{ height: "500px" }}
          variant="top"
          src="https://images.unsplash.com/photo-1606159068539-43f36b99d1b2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1159&q=80"
        />
        <Card.Body className="py-4">
          <Card.Title>
            What is the difference between javascript and NodeJS?
          </Card.Title>
          <p className="fw-semibold">
            Author name: Kam Al || Publish Date: 10-4-2022
          </p>
          <Card.Text>
            1. JavaScript is a client-side scripting language that is
            lightweight, cross-platform, and interpreted. Both Java and HTML
            include it. Node.js, on the other hand, is a V8-based server-side
            programming language. As a result, it is used to create
            network-centric applications. It's a networked system made for
            data-intensive real-time applications. If we compare node js vs.
            python, it is clear that node js will always be the preferred
            option. 2. JavaScript is a simple programming language that can be
            used with any browser that has the JavaScript Engine installed.
            Node.js, on the other hand, is an interpreter or execution
            environment for the JavaScript programming language. It requires
            libraries that can be conveniently accessed from JavaScript
            programming to be more helpful.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className="w-75 mx-auto my-5">
        <Card.Img
          style={{ height: "500px" }}
          variant="top"
          src="https://images.unsplash.com/photo-1509475826633-fed577a2c71b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        />
        <Card.Body className="py-4">
          <Card.Title>
            How does NodeJS handle multiple requests at the same time?
          </Card.Title>
          <p className="fw-semibold">
            Author name: Abdullah Hasan || Publish Date: 19-10-2020
          </p>
          <Card.Text>
            655 I understand that Node.js uses a single-thread and an event loop
            to process requests only processing one at a time (which is
            non-blocking). But still, how does that work, lets say 10,000
            concurrent requests. The event loop will process all the requests?
            Would not that take too long? I can not understand (yet) how it can
            be faster than a multi-threaded web server. I understand that
            multi-threaded web server will be more expensive in resources
            (memory, CPU), but would not it still be faster? I am probably
            wrong; please explain how this single-thread is faster in lots of
            requests, and what it typically does (in high level) when servicing
            lots of requests like 10,000. And also, will that single-thread
            scale well with that large amount? Please bear in mind that I am
            just starting to learn Node.js.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blog;
