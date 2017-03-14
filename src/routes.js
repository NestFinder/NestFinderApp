import LoginVue from "./components/Login.vue";
import HeaderVue from "./components/header.vue";
import FooterVue from "./components/footer.vue";
import FirstPageVue from "./components/firstpage.vue";
import ListAProperty from "./components/ListAProperty.vue";
import PropertyDetails from "./components/PropertyDetails.vue";
import NotFoundVue from "./components/404.vue";


const routes = [
    {
        path : "/login",
       component:LoginVue,
        /* components : {
            default: LoginVue,
            headerView : HeaderVue,
            footerView : FooterVue
        },*/
        auth:false
    },
    {
        path : "",
        component:LoginVue,
        auth:false
    },
    {
        path: "/firstpage",
        component:FirstPageVue,
        auth:true
    },
    {
        path: "/listaproperty",
        component:ListAProperty,
        auth:true
    },
    {
        path: "/morepropertydetail",
        component:PropertyDetails,
        auth:true
    },
    {
        path:"*",
        component:NotFoundVue,
        auth:false
    }
];

export default routes;