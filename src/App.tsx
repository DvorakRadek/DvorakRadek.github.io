import { useState } from "react";
import Products from "./components/Products";
import UserForm from "./components/UserForm";

const App = () => {
  const [total, setTotal] = useState<number>(0);

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <Products setTotal={setTotal} />
        </div>
        <div className="md:w-1/2">
          <UserForm total={total} />
        </div>
      </div>
    </div>
  );
};

export default App;