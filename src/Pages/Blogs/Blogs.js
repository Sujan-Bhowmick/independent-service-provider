import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <div>
                <h5> Question: Difference between authorization and authentication?</h5>
                <p> Authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to</p>
            </div>
            <div>
                <h5>Question: Why are you using firebase? What other options do you have to implement authentication?</h5>
                <p> I am using firebase cause my application does not require heavy data processing or any form of complex user authentication requirements</p>
                <p>Other option: Auth0, MongoDB, Okta, Amazon Cognito, Keycloak, JSON Web Token</p>
            </div>
            <div>
                <h5>Question:  what other services does firebase provide other than  authentication?</h5>
                <p> There are many services which Firebase provides, Most useful of them are:</p>
                <p>Cloud Firestore, Cloud Functions, Authentication, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging.</p>
            </div>
        </div>
    );
};

export default Blogs;