(function( $ ) {
    var methods = {
        start : function () {
          var prNum, tempOut;
          prNum = Math.round(Math.random() * 10);
          var count = 3;
          function guessNum() {
            var out = document.getElementById('out');
            if (count == 0) {
              out.innerHTML = 'Попытки кончились :('
            out.style.color = 'black'
              return;
            }
            var num = document.getElementById('mynum').value;
          
            if (num == prNum) {
              out.innerHTML = 'Вы угадали!';
            out.style.color = 'green'
            } else if (num > 10 || num < 0) {
              out.innerHTML = 'Введите число от 0 до 10'
            } else if (num > prNum) {
              out.innerHTML = 'Вы ввели число больше!'
            out.style.color = 'red'
            } else if (num < prNum) {
              out.innerHTML = 'Вы ввели число меньше!'
            out.style.color = 'red'
            }
            count--;
          }
}}
     $.fn.myPlugin = function(method) { 
        if ( methods[method] ) {
            return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
          } else if ( typeof method === 'object' || ! method ) {
            return methods.init.apply( this, arguments );
          } else {
            $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
          } 
          return this.each(methods[start]);
        };
      })( jQuery );