import startsWith from 'underscore.string/startsWith';
import template from './settings-screen.html';

export default function init(ngModule) {
  ngModule.directive('settingsScreen', $location => ({
    restrict: 'E',
    transclude: true,
    template,
    controller($scope, currentUser) {
      $scope.usersPage = startsWith($location.path(), '/users');
      $scope.groupsPage = startsWith($location.path(), '/groups');
      $scope.dsPage = startsWith($location.path(), '/data_sources');
      $scope.destinationsPage = startsWith($location.path(), '/destinations');
      $scope.snippetsPage = startsWith($location.path(), '/query_snippets');

      $scope.showGroupsLink = currentUser.hasPermission('admin');
      $scope.showUsersLink = currentUser.hasPermission('admin');
      $scope.showDsLink = currentUser.hasPermission('admin');
      $scope.showDestinationsLink = currentUser.hasPermission('admin');
      $scope.showQuerySnippetsLink = currentUser.hasPermission('create_query');
    },
  }));
}
