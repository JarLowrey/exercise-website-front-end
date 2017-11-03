import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends React.Component {
    render() {
        return (
            <div /> //login/out etc
        );
    }
}

// // example login
// let request = new Request('http://localhost:3000/auth/sign_in?email=user1@example.com&password=12345678', {
//     credentials: 'same-origin',
//     method: 'post'
// });
// fetch(request).then(response => {
//     console.log(response.headers.get('access-token'));
//     console.log(response.headers.get('token-type'));
//     console.log(response.headers.get('client'));
//     console.log(response.headers.get('expiry'));
//     console.log(response.headers.get('uid'));
//     return response.json();
// }).then((data) => {
//     console.log(data);
// });