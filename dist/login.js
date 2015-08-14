System.register(['aurelia-framework'], function (_export) {
  'use strict';

  var inject, Aurelia, Login;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

  return {
    setters: [function (_aureliaFramework) {
      inject = _aureliaFramework.inject;
      Aurelia = _aureliaFramework.Aurelia;
    }],
    execute: function () {
      Login = (function () {
        function Login(aurelia) {
          var _this = this;

          _classCallCheck(this, _Login);

          this.username = '';
          this.password = '';
          this.error = '';

          this.login = function () {
            if (_this.username && _this.password) {
              aurelia.setRoot('app');
            } else {
              _this.error = 'Please enter a username and password.';
            }
          };
        }

        var _Login = Login;
        Login = inject(Aurelia)(Login) || Login;
        return Login;
      })();

      _export('Login', Login);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozt1QkFLYSxLQUFLOzs7Ozs7aUNBTFQsTUFBTTtrQ0FBRSxPQUFPOzs7QUFLWCxXQUFLO0FBTUwsaUJBTkEsS0FBSyxDQU1KLE9BQU8sRUFBRTs7Ozs7ZUFKckIsUUFBUSxHQUFHLEVBQUU7ZUFDYixRQUFRLEdBQUcsRUFBRTtlQUNiLEtBQUssR0FBRyxFQUFFOztBQU9SLGNBQUksQ0FBQyxLQUFLLEdBQUcsWUFBTTtBQUNqQixnQkFBSSxNQUFLLFFBQVEsSUFBSSxNQUFLLFFBQVEsRUFBRTtBQUNsQyxxQkFBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QixNQUFNO0FBQ0wsb0JBQUssS0FBSyxHQUFHLHVDQUF1QyxDQUFDO2FBQ3REO1dBQ0YsQ0FBQTtTQUNGOztxQkFsQlUsS0FBSztBQUFMLGFBQUssR0FEakIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUNILEtBQUssS0FBTCxLQUFLO2VBQUwsS0FBSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGluamVjdCwgQXVyZWxpYSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbi8vIEZpcnN0LCB3ZSBtdXN0IGluamVjdCB0aGUgQXVyZWxpYSBvYmplY3QuIFRoaXMgaXMgdGhlIHNhbWUgQXVyZWxpYSBvYmplY3RcclxuLy8gcGFzc2VkIGludG8gb3VyIGNvbmZpZ3VyZSBmdW5jdGlvbiBvbiBtYWluLmpzLlxyXG5AaW5qZWN0KEF1cmVsaWEpXHJcbmV4cG9ydCBjbGFzcyBMb2dpbiB7XHJcbiAgXHJcbiAgdXNlcm5hbWUgPSAnJztcclxuICBwYXNzd29yZCA9ICcnO1xyXG4gIGVycm9yID0gJyc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKGF1cmVsaWEpIHtcclxuXHJcbiAgICAvLyBPbmNlIHdlIGhhdmUgYWNjZXNzIHRvIHRoZSBBdXJlbGlhIG9iamVjdCwgd2UgY2FuIHVzZSBpdCBmcm9tXHJcbiAgICAvLyB3aXRoaW4gb3VyIGxvZ2luIGZ1bmN0aW9uIHRvIHNldCB0aGUgbmV3IHJvb3QgdmlldyBtb2RlbCB0byBcclxuICAgIC8vIG91ciBtYWluIEFwcCBvbiBzdWNjZXNmdWwgbG9naW4uXHJcbiAgICB0aGlzLmxvZ2luID0gKCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy51c2VybmFtZSAmJiB0aGlzLnBhc3N3b3JkKSB7XHJcbiAgICAgICAgYXVyZWxpYS5zZXRSb290KCdhcHAnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmVycm9yID0gJ1BsZWFzZSBlbnRlciBhIHVzZXJuYW1lIGFuZCBwYXNzd29yZC4nO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==