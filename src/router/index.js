import App from '../App.vue'
import home from '../page/home/index.vue'
import item from '../page/item/index.vue'
import score from '../page/score/index.vue'

const routes = [{
        path: '/',
        component: App,
        children: [{
                path: '',
                component: home
            },
            {
              path:'/item',
              component:item
            },
            {
              path:'/score',
              component:score
            }

        ]



    }


];
export default routes;
