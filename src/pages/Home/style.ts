import styled from 'styled-components';

export const HomeContainer = styled.div`
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    .logo-page {
        width: 20%;
        margin-top: 10%;
    }

    .input-options {
        display: flex;
        justify-content: space-around;
        font-size: 20px;
        margin: 12px 0;
    }

    .input-group {
        width: calc(64% - 24px);
        margin-top: 5%
    }

    .title-page {
        font-family: 'Lobster', cursive;
        font-size: 4vw;
        margin-top: -3vw;
        
        -webkit-text-fill-color: #000; 
        -webkit-text-stroke-width: .05px;
        -webkit-text-stroke-color: #fff;
    }

    .input-main {
        width: 100%;
        padding: 12px;
        margin: 12px 0;
        border-radius: 6px;
    }

    .joker-group {
        width: calc(64% - 24px);
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .loading-image {
        width: 40%
    }

    .joker {
        display: flex;
        padding: 0 0 40px 0;
        margin: 40px 0 0 0;
        border-bottom: solid 1px rgba(0, 0, 0, 0.1);
        width: 100%
    }

    .joker img {
        height: 60px;
        margin: -8px 24px 0 0;
    }

    @media only screen and (max-width: 1024px) {
        .title-page {
            font-size: 7vw;
            margin-top: -5vw;
        }
        .logo-page {
            width: 40%;
        }
    }



    
    @-webkit-keyframes rotating /* Safari and Chrome */ {
        from {
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        to {
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      @keyframes rotating {
        from {
          -ms-transform: rotate(0deg);
          -moz-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          -o-transform: rotate(0deg);
          transform: rotate(0deg);
        }
        to {
          -ms-transform: rotate(360deg);
          -moz-transform: rotate(360deg);
          -webkit-transform: rotate(360deg);
          -o-transform: rotate(360deg);
          transform: rotate(360deg);
        }
      }
      .rotating {
        -webkit-animation: rotating 1s linear infinite;
        -moz-animation: rotating 1s linear infinite;
        -ms-animation: rotating 1s linear infinite;
        -o-animation: rotating 1s linear infinite;
        animation: rotating 1s linear infinite;
      }
`