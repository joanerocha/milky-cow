import LayoutDefault from "../layouts/default";
import PageIndex from "../pages/indext";
import FourOhFour from "../pages/404";
import AddAnimal from "../pages/AddAnimal";
import InsertData from "../pages/InsertData";
import Record from "../pages/Record";
import Table from "../pages/table";

export default [
  {
    path: "/",
    component: LayoutDefault,
    children: [
      { path: "", component: PageIndex },
      { path: "add-animal/:number?", component: AddAnimal },
      { path: "insert-data/:number?", component: InsertData },
      { path: "record", component: Record },
      { path: "table", component: Table }
    ]
  },
  {
    path: "*",
    component: PageIndex // () => import('../pages/404')
  }
];
