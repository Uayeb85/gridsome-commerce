const c1 = () => import(/* webpackChunkName: "page--src--pages--store-vue" */ "/home/uayeb/Escritorio/gridcommerce/src/pages/Store.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--product-vue" */ "/home/uayeb/Escritorio/gridcommerce/src/templates/Product.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/uayeb/Escritorio/gridcommerce/src/pages/About.vue")
const c4 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/uayeb/Escritorio/gridcommerce/node_modules/gridsome/app/pages/404.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/uayeb/Escritorio/gridcommerce/src/pages/Index.vue")

export default [
  {
    path: "/store/:page(\\d+)?/",
    component: c1
  },
  {
    path: "/products/:title/",
    component: c2
  },
  {
    path: "/about/",
    component: c3
  },
  {
    name: "404",
    path: "/404/",
    component: c4
  },
  {
    name: "home",
    path: "/",
    component: c5
  },
  {
    name: "*",
    path: "*",
    component: c4
  }
]
