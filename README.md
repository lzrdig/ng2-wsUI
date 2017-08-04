# ng2-wsUI
Angular2 client side UI for weather station

The intent is to show two ways of loading are supportedL SystemJS and Webpack.
Currently, the use of SystemJS loader has been implemented and tested.

Webpack loading has some differences that "clash" with the way that systemjs is working.

For example, spcifying moduleId for components is helpful for SystemJS for path location. Webpack does it automatically.
