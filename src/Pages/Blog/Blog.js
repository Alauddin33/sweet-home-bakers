import React from 'react';
import useTitle from '../../hooks/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div>
            <section className="dark:bg-gray-800 dark:text-gray-100">
                <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
                    <h2 className="text-2xl font-semibold sm:text-4xl mb-24">Frequently Asked Questions</h2>

                    <div className=" space-y-4">
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Difference between SQL and NoSQL</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"> <strong>SQL: </strong>
                                RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS). These databases have fixed or static or predefined schema. These databases are best suited for complex queries. Vertically Scalable, These databases are not suited for hierarchical data storage.
                                <br />
                                <br />

                                <strong>NoSQL: </strong>
                                Non-relational or distributed database system. They have dynamic schema. These databases are best suited for hierarchical data storage. Horizontally scalable, These databases are not so good for complex queries.

                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is JWT, and how does it work?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed. JWTs can be signed using a secret (with the HMAC algorithm) or a public/private key pair using RSA or ECDSA.
                                <br />
                                <br />
                                Basically the identity provider(IdP) generates a JWT certifying user identity and Resource server decodes and verifies the authenticity of the token using secret salt / public key.
                                <br />
                                User sign-in using username and password or google/facebook. <br />
                                Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key.<br />
                                User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. <br />
                                Resource server then verifies the authenticity of the token using the secret salt/ public key.
                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What is the difference between javascript and NodeJS?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400"><strong>Javascript: </strong>
                                Javascript is a programming language that is used for writing scripts on the website. Javascript can only be run in the browsers. It is basically used on the client-side. Javascript is capable enough to add HTML and play with the DOM. Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. Javascript is used in frontend development. Some of the javascript frameworks are RamdaJS, TypedJS, etc. It is the upgraded version of ECMA script that uses Chrome's V8 engine written in C++.
                                <br />
                                <br />

                                <strong>NodeJS: </strong>
                                NodeJS is a Javascript runtime environment. We can run Javascript outside the browser with the help of NodeJS. It is mostly used on the server-side. Nodejs does not have capability to add HTML tags. V8 is the Javascript engine inside of node.js that parses and runs Javascript. Nodejs is used in server-side development. Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. Nodejs is written in C, C++ and Javascript.


                            </p>
                        </details>
                        <details className="w-full border rounded-lg">
                            <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">How does NodeJS handle multiple requests at the same time?</summary>
                            <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400">NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.

                                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.

                            </p>
                        </details>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;