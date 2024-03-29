import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { MorList } from "./mor/MorList";
import { MorCreate } from "./mor/MorCreate";
import { MorEdit } from "./mor/MorEdit";
import { MorShow } from "./mor/MorShow";
import { AmitList } from "./amit/AmitList";
import { AmitCreate } from "./amit/AmitCreate";
import { AmitEdit } from "./amit/AmitEdit";
import { AmitShow } from "./amit/AmitShow";
import { YuvalList } from "./yuval/YuvalList";
import { YuvalCreate } from "./yuval/YuvalCreate";
import { YuvalEdit } from "./yuval/YuvalEdit";
import { YuvalShow } from "./yuval/YuvalShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"last-version-auth"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Mor"
          list={MorList}
          edit={MorEdit}
          create={MorCreate}
          show={MorShow}
        />
        <Resource
          name="Amit"
          list={AmitList}
          edit={AmitEdit}
          create={AmitCreate}
          show={AmitShow}
        />
        <Resource
          name="Yuval"
          list={YuvalList}
          edit={YuvalEdit}
          create={YuvalCreate}
          show={YuvalShow}
        />
      </Admin>
    </div>
  );
};

export default App;
