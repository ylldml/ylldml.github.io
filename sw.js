/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/09/28/hello-world/index.html","b9645b9979abcdab537876d4fb463587"],["/2022/10/01/C/index.html","75eff8f7ee517a9893565cb73df7194c"],["/2022/10/01/git/index.html","fd7a6548348804ba69cdf3b3a6f58469"],["/2022/10/07/employment/index.html","cde15619fca7b17ffb9e6b2de4804da2"],["/2022/11/04/AndroidStudio/index.html","2bc227978037173bac0626d9dcaff92e"],["/2022/11/05/MM32/index.html","6538538827b0f05be4b8ff3f6aee7151"],["/2022/11/09/dailyQuestions/index.html","e1203ed215a758e3b05e0f8712e21720"],["/2022/11/09/graduationProject/index.html","6c2d35610f95e06cfb69163ebb3dd7c8"],["/2022/11/09/nonviolentCommunication/index.html","bccbcee6d9dd6d49813c971305ebcb3c"],["/2022/11/14/DA14531/index.html","28bcf7f8dfa9dda102fe3d4bcc2871f1"],["/2023/06/24/HEXO/index.html","52a12e499c1d075317209ac534db5be8"],["/archives/2022/09/index.html","62789caf3116c3e01ed5a8068d9ab4a2"],["/archives/2022/10/index.html","ad2d424e280fa5cff2994aa97f60e87a"],["/archives/2022/11/index.html","ddea0fd08cda74ed464ad4e1037ac5bc"],["/archives/2022/index.html","a0c02d711ec2526fcde0c8eb81303557"],["/archives/2023/06/index.html","5c6247b2548ea41f77e8a008f134c32d"],["/archives/2023/index.html","e09df1149f4d6eb1ac40362ae3e64db3"],["/archives/index.html","de7827f1d5f2743e2649a384b8b854bc"],["/archives/page/2/index.html","67fdcb41b10a6fae4445f8739134438c"],["/categories/index.html","5fe570e70cc8b0612a2147300c17ee4b"],["/categories/博客/index.html","740da2c39e4bf9264f8be5cecec3669d"],["/categories/必备技能/index.html","7f6df1c82c4d1c42461006bc2c393c0a"],["/categories/毕业设计/index.html","640f83a8e1f9cad2b43e14f9120ddbb8"],["/categories/毕业设计/实习课题/index.html","5d2de4954087a57bb725bb6641ef22ed"],["/categories/简历进度/index.html","518ee2f79ea11500697a495661bafa38"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","d94e781b40f934a0caa40a03df762c83"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/images/AndroidStudio/image-20221104201749811.png","3f8cab1216b65f9586919af51c543816"],["/images/Bload_environment/image-20230524141904143.png","da94ef40b566837d028c6e35fe56e85c"],["/images/C/image-20221001182939891.png","a233727c666af19e83186bf63ed800ec"],["/images/C/image-20221001183944123.png","8d5997a434321f0a685d7d7c5e226186"],["/images/C/image-20221001184130592.png","543ad7807d5bf771f7dd8d9b0dc99714"],["/images/DA14531/image-20221115151958095.png","3c432f56f411a09bff4e85133965035f"],["/images/DA14531/image-20221118100910534.png","ecf3fb765a3e332598a1a5f52c4db6f0"],["/images/DA14531/image-20221118101328908.png","9c2b3dc197f27d637476a38c7cbb7784"],["/images/DA14531/image-20221118101532712.png","3cf40ea0f28116cf09ff23d0eb20b468"],["/images/DA14531/image-20221118101732644.png","208d7d0018e4d6800e5e47cacf2e9d32"],["/images/DA14531/image-20221118101916421.png","e439973ebd2e58e072fbfb0b39558bc7"],["/images/DA14531/image-20221118101952099.png","681d6e80062f56c96fb17ee5c534527d"],["/images/DA14531/image-20221118102203358.png","74cda03c5aaf36b2d3a7105e04a3dfad"],["/images/DA14531/image-20221118102242851.png","57289af3784004a2521a757c71bcb632"],["/images/ML302/image-20230604192124816.png","62a5604a10ffcc6ee7834881f5634c49"],["/images/ML302/image-20230604192143836.png","d1eb50870eb3a5142d6f6ff9504dbb3d"],["/images/ML302/image-20230604192219560.png","2953ca1e68048d60f9dfb3e2079c8361"],["/images/ML302/image-20230604192230458.png","96fbedd127f1fb57f35e825b35386726"],["/images/ML302/image-20230604192239471.png","bf7c24046be54ef88be5a282f9db0e8d"],["/images/ML302/image-20230604192247333.png","18fb99bda8b5c524f7ff0f578a94a018"],["/images/ML302/image-20230604192256279.png","8dac0f7de6423e320d90c3a277b393ad"],["/images/ML302/image-20230604192304025.png","61ef3cc5513bbf82957a86bc50ada679"],["/images/ML302/image-20230604192313652.png","0224d7a4ce4d2565775f4dceedc15101"],["/images/ML302/image-20230604192321926.png","7732da48f1e169724a31dcdb1a4fd29a"],["/images/ML302/image-20230604192329625.png","8ff450e5eaa460323cc00f6737d6a4d0"],["/images/ML302/image-20230604192337382.png","0f78c8e1e96b68fc77ad311965742d21"],["/images/ML302/image-20230604192344831.png","ff2347094614dd39b924b7c4c0e836e3"],["/images/ML302/image-20230604192400394.png","d1dd9acf5b3252b321407958de12e2f7"],["/images/ML302/image-20230604192414845.png","7979457fcfa3259f533ce0d701f866d9"],["/images/ML302/image-20230604192728953.png","9a48b5785f63d53ac8991a8ccb523fe6"],["/images/ML302/image-20230604192819235.png","723bfb8a290dc05f554fb74e6e618408"],["/images/MM32/image-20221105111903763.png","18454daf86941d7a186744bec9b55b0f"],["/images/MM32/image-20221105112408038.png","783206cef24763a6c221adeb0a6f5258"],["/images/MM32/image-20221105112555464.png","20c47a25e818893a50d2b1a3bbe404a3"],["/images/MM32/image-20221105112622920.png","3b04aeba12c73ba15b3a2568d711e734"],["/images/MM32/image-20221105112637897.png","2cb40d3dacb650a6a3ab79a851bd6d8c"],["/images/MM32/image-20221105112855587.png","6ed1e06712c0b65110844cfc121813f5"],["/images/MM32/image-20221105112935321.png","e9253c55e65f249248850b043b0e5f73"],["/images/MM32/image-20221105113026660.png","1ef5ea318ef39aaedb5b41996d61536b"],["/images/MM32/image-20221106104932866.png","3bc484dd53fc226ad4b90e110e22f56f"],["/images/MST/image-20221109191204173.png","16fba689fb1f2f519d3e1a52bb0360ea"],["/images/MST/image-20221109191330314.png","fb9108ee05d4df0b6590d93a73ebea21"],["/images/nonviolentCommunication/image-20221109180924610.png","d4fcb3f65085f184c9c6e5946b3965c8"],["/images/nonviolentCommunication/image-20221109181040480.png","946f9fea7adffa6adc70b978cd758212"],["/images/nonviolentCommunication/image-20221109181147386.png","fd6009a96debd22e1c75bcff00be777b"],["/images/nonviolentCommunication/image-20221109181241993.png","fef33fcb5dc91860a458c1764b0aeb10"],["/images/nonviolentCommunication/image-20221109181345557.png","f380cabbd27d0a104941184bc4f782f2"],["/images/nonviolentCommunication/image-20221109182224209.png","a8249834c1db89d67faf3d0d5f5797ef"],["/images/nonviolentCommunication/image-20221109182617469.png","0e340740389901bc37d7a80393d81378"],["/images/nonviolentCommunication/image-20221109182824462.png","34b48ec14332cf32dbdce1b582231186"],["/images/nonviolentCommunication/image-20221109182853448.png","1728cdf46dfc6cffe533590f2198858a"],["/images/nonviolentCommunication/image-20221109182917551.png","44d20437ea867f9d70e7ea07b1884422"],["/images/nonviolentCommunication/image-20221109183151886.png","6449bdf500bb997fb233fed0e48817c9"],["/images/nonviolentCommunication/image-20221109184143881.png","b7324d0578cdfd4059c125c15030e3fa"],["/images/nonviolentCommunication/image-20221109184415544.png","5caee42a1d6ad755869b3b9d6aef94e3"],["/images/nonviolentCommunication/image-20221109184650420.png","f6784eccdeecb7cf30dd9659df3ee708"],["/images/nonviolentCommunication/image-20221109184904471.png","5b6277ae70ec81f413f783e54c27fe5f"],["/images/nonviolentCommunication/image-20221109185205453.png","09f5b86ceae755f93c097e64f749e286"],["/images/nonviolentCommunication/image-20221109185225834.png","75f94ccfc250a0b4628a319b52ca2a4c"],["/images/nonviolentCommunication/image-20221109185443844.png","d9a5aefb0b63d581d159d0710ec78ea0"],["/images/nonviolentCommunication/image-20221109185742123.png","c1b59353111f16c0cbf6a2db904279b0"],["/images/pcbTwo/image-20221102130912232.png","cbc20cca959531a7779a1e9cbba41989"],["/images/学习记录/image-20221015094730849.png","ef51d6675e9c84f5c18c9b95226625c5"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/favicon.png","7a8c47cb5a2149c1a1af21e90ecd9ca7"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/imgs/1.jpg","23d9dfec9273cd4101e639d169dd6d3f"],["/imgs/2.jpg","2d43102a03517aece1bffc78a5cad912"],["/imgs/3.jpg","a1b9d8b38291b0e08331d88c2d75a2c5"],["/imgs/4.jpg","27362bfaab687b18bc2eeee4882b9fd3"],["/imgs/5.jpg","97330475e8b98ee3e3e6349f8c2bd197"],["/imgs/6.jpg","2a6cf944ca3b0d2c78e15144d7edee07"],["/imgs/androidImage.png","4d38186d0449c6dbd2b0e2598f73f3f3"],["/imgs/favicon.svg","676f123b239391045b01511e9e06f4e2"],["/imgs/touxiang.jpg","d9f60d636371a898d452a131832413b5"],["/index.html","31c416d6adcce54fba02789c21c83017"],["/js/main.js","73e1a92da3a39646678bffb9e7817148"],["/js/search/algolia.js","308de383b932f321e04751fd1f79cffb"],["/js/search/local-search.js","149fcc60c1de0a818e111978d01cbd87"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","24971090b8b1bd5d3f538d414e270fd3"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/link/index.html","fd9e434a782ee2ec1f2819d29781337e"],["/page/2/index.html","b4cc613c5aafa5356425c46b5397e1b2"],["/photos/index.html","bd566f87e4f8c06634d6c0919442c25e"],["/sw-register.js","ea8fd4ed459839bfaad2d4d8eeea767e"],["/tags/E104-BT52/index.html","01fbe637845cc3a804a5ece4184dc27f"],["/tags/git/index.html","262fc7cd33885f578abd0259d5068da8"],["/tags/index.html","81a62ef0dac567782cfb0b3b634a1c88"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
