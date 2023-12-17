document.addEventListener('DOMContentLoaded', function () {
  
  document.querySelector('section img').addEventListener('click', function () {
    
    var style = document.createElement('style');
    style.type = 'text/css';

    
    var css = `
      section img {
        width: 100%;
        max-width: 400px;
        border: 5px solid #cdbceb;
        margin: 20px 0;
        animation: bounce 1s infinite alternate;
      }

      @keyframes bounce {
        0% {
          transform: translateY(0);
        }
        100% {
          transform: translateY(-20px);
        }
      }
    `;

    
    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }

    
    document.head.appendChild(style);
  });
});
