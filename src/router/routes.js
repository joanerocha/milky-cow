import LayoutDefault from "../layouts/default";
import PageIndex from "../pages/index";
import FourOhFour from "../pages/404";
import AddAnimal from "../pages/AddAnimal";
import InsertData from "../pages/InsertData";

export default [
  {
    path: "/",
    component: LayoutDefault, // () => import('../layouts/default'),
    children: [
      { path: "", component: PageIndex /* () => import('../pages/index') */ },
      { path: "add-animal/:number?", component: AddAnimal },
      { path: "insert-data", component: InsertData }
    ]
  },

  {
    // Always leave this as last one
    path: "*",
    component: FourOhFour // () => import('../pages/404')
  }
];
