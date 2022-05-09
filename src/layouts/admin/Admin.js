import Sidebar from "../../components/Sidebar/Sidebar";

const AdminLayout = ({ children }) => {
  return (
    <>
      <div>
        <Sidebar />
      </div>
      <main>{children}</main>
    </>
  );
};
export default AdminLayout;
