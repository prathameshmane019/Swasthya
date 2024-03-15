'use client'
import React, { useState } from 'react';
import DefaultLayout from "../../../componants/Admin/DefaultLayout"
import DoctorTable from "../../../componants/Table/table"

function ExampleComponent() {

  return (
    <div>
      <DefaultLayout>
          <DoctorTable></DoctorTable>
      </DefaultLayout>
    </div>
  );
}

export default ExampleComponent;
