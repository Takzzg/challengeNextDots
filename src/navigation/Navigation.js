import { NavigationActions, StackActions } from 'react-navigation';

let navigator = null;

export function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

export function goToPage(routeName, params) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    }),
  );
}

export function initApp(routeName, params) {
  goToPage(routeName, params);
  resetStack(routeName, params);
}

export function resetStack(routeName, params) {
  navigator.dispatch(
    StackActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({
          routeName,
          params,
        }),
      ],
    }),
  );
}

export function goBack(key) {
  navigator.dispatch(NavigationActions.back({ key }));
}

export default {
  setTopLevelNavigator,
  goToPage,
  goBack,
  initApp,
  resetStack,
};
