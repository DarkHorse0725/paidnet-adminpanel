import Header from "./Header";
import Sidebar from "./Sidebar";


const AdminLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <div className="w-screen h-screen flex lg:flex-row flex-col gap-4 p-4">
      <Sidebar />
      <div className="flex flex-col gap-4 w-full">
        <Header />
        <div className="bg-paper h-full rounded-xl flex-1">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;