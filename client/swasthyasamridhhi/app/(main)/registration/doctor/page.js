'use client'
import React, { useState } from 'react';
import DefaultLayout from "../../../componants/Admin/DefaultLayout"
import DocotrReg from "../../../componants/Admin/doctorregister"

function ExampleComponent() {

  return (
    <div>
      <DefaultLayout>
          <DocotrReg></DocotrReg>
      </DefaultLayout>
    </div>
  );
}

export default ExampleComponent;
