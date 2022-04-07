import Sidebar from "../../components/Sidebar/Sidebar";

const AdminLayout = ({ children }) => {
  console.log(children);

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
