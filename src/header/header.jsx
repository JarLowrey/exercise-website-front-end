import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Header extends React.Component {
    render() {
        return (
            <div/> //login/out etc
        );
    }
}

// // example login
// let url = 'http://localhost:3000/auth/sign_in?email=user1@example.com&password=12345678';
//     fetch(url, {
//       credentials: 'same-origin',
//       method:'post'
//     }).then(response => response.json())
//       .then((data) => {
//         console.log(data);
//       });