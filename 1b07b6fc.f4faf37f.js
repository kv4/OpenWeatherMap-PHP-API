(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{125:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),o=(n(0),n(142)),i={title:"Ultraviolet Index API",sidebar_label:"API: Ultraviolet Index"},c={id:"apis/uv-index",title:"Ultraviolet Index API",description:"This API allows you to retrieve the current, forecast and historic ultraviolet index (UV index).",source:"@site/docs/apis/uv-index.md",permalink:"/OpenWeatherMap-PHP-API/docs/apis/uv-index",editUrl:"https://github.com/cmfcmf/OpenWeatherMap-PHP-API/edit/master/docs/docs/apis/uv-index.md",lastUpdatedBy:"Christian Flach",lastUpdatedAt:1579095443,sidebar_label:"API: Ultraviolet Index",sidebar:"someSidebar",previous:{title:"Air Pollution API",permalink:"/OpenWeatherMap-PHP-API/docs/apis/air-pollution"}},l=[{value:"Current UV index",id:"current-uv-index",children:[{value:"Example",id:"example",children:[]}]},{value:"Forecast UV index",id:"forecast-uv-index",children:[{value:"Example",id:"example-1",children:[]}]},{value:"Historic UV index",id:"historic-uv-index",children:[{value:"Example",id:"example-2",children:[]}]}],u={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This API allows you to retrieve the current, forecast and historic ultraviolet index (UV index)."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://openweathermap.org/api/uvi"}),"Corresponding OpenWeatherMap Documentation"))),Object(o.b)("h2",{id:"current-uv-index"},"Current UV index"),Object(o.b)("p",null,"You can retrieve the current UV index by latitude and longitude. The response includes\nthe time, location and UV index value."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"$uvIndex = $owm->getCurrentUVIndex($lat, $lon);\n")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"Get the current UV index in Berlin."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),'$uvIndex = $owm->getCurrentUVIndex(52.520008, 13.404954);\necho "Current UV index: $uvIndex->uvIndex";\n')),Object(o.b)("h2",{id:"forecast-uv-index"},"Forecast UV index"),Object(o.b)("p",null,"You can retrieve a UV index forecast for up to 8 days. The return value is an\narray of ",Object(o.b)("inlineCode",{parentName:"p"},"UVIndex")," objects."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"$uvForecast = $owm->getForecastUVIndex($lat, $lon, $cnt = 8)\n")),Object(o.b)("h3",{id:"example-1"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"$forecast = $owm->getForecastUVIndex(52.520008, 13.404954);\nforeach ($forecast as $day) {\n    echo \"{$day->time->format('r')} will have an uv index of: $day->uvIndex\";\n}\n")),Object(o.b)("h2",{id:"historic-uv-index"},"Historic UV index"),Object(o.b)("p",null,"You can retrieve daily historic UV index data starting in June 2017."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"$history = $owm->getHistoricUVIndex($lat, $lon, $from, $to);\n")),Object(o.b)("h3",{id:"example-2"},"Example"),Object(o.b)("p",null,"Retrieve one month of four month old historic UV data of Berlin."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-php"}),"$history = $owm->getHistoricUVIndex(52.520008, 13.404954,\n                                    new DateTime('-4month'),\n                                    new DateTime('-3month'));\nforeach ($history as $day) {\n    echo \"{$day->time->format('r')} had an uv index of: $day->uvIndex\";\n}\n")))}p.isMDXComponent=!0},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},d=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),b=r,m=d["".concat(i,".").concat(b)]||d[b]||s[b]||o;return n?a.a.createElement(m,c({ref:t},u,{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);