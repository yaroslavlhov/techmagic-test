'use strict';

var app = angular.module('testapp', ['ui.router', 'ui.bootstrap', 'ngAnimate']).constant('SKILLS', [{ name: 'Javascript', color: '#7ec0ff', id: '1' }, { name: 'Java', color: '#4b90d7', id: '2' }, { name: 'Python', color: '#235d9b', id: '3' }, { name: 'C++', color: '#d2e9ff', id: '4' }]);

if (!Array.prototype.findIndex) {
  Array.prototype.findIndex = function (predicate) {
    if (this == null) {
      throw new TypeError('Array.prototype.findIndex called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return i;
      }
    }
    return -1;
  };
}

if (!Array.prototype.fill) {
  Array.prototype.fill = function (value) {

    if (this == null) {
      throw new TypeError('this is null or not defined');
    }

    var O = Object(this);
    var len = O.length >>> 0;

    var start = arguments[1];
    var relativeStart = start >> 0;

    var k = relativeStart < 0 ? Math.max(len + relativeStart, 0) : Math.min(relativeStart, len);

    var end = arguments[2];
    var relativeEnd = end === undefined ? len : end >> 0;

    var final = relativeEnd < 0 ? Math.max(len + relativeEnd, 0) : Math.min(relativeEnd, len);

    while (k < final) {
      O[k] = value;
      k++;
    }

    return O;
  };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJhcHAiLCJhbmd1bGFyIiwibW9kdWxlIiwiY29uc3RhbnQiLCJuYW1lIiwiY29sb3IiLCJpZCIsIkFycmF5IiwicHJvdG90eXBlIiwiZmluZEluZGV4IiwicHJlZGljYXRlIiwiVHlwZUVycm9yIiwibGlzdCIsIk9iamVjdCIsImxlbmd0aCIsInRoaXNBcmciLCJhcmd1bWVudHMiLCJ2YWx1ZSIsImkiLCJjYWxsIiwiZmlsbCIsIk8iLCJsZW4iLCJzdGFydCIsInJlbGF0aXZlU3RhcnQiLCJrIiwiTWF0aCIsIm1heCIsIm1pbiIsImVuZCIsInJlbGF0aXZlRW5kIiwidW5kZWZpbmVkIiwiZmluYWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUFBLElBQUlBLE1BQU1DLFFBQVFDLE9BQU8sV0FBVyxDQUNsQyxhQUNBLGdCQUNBLGNBQ0NDLFNBQVMsVUFBVSxDQUNwQixFQUFDQyxNQUFNLGNBQWNDLE9BQU8sV0FBV0MsSUFBSSxPQUMzQyxFQUFDRixNQUFNLFFBQVFDLE9BQU8sV0FBV0MsSUFBSSxPQUNyQyxFQUFDRixNQUFNLFVBQVVDLE9BQU8sV0FBV0MsSUFBSSxPQUN2QyxFQUFDRixNQUFNLE9BQU9DLE9BQU8sV0FBV0MsSUFBSTs7QUFHdEMsSUFBSSxDQUFDQyxNQUFNQyxVQUFVQyxXQUFXO0VBQzlCRixNQUFNQyxVQUFVQyxZQUFZLFVBQVVDLFdBQVc7SUFDL0MsSUFBSSxRQUFRLE1BQU07TUFDaEIsTUFBTSxJQUFJQyxVQUFVOztJQUV0QixJQUFJLE9BQU9ELGNBQWMsWUFBWTtNQUNuQyxNQUFNLElBQUlDLFVBQVU7O0lBRXRCLElBQUlDLE9BQU9DLE9BQU87SUFDbEIsSUFBSUMsU0FBU0YsS0FBS0UsV0FBVztJQUM3QixJQUFJQyxVQUFVQyxVQUFVO0lBQ3hCLElBQUlDOztJQUVKLEtBQUssSUFBSUMsSUFBSSxHQUFHQSxJQUFJSixRQUFRSSxLQUFLO01BQy9CRCxRQUFRTCxLQUFLTTtNQUNiLElBQUlSLFVBQVVTLEtBQUtKLFNBQVNFLE9BQU9DLEdBQUdOLE9BQU87UUFDM0MsT0FBT007OztJQUdYLE9BQU8sQ0FBQzs7OztBQUlaLElBQUksQ0FBQ1gsTUFBTUMsVUFBVVksTUFBTTtFQUN6QmIsTUFBTUMsVUFBVVksT0FBTyxVQUFVSCxPQUFPOztJQUV0QyxJQUFJLFFBQVEsTUFBTTtNQUNoQixNQUFNLElBQUlOLFVBQVU7OztJQUd0QixJQUFJVSxJQUFJUixPQUFPO0lBQ2YsSUFBSVMsTUFBTUQsRUFBRVAsV0FBVzs7SUFFdkIsSUFBSVMsUUFBUVAsVUFBVTtJQUN0QixJQUFJUSxnQkFBZ0JELFNBQVM7O0lBRTdCLElBQUlFLElBQUlELGdCQUFnQixJQUN0QkUsS0FBS0MsSUFBSUwsTUFBTUUsZUFBZSxLQUM5QkUsS0FBS0UsSUFBSUosZUFBZUY7O0lBRTFCLElBQUlPLE1BQU1iLFVBQVU7SUFDcEIsSUFBSWMsY0FBY0QsUUFBUUUsWUFDeEJULE1BQU1PLE9BQU87O0lBRWYsSUFBSUcsUUFBUUYsY0FBYyxJQUN4QkosS0FBS0MsSUFBSUwsTUFBTVEsYUFBYSxLQUM1QkosS0FBS0UsSUFBSUUsYUFBYVI7O0lBRXhCLE9BQU9HLElBQUlPLE9BQU87TUFDaEJYLEVBQUVJLEtBQUtSO01BQ1BROzs7SUFHRixPQUFPSjs7Q0FFViIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3Rlc3RhcHAnLCBbXG4gICd1aS5yb3V0ZXInLFxuICAndWkuYm9vdHN0cmFwJyxcbiAgJ25nQW5pbWF0ZScsXG5dKS5jb25zdGFudCgnU0tJTExTJywgW1xuICB7bmFtZTogJ0phdmFzY3JpcHQnLCBjb2xvcjogJyM3ZWMwZmYnLCBpZDogJzEnfSxcbiAge25hbWU6ICdKYXZhJywgY29sb3I6ICcjNGI5MGQ3JywgaWQ6ICcyJ30sXG4gIHtuYW1lOiAnUHl0aG9uJywgY29sb3I6ICcjMjM1ZDliJywgaWQ6ICczJ30sXG4gIHtuYW1lOiAnQysrJywgY29sb3I6ICcjZDJlOWZmJywgaWQ6ICc0J30sXG4gIF0pO1xuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgpIHtcbiAgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleCA9IGZ1bmN0aW9uIChwcmVkaWNhdGUpIHtcbiAgICBpZiAodGhpcyA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5wcm90b3R5cGUuZmluZEluZGV4IGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHByZWRpY2F0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncHJlZGljYXRlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgIH1cbiAgICB2YXIgbGlzdCA9IE9iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gbGlzdC5sZW5ndGggPj4+IDA7XG4gICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHNbMV07XG4gICAgdmFyIHZhbHVlO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWUgPSBsaXN0W2ldO1xuICAgICAgaWYgKHByZWRpY2F0ZS5jYWxsKHRoaXNBcmcsIHZhbHVlLCBpLCBsaXN0KSkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9O1xufVxuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5maWxsKSB7XG4gIEFycmF5LnByb3RvdHlwZS5maWxsID0gZnVuY3Rpb24gKHZhbHVlKSB7XG5cbiAgICBpZiAodGhpcyA9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCd0aGlzIGlzIG51bGwgb3Igbm90IGRlZmluZWQnKTtcbiAgICB9XG5cbiAgICB2YXIgTyA9IE9iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuID0gTy5sZW5ndGggPj4+IDA7XG5cbiAgICB2YXIgc3RhcnQgPSBhcmd1bWVudHNbMV07XG4gICAgdmFyIHJlbGF0aXZlU3RhcnQgPSBzdGFydCA+PiAwO1xuXG4gICAgdmFyIGsgPSByZWxhdGl2ZVN0YXJ0IDwgMCA/XG4gICAgICBNYXRoLm1heChsZW4gKyByZWxhdGl2ZVN0YXJ0LCAwKSA6XG4gICAgICBNYXRoLm1pbihyZWxhdGl2ZVN0YXJ0LCBsZW4pO1xuXG4gICAgdmFyIGVuZCA9IGFyZ3VtZW50c1syXTtcbiAgICB2YXIgcmVsYXRpdmVFbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/XG4gICAgICBsZW4gOiBlbmQgPj4gMDtcblxuICAgIHZhciBmaW5hbCA9IHJlbGF0aXZlRW5kIDwgMCA/XG4gICAgICBNYXRoLm1heChsZW4gKyByZWxhdGl2ZUVuZCwgMCkgOlxuICAgICAgTWF0aC5taW4ocmVsYXRpdmVFbmQsIGxlbik7XG5cbiAgICB3aGlsZSAoayA8IGZpbmFsKSB7XG4gICAgICBPW2tdID0gdmFsdWU7XG4gICAgICBrKys7XG4gICAgfVxuXG4gICAgcmV0dXJuIE87XG4gIH07XG59Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

'use strict';

(function () {

  'use strict';
  /**@ngInject*/

  app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/people');

    $stateProvider.state('people', {
      url: '/people',
      templateUrl: 'pages/people.html',
      controller: 'PeopleCtrl'
    }).state('visuals', {
      url: '/visuals',
      templateUrl: 'pages/visuals.html',
      controller: 'VisualsCtrl'
    });
  }]);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5yb3V0ZS5qcyJdLCJuYW1lcyI6WyJhcHAiLCJjb25maWciLCIkc3RhdGVQcm92aWRlciIsIiR1cmxSb3V0ZXJQcm92aWRlciIsIm90aGVyd2lzZSIsInN0YXRlIiwidXJsIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFBQSxDQUFDLFlBQU07O0VBRUw7OztFQUdBQSxJQUFJQyxnREFBTyxVQUFVQyxnQkFBZ0JDLG9CQUFvQjs7SUFFdkRBLG1CQUFtQkMsVUFBVTs7SUFFN0JGLGVBQ0dHLE1BQU0sVUFBVTtNQUNmQyxLQUFLO01BQ0xDLGFBQWE7TUFDYkMsWUFBWTtPQUViSCxNQUFNLFdBQVc7TUFDaEJDLEtBQUs7TUFDTEMsYUFBYTtNQUNiQyxZQUFZOzs7S0FsQnBCIiwiZmlsZSI6ImFwcC5yb3V0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuICAvKipAbmdJbmplY3QqL1xuXG4gIGFwcC5jb25maWcoZnVuY3Rpb24gKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy9wZW9wbGUnKTtcblxuICAgICRzdGF0ZVByb3ZpZGVyXG4gICAgICAuc3RhdGUoJ3Blb3BsZScsIHtcbiAgICAgICAgdXJsOiAnL3Blb3BsZScsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvcGVvcGxlLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnUGVvcGxlQ3RybCdcbiAgICAgIH0pXG4gICAgICAuc3RhdGUoJ3Zpc3VhbHMnLCB7XG4gICAgICAgIHVybDogJy92aXN1YWxzJyxcbiAgICAgICAgdGVtcGxhdGVVcmw6ICdwYWdlcy92aXN1YWxzLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnVmlzdWFsc0N0cmwnXG4gICAgICB9KTtcblxuICB9KTtcblxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

'use strict';

(function () {

  'use strict';
  /**@ngInject*/

  app.controller('PeopleCtrl', ["UsersFactory", "$scope", "$uibModal", "SKILLS", function (UsersFactory, $scope, $uibModal, SKILLS) {

    $scope.getUsers = getUsers;
    $scope.openModal = openModal;
    $scope.deleteUser = deleteUser;

    $scope.levels = [0, 1, 2];
    $scope.users = UsersFactory;
    $scope.newuser = {
      name: '',
      age: 18,
      skill: SKILLS[0].name,
      level: 1
    };

    function getUsers() {
      return $scope.users.filter(function (user) {
        if (!$scope.search) return true;
        for (var attr in user) {
          var prop = user[attr].toString().toLocaleLowerCase();
          if (prop.indexOf($scope.search) !== -1) return true;
        }
        return false;
      });
    }

    function deleteUser(id) {
      var index = $scope.users.findIndex(function (user) {
        return user.id == id;
      });
      if (index >= 0) {
        $scope.users.splice(index, 1);
      }
    }

    function openModal(_user) {
      $uibModal.open({
        animation: true,
        ariaLabelledBy: 'modal-title',
        ariaDescribedBy: 'modal-body',
        templateUrl: 'pages/user-info.html',
        controller: 'UserInfoCtrl',
        size: 'md',
        resolve: {
          user: function user() {
            return _user;
          }
        }
      }).result.then(function (res) {}, function () {});
    }
  }]);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3Blb3BsZS5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImFwcCIsImNvbnRyb2xsZXIiLCJVc2Vyc0ZhY3RvcnkiLCIkc2NvcGUiLCIkdWliTW9kYWwiLCJTS0lMTFMiLCJnZXRVc2VycyIsIm9wZW5Nb2RhbCIsImRlbGV0ZVVzZXIiLCJsZXZlbHMiLCJ1c2VycyIsIm5ld3VzZXIiLCJuYW1lIiwiYWdlIiwic2tpbGwiLCJsZXZlbCIsImZpbHRlciIsInVzZXIiLCJzZWFyY2giLCJhdHRyIiwicHJvcCIsInRvU3RyaW5nIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJpbmRleE9mIiwiaWQiLCJpbmRleCIsImZpbmRJbmRleCIsInNwbGljZSIsIm9wZW4iLCJhbmltYXRpb24iLCJhcmlhTGFiZWxsZWRCeSIsImFyaWFEZXNjcmliZWRCeSIsInRlbXBsYXRlVXJsIiwic2l6ZSIsInJlc29sdmUiLCJyZXN1bHQiLCJ0aGVuIiwicmVzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFBQSxDQUFDLFlBQU07O0VBRUw7OztFQUdBQSxJQUNHQyxXQUFXLGdFQUFjLFVBQUNDLGNBQWNDLFFBQVFDLFdBQVdDLFFBQVc7O0lBRXJFRixPQUFPRyxXQUFXQTtJQUNsQkgsT0FBT0ksWUFBWUE7SUFDbkJKLE9BQU9LLGFBQWFBOztJQUVwQkwsT0FBT00sU0FBUyxDQUFDLEdBQUcsR0FBRztJQUN2Qk4sT0FBT08sUUFBUVI7SUFDZkMsT0FBT1EsVUFBVTtNQUNmQyxNQUFNO01BQ05DLEtBQUs7TUFDTEMsT0FBT1QsT0FBTyxHQUFHTztNQUNqQkcsT0FBTzs7O0lBR1QsU0FBU1QsV0FBVztNQUNsQixPQUFPSCxPQUFPTyxNQUFNTSxPQUFPLFVBQUNDLE1BQVM7UUFDbkMsSUFBSSxDQUFDZCxPQUFPZSxRQUFRLE9BQU87UUFDM0IsS0FBSyxJQUFJQyxRQUFRRixNQUFNO1VBQ3JCLElBQUlHLE9BQU9ILEtBQUtFLE1BQU1FLFdBQVdDO1VBQ2pDLElBQUlGLEtBQUtHLFFBQVFwQixPQUFPZSxZQUFZLENBQUMsR0FBRyxPQUFPOztRQUVqRCxPQUFPOzs7O0lBSVgsU0FBU1YsV0FBV2dCLElBQUk7TUFDdEIsSUFBSUMsUUFBUXRCLE9BQU9PLE1BQU1nQixVQUFVLFVBQUNULE1BQUQ7UUFBQSxPQUFVQSxLQUFLTyxNQUFNQTs7TUFDeEQsSUFBSUMsU0FBUyxHQUFHO1FBQ2R0QixPQUFPTyxNQUFNaUIsT0FBT0YsT0FBTzs7OztJQUkvQixTQUFTbEIsVUFBVVUsT0FBTTtNQUN2QmIsVUFBVXdCLEtBQUs7UUFDYkMsV0FBVztRQUNYQyxnQkFBZ0I7UUFDaEJDLGlCQUFpQjtRQUNqQkMsYUFBYTtRQUNiL0IsWUFBWTtRQUNaZ0MsTUFBTTtRQUNOQyxTQUFTO1VBQ1BqQixNQUFNLFNBQUEsT0FBQTtZQUFBLE9BQU1BOzs7U0FFYmtCLE9BQU9DLEtBQUssVUFBQ0MsS0FBUSxJQUNyQixZQUFNOzs7S0FuRGpCIiwiZmlsZSI6ImNvbnRyb2xsZXJzL3Blb3BsZS5jb250cm9sbGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcblxuICAndXNlIHN0cmljdCc7XG4gIC8qKkBuZ0luamVjdCovXG5cbiAgYXBwXG4gICAgLmNvbnRyb2xsZXIoJ1Blb3BsZUN0cmwnLCAoVXNlcnNGYWN0b3J5LCAkc2NvcGUsICR1aWJNb2RhbCwgU0tJTExTKSA9PiB7XG5cbiAgICAgICRzY29wZS5nZXRVc2VycyA9IGdldFVzZXJzO1xuICAgICAgJHNjb3BlLm9wZW5Nb2RhbCA9IG9wZW5Nb2RhbDtcbiAgICAgICRzY29wZS5kZWxldGVVc2VyID0gZGVsZXRlVXNlcjtcblxuICAgICAgJHNjb3BlLmxldmVscyA9IFswLCAxLCAyXTtcbiAgICAgICRzY29wZS51c2VycyA9IFVzZXJzRmFjdG9yeTtcbiAgICAgICRzY29wZS5uZXd1c2VyID0ge1xuICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgYWdlOiAxOCxcbiAgICAgICAgc2tpbGw6IFNLSUxMU1swXS5uYW1lLFxuICAgICAgICBsZXZlbDogMVxuICAgICAgfTtcblxuICAgICAgZnVuY3Rpb24gZ2V0VXNlcnMoKSB7XG4gICAgICAgIHJldHVybiAkc2NvcGUudXNlcnMuZmlsdGVyKCh1c2VyKSA9PiB7XG4gICAgICAgICAgaWYgKCEkc2NvcGUuc2VhcmNoKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICBmb3IgKGxldCBhdHRyIGluIHVzZXIpIHtcbiAgICAgICAgICAgIGxldCBwcm9wID0gdXNlclthdHRyXS50b1N0cmluZygpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgICAgICAgICBpZiAocHJvcC5pbmRleE9mKCRzY29wZS5zZWFyY2gpICE9PSAtMSkgcmV0dXJuIHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gZGVsZXRlVXNlcihpZCkge1xuICAgICAgICBsZXQgaW5kZXggPSAkc2NvcGUudXNlcnMuZmluZEluZGV4KCh1c2VyKSA9PiB1c2VyLmlkID09IGlkKTtcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAkc2NvcGUudXNlcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBvcGVuTW9kYWwodXNlcikge1xuICAgICAgICAkdWliTW9kYWwub3Blbih7XG4gICAgICAgICAgYW5pbWF0aW9uOiB0cnVlLFxuICAgICAgICAgIGFyaWFMYWJlbGxlZEJ5OiAnbW9kYWwtdGl0bGUnLFxuICAgICAgICAgIGFyaWFEZXNjcmliZWRCeTogJ21vZGFsLWJvZHknLFxuICAgICAgICAgIHRlbXBsYXRlVXJsOiAncGFnZXMvdXNlci1pbmZvLmh0bWwnLFxuICAgICAgICAgIGNvbnRyb2xsZXI6ICdVc2VySW5mb0N0cmwnLFxuICAgICAgICAgIHNpemU6ICdtZCcsXG4gICAgICAgICAgcmVzb2x2ZToge1xuICAgICAgICAgICAgdXNlcjogKCkgPT4gdXNlcixcbiAgICAgICAgICB9XG4gICAgICAgIH0pLnJlc3VsdC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgfSwgKCkgPT4ge1xuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfSk7XG59KSgpOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==

'use strict';

(function () {

  'use strict';
  /**@ngInject*/

  app.controller('UserInfoCtrl', ["user", "$scope", "$uibModalInstance", "UsersFactory", "SKILLS", function (user, $scope, $uibModalInstance, UsersFactory, SKILLS) {

    $scope.close = close;
    $scope.getArray = getArray;
    $scope.saveUser = saveUser;

    $scope.user = angular.copy(user);
    $scope.skills = SKILLS;

    function close() {
      $uibModalInstance.close();
    }

    function saveUser() {
      var users = UsersFactory;
      if (!$scope.user.id) {
        if (users.length) {
          $scope.user.id = users[users.length - 1].id + 1;
        } else {
          $scope.user.id = 1;
        }
        users.push($scope.user);
      } else {
        var index = users.findIndex(function (user) {
          return user.id == $scope.user.id;
        });
        if (index >= 0) {
          users[index] = $scope.user;
        }
      }
      close();
    }

    function getArray(count, inc) {
      var array = new Array(count);
      array.fill(1);
      array.forEach(function (item, index) {
        array[index] = index + inc;
      });
      return array;
    }
  }]);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3VzZXItaW5mby5jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbImFwcCIsImNvbnRyb2xsZXIiLCJ1c2VyIiwiJHNjb3BlIiwiJHVpYk1vZGFsSW5zdGFuY2UiLCJVc2Vyc0ZhY3RvcnkiLCJTS0lMTFMiLCJjbG9zZSIsImdldEFycmF5Iiwic2F2ZVVzZXIiLCJhbmd1bGFyIiwiY29weSIsInNraWxscyIsInVzZXJzIiwiaWQiLCJsZW5ndGgiLCJwdXNoIiwiaW5kZXgiLCJmaW5kSW5kZXgiLCJjb3VudCIsImluYyIsImFycmF5IiwiQXJyYXkiLCJmaWxsIiwiZm9yRWFjaCIsIml0ZW0iXSwibWFwcGluZ3MiOiJBQUFBOztBQUFBLENBQUMsWUFBTTs7RUFFTDs7O0VBR0FBLElBQ0dDLFdBQVcsa0ZBQWdCLFVBQUNDLE1BQU1DLFFBQVFDLG1CQUFtQkMsY0FBY0MsUUFBVzs7SUFFckZILE9BQU9JLFFBQVFBO0lBQ2ZKLE9BQU9LLFdBQVdBO0lBQ2xCTCxPQUFPTSxXQUFXQTs7SUFFbEJOLE9BQU9ELE9BQU9RLFFBQVFDLEtBQUtUO0lBQzNCQyxPQUFPUyxTQUFTTjs7SUFFaEIsU0FBU0MsUUFBUTtNQUNmSCxrQkFBa0JHOzs7SUFHcEIsU0FBU0UsV0FBVztNQUNsQixJQUFJSSxRQUFRUjtNQUNaLElBQUksQ0FBQ0YsT0FBT0QsS0FBS1ksSUFBSTtRQUNuQixJQUFJRCxNQUFNRSxRQUFRO1VBQ2hCWixPQUFPRCxLQUFLWSxLQUFLRCxNQUFNQSxNQUFNRSxTQUFTLEdBQUdELEtBQUs7ZUFDekM7VUFDTFgsT0FBT0QsS0FBS1ksS0FBSzs7UUFFbkJELE1BQU1HLEtBQUtiLE9BQU9EO2FBQ2I7UUFDTCxJQUFJZSxRQUFRSixNQUFNSyxVQUFVLFVBQUNoQixNQUFEO1VBQUEsT0FBVUEsS0FBS1ksTUFBTVgsT0FBT0QsS0FBS1k7O1FBQzdELElBQUlHLFNBQVMsR0FBRztVQUNkSixNQUFNSSxTQUFTZCxPQUFPRDs7O01BRzFCSzs7O0lBR0YsU0FBU0MsU0FBU1csT0FBT0MsS0FBSztNQUM1QixJQUFJQyxRQUFRLElBQUlDLE1BQU1IO01BQ3RCRSxNQUFNRSxLQUFLO01BQ1hGLE1BQU1HLFFBQVEsVUFBQ0MsTUFBTVIsT0FBVTtRQUM3QkksTUFBTUosU0FBU0EsUUFBUUc7O01BRXpCLE9BQU9DOzs7S0EzQ2YiLCJmaWxlIjoiY29udHJvbGxlcnMvdXNlci1pbmZvLmNvbnRyb2xsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoKCkgPT4ge1xuXG4gICd1c2Ugc3RyaWN0JztcbiAgLyoqQG5nSW5qZWN0Ki9cblxuICBhcHBcbiAgICAuY29udHJvbGxlcignVXNlckluZm9DdHJsJywgKHVzZXIsICRzY29wZSwgJHVpYk1vZGFsSW5zdGFuY2UsIFVzZXJzRmFjdG9yeSwgU0tJTExTKSA9PiB7XG5cbiAgICAgICRzY29wZS5jbG9zZSA9IGNsb3NlO1xuICAgICAgJHNjb3BlLmdldEFycmF5ID0gZ2V0QXJyYXk7XG4gICAgICAkc2NvcGUuc2F2ZVVzZXIgPSBzYXZlVXNlcjtcblxuICAgICAgJHNjb3BlLnVzZXIgPSBhbmd1bGFyLmNvcHkodXNlcik7XG4gICAgICAkc2NvcGUuc2tpbGxzID0gU0tJTExTO1xuXG4gICAgICBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICAgICAgJHVpYk1vZGFsSW5zdGFuY2UuY2xvc2UoKTtcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gc2F2ZVVzZXIoKSB7XG4gICAgICAgIGxldCB1c2VycyA9IFVzZXJzRmFjdG9yeTtcbiAgICAgICAgaWYgKCEkc2NvcGUudXNlci5pZCkge1xuICAgICAgICAgIGlmICh1c2Vycy5sZW5ndGgpIHtcbiAgICAgICAgICAgICRzY29wZS51c2VyLmlkID0gdXNlcnNbdXNlcnMubGVuZ3RoIC0gMV0uaWQgKyAxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkc2NvcGUudXNlci5pZCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHVzZXJzLnB1c2goJHNjb3BlLnVzZXIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGxldCBpbmRleCA9IHVzZXJzLmZpbmRJbmRleCgodXNlcikgPT4gdXNlci5pZCA9PSAkc2NvcGUudXNlci5pZCk7XG4gICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgICAgICAgIHVzZXJzW2luZGV4XSA9ICRzY29wZS51c2VyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjbG9zZSgpO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRBcnJheShjb3VudCwgaW5jKSB7XG4gICAgICAgIGxldCBhcnJheSA9IG5ldyBBcnJheShjb3VudCk7XG4gICAgICAgIGFycmF5LmZpbGwoMSk7XG4gICAgICAgIGFycmF5LmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgYXJyYXlbaW5kZXhdID0gaW5kZXggKyBpbmM7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgICB9XG5cbiAgICB9KTtcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

'use strict';

(function () {

  'use strict';
  /**@ngInject*/

  app.controller('VisualsCtrl', ["$scope", "UsersFactory", "SKILLS", function ($scope, UsersFactory, SKILLS) {

    $scope.levelData = [{
      value: getPropertyLength('level', 3),
      color: "#235d9b"
    }, {
      value: getPropertyLength('level', 2),
      color: "#4b90d7"
    }, {
      value: getPropertyLength('level', 1),
      color: '#7ec0ff'
    }];

    $scope.ageData = [{
      value: getAgeLength(33, 100),
      color: "#235d9b"
    }, {
      value: getAgeLength(26, 32),
      color: "#4b90d7"
    }, {
      value: getAgeLength(18, 25),
      color: '#7ec0ff'
    }];

    $scope.skillData = SKILLS.map(function (skill) {
      return {
        value: getPropertyLength('skill', skill.name),
        color: skill.color
      };
    });

    function getPropertyLength(prop, value) {
      return UsersFactory.filter(function (user) {
        return user[prop] == value;
      }).length;
    }

    function getAgeLength(min, max) {
      return UsersFactory.filter(function (user) {
        return user.age >= min && user.age <= max;
      }).length;
    }
  }]);
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRyb2xsZXJzL3Zpc3VhbHMuY29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJhcHAiLCJjb250cm9sbGVyIiwiJHNjb3BlIiwiVXNlcnNGYWN0b3J5IiwiU0tJTExTIiwibGV2ZWxEYXRhIiwidmFsdWUiLCJnZXRQcm9wZXJ0eUxlbmd0aCIsImNvbG9yIiwiYWdlRGF0YSIsImdldEFnZUxlbmd0aCIsInNraWxsRGF0YSIsIm1hcCIsInNraWxsIiwibmFtZSIsInByb3AiLCJmaWx0ZXIiLCJ1c2VyIiwibGVuZ3RoIiwibWluIiwibWF4IiwiYWdlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFBQSxDQUFDLFlBQU07O0VBRUw7OztFQUdBQSxJQUNHQyxXQUFXLG9EQUFlLFVBQUNDLFFBQVFDLGNBQWNDLFFBQVc7O0lBRTNERixPQUFPRyxZQUFZLENBQ2pCO01BQ0VDLE9BQU9DLGtCQUFrQixTQUFTO01BQ2xDQyxPQUFPO09BRVQ7TUFDRUYsT0FBT0Msa0JBQWtCLFNBQVM7TUFDbENDLE9BQU87T0FFVDtNQUNFRixPQUFPQyxrQkFBa0IsU0FBUztNQUNsQ0MsT0FBTzs7O0lBSVhOLE9BQU9PLFVBQVUsQ0FDZjtNQUNFSCxPQUFPSSxhQUFhLElBQUk7TUFDeEJGLE9BQU87T0FFVDtNQUNFRixPQUFPSSxhQUFhLElBQUk7TUFDeEJGLE9BQU87T0FFVDtNQUNFRixPQUFPSSxhQUFhLElBQUk7TUFDeEJGLE9BQU87OztJQUlYTixPQUFPUyxZQUFZUCxPQUFPUSxJQUFJLFVBQUNDLE9BQVE7TUFDckMsT0FBTTtRQUNKUCxPQUFPQyxrQkFBa0IsU0FBU00sTUFBTUM7UUFDeENOLE9BQU9LLE1BQU1MOzs7O0lBSWpCLFNBQVNELGtCQUFrQlEsTUFBTVQsT0FBTztNQUN0QyxPQUFPSCxhQUFhYSxPQUFPLFVBQUNDLE1BQUQ7UUFBQSxPQUFVQSxLQUFLRixTQUFTVDtTQUFPWTs7O0lBRzVELFNBQVNSLGFBQWFTLEtBQUtDLEtBQUs7TUFDOUIsT0FBT2pCLGFBQWFhLE9BQU8sVUFBQ0MsTUFBRDtRQUFBLE9BQVVBLEtBQUtJLE9BQU9GLE9BQU9GLEtBQUtJLE9BQU9EO1NBQUtGOzs7S0FsRGpGIiwiZmlsZSI6ImNvbnRyb2xsZXJzL3Zpc3VhbHMuY29udHJvbGxlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XG5cbiAgJ3VzZSBzdHJpY3QnO1xuICAvKipAbmdJbmplY3QqL1xuXG4gIGFwcFxuICAgIC5jb250cm9sbGVyKCdWaXN1YWxzQ3RybCcsICgkc2NvcGUsIFVzZXJzRmFjdG9yeSwgU0tJTExTKSA9PiB7XG5cbiAgICAgICRzY29wZS5sZXZlbERhdGEgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogZ2V0UHJvcGVydHlMZW5ndGgoJ2xldmVsJywgMyksXG4gICAgICAgICAgY29sb3I6IFwiIzIzNWQ5YlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogZ2V0UHJvcGVydHlMZW5ndGgoJ2xldmVsJywgMiksXG4gICAgICAgICAgY29sb3I6IFwiIzRiOTBkN1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogZ2V0UHJvcGVydHlMZW5ndGgoJ2xldmVsJywgMSksXG4gICAgICAgICAgY29sb3I6ICcjN2VjMGZmJ1xuICAgICAgICB9XG4gICAgICBdO1xuXG4gICAgICAkc2NvcGUuYWdlRGF0YSA9IFtcbiAgICAgICAge1xuICAgICAgICAgIHZhbHVlOiBnZXRBZ2VMZW5ndGgoMzMsIDEwMCksXG4gICAgICAgICAgY29sb3I6IFwiIzIzNWQ5YlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogZ2V0QWdlTGVuZ3RoKDI2LCAzMiksXG4gICAgICAgICAgY29sb3I6IFwiIzRiOTBkN1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICB2YWx1ZTogZ2V0QWdlTGVuZ3RoKDE4LCAyNSksXG4gICAgICAgICAgY29sb3I6ICcjN2VjMGZmJ1xuICAgICAgICB9XG4gICAgICBdO1xuXG4gICAgICAkc2NvcGUuc2tpbGxEYXRhID0gU0tJTExTLm1hcCgoc2tpbGwpPT57XG4gICAgICAgIHJldHVybntcbiAgICAgICAgICB2YWx1ZTogZ2V0UHJvcGVydHlMZW5ndGgoJ3NraWxsJywgc2tpbGwubmFtZSksXG4gICAgICAgICAgY29sb3I6IHNraWxsLmNvbG9yXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBmdW5jdGlvbiBnZXRQcm9wZXJ0eUxlbmd0aChwcm9wLCB2YWx1ZSkge1xuICAgICAgICByZXR1cm4gVXNlcnNGYWN0b3J5LmZpbHRlcigodXNlcikgPT4gdXNlcltwcm9wXSA9PSB2YWx1ZSkubGVuZ3RoO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBnZXRBZ2VMZW5ndGgobWluLCBtYXgpIHtcbiAgICAgICAgcmV0dXJuIFVzZXJzRmFjdG9yeS5maWx0ZXIoKHVzZXIpID0+IHVzZXIuYWdlID49IG1pbiAmJiB1c2VyLmFnZSA8PSBtYXgpLmxlbmd0aDtcbiAgICAgIH1cblxuICAgIH0pO1xufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=

"use strict";

(function () {
  "use strict";

  app.directive("pieChart", function () {
    return {
      restrict: "A",
      scope: {
        data: "="
      },
      link: function link(scope, element) {
        var width = void 0,
            height = void 0,
            radius = void 0,
            pie = void 0,
            arc = void 0,
            svg = void 0,
            path = void 0;

        width = element[0].clientWidth;
        height = element[0].clientHeight;
        radius = Math.min(width, height) / 2;

        pie = d3.layout.pie().value(function (d) {
          return d.value;
        }).sort(null);

        arc = d3.svg.arc().outerRadius(radius);

        svg = d3.select(element[0]).append("svg").attr({ width: width, height: height }).append("g").attr("transform", "translate(" + width * 0.5 + "," + height * 0.5 + ")");

        path = svg.datum(scope.data).selectAll("path").data(pie).enter().append("path").attr({
          fill: function fill(d, i) {
            return scope.data[i].color || '#' + Math.floor(Math.random() * 16777215).toString(16);
          },
          d: arc
        });

        scope.$watch("data", function () {
          pie.value(function (d) {
            return d.value;
          });
          path = path.data(pie);
          path.attr("d", arc);
        }, true);
      }
    };
  });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpcmVjdGl2ZXMvcGllLWNoYXJ0LmRpcmVjdGl2ZS5qcyJdLCJuYW1lcyI6WyJhcHAiLCJkaXJlY3RpdmUiLCJyZXN0cmljdCIsInNjb3BlIiwiZGF0YSIsImxpbmsiLCJlbGVtZW50Iiwid2lkdGgiLCJoZWlnaHQiLCJyYWRpdXMiLCJwaWUiLCJhcmMiLCJzdmciLCJwYXRoIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJNYXRoIiwibWluIiwiZDMiLCJsYXlvdXQiLCJ2YWx1ZSIsImQiLCJzb3J0Iiwib3V0ZXJSYWRpdXMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwiZGF0dW0iLCJzZWxlY3RBbGwiLCJlbnRlciIsImZpbGwiLCJpIiwiY29sb3IiLCJmbG9vciIsInJhbmRvbSIsInRvU3RyaW5nIiwiJHdhdGNoIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFBQSxDQUFDLFlBQU07RUFDTDs7RUFDQUEsSUFBSUMsVUFBVSxZQUFZLFlBQU07SUFDOUIsT0FBTztNQUNMQyxVQUFVO01BQ1ZDLE9BQU87UUFDTEMsTUFBTTs7TUFFUkMsTUFBTSxTQUFBLEtBQUNGLE9BQU9HLFNBQVk7UUFDeEIsSUFBSUMsUUFBQUEsS0FBQUE7WUFDRkMsU0FBQUEsS0FBQUE7WUFDQUMsU0FBQUEsS0FBQUE7WUFDQUMsTUFBQUEsS0FBQUE7WUFDQUMsTUFBQUEsS0FBQUE7WUFDQUMsTUFBQUEsS0FBQUE7WUFDQUMsT0FBQUEsS0FBQUE7O1FBRUZOLFFBQVFELFFBQVEsR0FBR1E7UUFDbkJOLFNBQVNGLFFBQVEsR0FBR1M7UUFDcEJOLFNBQVNPLEtBQUtDLElBQUlWLE9BQU9DLFVBQVU7O1FBRW5DRSxNQUFNUSxHQUFHQyxPQUFPVCxNQUNiVSxNQUFNLFVBQUNDLEdBQUQ7VUFBQSxPQUFPQSxFQUFFRDtXQUNmRSxLQUFLOztRQUVSWCxNQUFNTyxHQUFHTixJQUFJRCxNQUNWWSxZQUFZZDs7UUFFZkcsTUFBTU0sR0FBR00sT0FBT2xCLFFBQVEsSUFDckJtQixPQUFPLE9BQ1BDLEtBQUssRUFBQ25CLE9BQU9BLE9BQU9DLFFBQVFBLFVBQzVCaUIsT0FBTyxLQUNQQyxLQUFLLGFBQWEsZUFBZW5CLFFBQVEsTUFBTSxNQUFNQyxTQUFTLE1BQU07O1FBRXZFSyxPQUFPRCxJQUFJZSxNQUFNeEIsTUFBTUMsTUFDcEJ3QixVQUFVLFFBQ1Z4QixLQUFLTSxLQUNMbUIsUUFDQUosT0FBTyxRQUVQQyxLQUFLO1VBQ0pJLE1BQU0sU0FBQSxLQUFDVCxHQUFHVSxHQUFKO1lBQUEsT0FBVTVCLE1BQU1DLEtBQU0yQixHQUFHQyxTQUFTLE1BQU1oQixLQUFLaUIsTUFBTWpCLEtBQUtrQixXQUFXLFVBQVVDLFNBQVM7O1VBQzVGZCxHQUFHVjs7O1FBR1BSLE1BQU1pQyxPQUNKLFFBQ0EsWUFBTTtVQUNKMUIsSUFBSVUsTUFBTSxVQUFDQyxHQUFEO1lBQUEsT0FBT0EsRUFBRUQ7O1VBQ25CUCxPQUFPQSxLQUFLVCxLQUFLTTtVQUNqQkcsS0FBS2EsS0FBSyxLQUFLZjtXQUVqQjs7OztLQXBEViIsImZpbGUiOiJkaXJlY3RpdmVzL3BpZS1jaGFydC5kaXJlY3RpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoKCkgPT4ge1xuICBcInVzZSBzdHJpY3RcIjtcbiAgYXBwLmRpcmVjdGl2ZShcInBpZUNoYXJ0XCIsICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgICAgcmVzdHJpY3Q6IFwiQVwiLFxuICAgICAgc2NvcGU6IHtcbiAgICAgICAgZGF0YTogXCI9XCJcbiAgICAgIH0sXG4gICAgICBsaW5rOiAoc2NvcGUsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgbGV0IHdpZHRoLFxuICAgICAgICAgIGhlaWdodCxcbiAgICAgICAgICByYWRpdXMsXG4gICAgICAgICAgcGllLFxuICAgICAgICAgIGFyYyxcbiAgICAgICAgICBzdmcsXG4gICAgICAgICAgcGF0aDtcblxuICAgICAgICB3aWR0aCA9IGVsZW1lbnRbMF0uY2xpZW50V2lkdGg7XG4gICAgICAgIGhlaWdodCA9IGVsZW1lbnRbMF0uY2xpZW50SGVpZ2h0O1xuICAgICAgICByYWRpdXMgPSBNYXRoLm1pbih3aWR0aCwgaGVpZ2h0KSAvIDI7XG5cbiAgICAgICAgcGllID0gZDMubGF5b3V0LnBpZSgpXG4gICAgICAgICAgLnZhbHVlKChkKSA9PiBkLnZhbHVlKVxuICAgICAgICAgIC5zb3J0KG51bGwpO1xuXG4gICAgICAgIGFyYyA9IGQzLnN2Zy5hcmMoKVxuICAgICAgICAgIC5vdXRlclJhZGl1cyhyYWRpdXMpO1xuXG4gICAgICAgIHN2ZyA9IGQzLnNlbGVjdChlbGVtZW50WzBdKVxuICAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAuYXR0cih7d2lkdGg6IHdpZHRoLCBoZWlnaHQ6IGhlaWdodH0pXG4gICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZShcIiArIHdpZHRoICogMC41ICsgXCIsXCIgKyBoZWlnaHQgKiAwLjUgKyBcIilcIik7XG5cbiAgICAgICAgcGF0aCA9IHN2Zy5kYXR1bShzY29wZS5kYXRhKVxuICAgICAgICAgIC5zZWxlY3RBbGwoXCJwYXRoXCIpXG4gICAgICAgICAgLmRhdGEocGllKVxuICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgLmFwcGVuZChcInBhdGhcIilcblxuICAgICAgICAgIC5hdHRyKHtcbiAgICAgICAgICAgIGZpbGw6IChkLCBpKSA9PiBzY29wZS5kYXRhIFtpXS5jb2xvciB8fCAnIycgKyBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxNjc3NzIxNSkudG9TdHJpbmcoMTYpLFxuICAgICAgICAgICAgZDogYXJjXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgc2NvcGUuJHdhdGNoKFxuICAgICAgICAgIFwiZGF0YVwiLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIHBpZS52YWx1ZSgoZCkgPT4gZC52YWx1ZSk7XG4gICAgICAgICAgICBwYXRoID0gcGF0aC5kYXRhKHBpZSk7XG4gICAgICAgICAgICBwYXRoLmF0dHIoXCJkXCIsIGFyYyk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcbiAgfSlcbn0pKCk7Il0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9

'use strict';

(function () {
  "use strict";
  /**@ngInject*/

  app.factory('UsersFactory', function () {
    return [{
      id: 1,
      name: 'John Doe',
      age: 25,
      skill: 'Javascript',
      level: 1
    }, {
      id: 2,
      name: 'John Doe',
      age: 31,
      skill: 'Python',
      level: 2
    }, {
      id: 3,
      name: 'John Doe',
      age: 19,
      skill: 'Javascript',
      level: 3
    }, {
      id: 4,
      name: 'John Doe',
      age: 40,
      skill: 'C++',
      level: 1
    }, {
      id: 5,
      name: 'John Doe',
      age: 31,
      skill: 'Java',
      level: 2
    }];
  });
})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlcnZpY2VzL3VzZXJzLmZhY3RvcnkuanMiXSwibmFtZXMiOlsiYXBwIiwiZmFjdG9yeSIsImlkIiwibmFtZSIsImFnZSIsInNraWxsIiwibGV2ZWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUFBLENBQUMsWUFBTTtFQUNMOzs7RUFHQUEsSUFBSUMsUUFBUSxnQkFBZ0IsWUFBQTtJQUFBLE9BQU0sQ0FDOUI7TUFDRUMsSUFBSTtNQUNKQyxNQUFNO01BQ05DLEtBQUs7TUFDTEMsT0FBTztNQUNQQyxPQUFPO09BRVQ7TUFDRUosSUFBSTtNQUNKQyxNQUFNO01BQ05DLEtBQUs7TUFDTEMsT0FBTztNQUNQQyxPQUFPO09BRVQ7TUFDRUosSUFBSTtNQUNKQyxNQUFNO01BQ05DLEtBQUs7TUFDTEMsT0FBTztNQUNQQyxPQUFPO09BRVQ7TUFDRUosSUFBSTtNQUNKQyxNQUFNO01BQ05DLEtBQUs7TUFDTEMsT0FBTztNQUNQQyxPQUFPO09BRVQ7TUFDRUosSUFBSTtNQUNKQyxNQUFNO01BQ05DLEtBQUs7TUFDTEMsT0FBTztNQUNQQyxPQUFPOzs7S0F0Q2YiLCJmaWxlIjoic2VydmljZXMvdXNlcnMuZmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIigoKSA9PiB7XG4gIFwidXNlIHN0cmljdFwiO1xuICAvKipAbmdJbmplY3QqL1xuXG4gIGFwcC5mYWN0b3J5KCdVc2Vyc0ZhY3RvcnknLCAoKSA9PiBbXG4gICAgICB7XG4gICAgICAgIGlkOiAxLFxuICAgICAgICBuYW1lOiAnSm9obiBEb2UnLFxuICAgICAgICBhZ2U6IDI1LFxuICAgICAgICBza2lsbDogJ0phdmFzY3JpcHQnLFxuICAgICAgICBsZXZlbDogMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDIsXG4gICAgICAgIG5hbWU6ICdKb2huIERvZScsXG4gICAgICAgIGFnZTogMzEsXG4gICAgICAgIHNraWxsOiAnUHl0aG9uJyxcbiAgICAgICAgbGV2ZWw6IDJcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiAnSm9obiBEb2UnLFxuICAgICAgICBhZ2U6IDE5LFxuICAgICAgICBza2lsbDogJ0phdmFzY3JpcHQnLFxuICAgICAgICBsZXZlbDogM1xuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDQsXG4gICAgICAgIG5hbWU6ICdKb2huIERvZScsXG4gICAgICAgIGFnZTogNDAsXG4gICAgICAgIHNraWxsOiAnQysrJyxcbiAgICAgICAgbGV2ZWw6IDFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiA1LFxuICAgICAgICBuYW1lOiAnSm9obiBEb2UnLFxuICAgICAgICBhZ2U6IDMxLFxuICAgICAgICBza2lsbDogJ0phdmEnLFxuICAgICAgICBsZXZlbDogMlxuICAgICAgfVxuICAgIF1cbiAgKTtcblxufSkoKTsiXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
