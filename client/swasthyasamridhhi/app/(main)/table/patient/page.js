'use client'
import React, { useState } from 'react';
import DefaultLayout from "../../../componants/Admin/DefaultLayout"
import PatientTable from "../../../componants/Table/table"

function ExampleComponent() {

  return (
    <div>
      <DefaultLayout>
          <PatientTable></PatientTable>
      </DefaultLayout>
    </div>
  );
}

export default ExampleComponent;
