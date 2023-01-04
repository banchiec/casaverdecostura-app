import { ContainerAdminPage } from "./AdminStyled";
import RegisterProductScreen from "./screen/registerProduct/RegisterProductScreen";
import RegisterBlogScreen from "./screen/registerProduct/RegisterBlogScreen";
import Sidebar from "../../components/Sidebar/Sidebar";

const Admin = () => {
  return (
    <>
      <ContainerAdminPage>
        <Sidebar />
        <RegisterProductScreen />
      </ContainerAdminPage>
    </>
  );
};
export default Admin;
