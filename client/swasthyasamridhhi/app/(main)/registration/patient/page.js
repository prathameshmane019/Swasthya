'use client'
import React, { useState } from 'react';
import DefaultLayout from "../../../componants/Admin/DefaultLayout"
import PateintReg from "../../../componants/Admin/pateintregister"

function ExampleComponent() {

  return (
    <div>
      <DefaultLayout>
          <PateintReg type="Pateint"></PateintReg>
      </DefaultLayout>
    </div>
  );
}

export default ExampleComponent;
