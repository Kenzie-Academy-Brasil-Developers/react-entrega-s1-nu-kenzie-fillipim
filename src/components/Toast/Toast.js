import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

export const Toast = (text, color) => {
    Toastify({
        text: text,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "center",
        stopOnFocus: true,
        style: {
          background: color,
          color: "#fff"
        },
      }).showToast();
}