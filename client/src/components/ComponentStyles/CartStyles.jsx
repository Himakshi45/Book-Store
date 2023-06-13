import styled from "styled-components";
export const Wrapper = styled.section`
  body {
    font-family: Arial;
    font-size: 17px;
    padding: 8px;
  }

  * {
    box-sizing: border-box;
  }

  .row {
    display: -ms-flexbox; /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap; /* IE10 */
    flex-wrap: wrap;
    margin: 0 -16px;
  }
>>>>>>> 2599441306f66f09a09409ed7283e395e14de20f
  .col-25 {
    -ms-flex: 25%; /* IE10 */
    flex: 25%;
  }
  .col-50 {
    -ms-flex: 50%; /* IE10 */
    flex: 50%;
  }
  .col-75 {
    -ms-flex: 75%; /* IE10 */
    flex: 75%;
  }
  .col-25,
  .col-50,
  .col-75 {
    padding: 0 16px;
  }
  .container {
    background-color: #f2f2f2;
    padding: 5px 20px 15px 20px;
    border: 1px solid lightgrey;
    border-radius: 3px;
  }

  input[type="text"] {
>>>>>>> 2599441306f66f09a09409ed7283e395e14de20f
    width: 100%;
    margin-bottom: 20px;
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
>>>>>>> 2599441306f66f09a09409ed7283e395e14de20f
  label {
    margin-bottom: 10px;
    display: block;
  }
  .icon-container {
    margin-bottom: 20px;
    padding: 7px 0;
    font-size: 24px;
  }

  .btn {
    background-color: #04aa6d;
>>>>>>> 2599441306f66f09a09409ed7283e395e14de20f
    color: white;
    padding: 12px;
    margin: 10px 0;
    border: none;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    font-size: 17px;
  }

  .btn:hover {
    background-color: #45a049;
  }

  a {
    color: #2196f3;
  }

  hr {
    border: 1px solid lightgrey;
  }

  span.price {
    float: right;
    color: grey;
  }
`;
