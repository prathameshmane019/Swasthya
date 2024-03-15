
import DefaultLayout from "../../../componants/Admin/DefaultLayout"
import PateintReg from "../../../componants/Admin/pateintregister"

function ExampleComponent() {

  return (
    <div>
      <DefaultLayout>
          <PateintReg type="Patient"></PateintReg>
      </DefaultLayout>
    </div>
  );
}

export default ExampleComponent;
