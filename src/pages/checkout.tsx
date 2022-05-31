import React, { useState } from "react";
import Image from "next/image";
import LineProgress from "../components/widget/line-progress";
import CheckoutAddressForm from "../components/pages/checkout-address-form";
import CheckoutOverview from "../components/pages/checkout-overview";
import CheckoutService from "../components/pages/checkout-service";
import CheckoutConfirmation from "../components/pages/checkout-confirmation";

const CheckOut = () => {

  const [stepIndex, setStepIndex] = useState<any>(2);
  
  return (
    <div className="h-full py-7 bg-white dark:bg-gray-900">
      <div className="container max-w-none md:layout-px-1 lg:layout-px-2 xl:layout-px-3">
        <div className="row g-1 mb-5">
          <div className="sm:col-12 md:col-8">
            <h2 className="f-size-lg lg:f-size-xl font-medium">Check Out</h2>
          </div>
          <div className="sm:col-12 md:col-4"></div>
        </div>
        <div className="row g-1 mb-5">
          <div className="sm:col-12 md:col-8">
            <LineProgress 
              onClickStep={(sIdx: any) => setStepIndex(sIdx)}
              stepIndex={stepIndex}
            />
            { stepIndex === 1 ? <CheckoutAddressForm /> : null }
            { stepIndex === 2 ? <CheckoutService /> : null }
            { stepIndex === 3 ? <CheckoutConfirmation /> : null }
          </div>
          <div className="sm:col-12 md:col-4">
            <CheckoutOverview />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
