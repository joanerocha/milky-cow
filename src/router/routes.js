import LayoutDefault from "../layouts/default";
import PageIndex from "../pages/index";
import FourOhFour from "../pages/404";
import AddAnimal from "../pages/AddAnimal";
import InsertData from "../pages/InsertData";
import Record from "../pages/Record";
import Table from "../pages/table";

export default [
  {
    path: "/",
    component: LayoutDefault, // () => import('../layouts/default'),
    children: [
      {
        path: "insert-chart",
        component: PageIndex /* () => import('../pages/index') */
      },
      { path: "add-animal/:number?", component: AddAnimal },
      { path: "insert-data", component: InsertData },
      { path: "record", component: Record },
      { path: "table", component: Table }
    ]
  },

  {
    // Always leave this as last one
    path: "*",
    component: FourOhFour // () => import('../pages/404')
  }
];
