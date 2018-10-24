      //funkcja wstawiania znaków
      function insert(num) {
          document.form.textview.value = document.form.textview.value + num
      }

      //funkcja sumowania
      function equal() {
          let exp = document.form.textview.value;
          if (exp) {
              document.form.textview.value = eval(exp)
          }
      }

      //funckja czysczenia pola

      function clean() {
          document.form.textview.value = "";
      }

      //funkcja wracania

      function back() {
          let exp = document.form.textview.value;
          document.form.textview.value = exp.substring(0, exp.length - 1);
      }