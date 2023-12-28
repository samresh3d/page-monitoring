import React from "react";
import IndicatorComponent from "./IndicatorComponent";
import { useState } from "react";
import Last28DaysDataTooltip from "./Last28DaysDataTooltip";

const DetailsComponent = ({
  url,
  fcp,
  lcp,
  tbt,
  cls,
  requestTime,
  performance,
  accessibility,
  seo,
  bestPractice,
  data28Days,
}) => {
  const [showLast28DaysData, setShowLast28DaysData] = useState(false);

  const handleShowDataToggle = () => {
    setShowLast28DaysData(!showLast28DaysData);
  };

  return (
    <div className="mx-auto w-full max-w-6xl flex-1">
      <div className="mt-[-28px]">
        <div className="mb-2 w-full border-b pb-2">
          <div className="mt-8">
            <div className="flex w-full justify-between leading-7">
              <dl className="mt-2 flex w-full justify-between px-5	">
                <div className="overflow-hidden sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-800">URL</dt>
                  <dd className="block w-full truncate text-sm text-gray-600">
                    {url}
                  </dd>
                </div>
                <div className="hidden md:block"></div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-800">
                    Request Time
                  </dt>
                  <dd className="text-sm text-gray-600">
                    <span>
                      <span>{requestTime}</span>
                    </span>
                  </dd>
                </div>
                <div className="sm:col-span-1">
                  <dt className="text-sm font-medium text-gray-800">
                    <img
                      className=" top-0 right-0  cursor-pointer"
                      onMouseOver={handleShowDataToggle}
                      onMouseOut={handleShowDataToggle}
                      alt="28 Days report"
                      loading="lazy"
                      width="25"
                      height="12"
                      decoding="async"
                      data-nimg="1"
                      src="/calander.svg"
                    ></img>
                  </dt>
                  <dd className=" relative text-sm text-gray-600">
                    {showLast28DaysData && (
                      <Last28DaysDataTooltip data28Days={data28Days} />
                    )}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-[0.5rem,auto,3.5rem,3.5rem,3.5rem,3.5rem,3.5rem,5rem,42px,42px,42px,42px,42px,1.25rem] items-center justify-items-stretch gap-4 px-4 py-2 text-xs font-medium text-gray-500">
        <div></div>
        <div></div>
        <div className="flex items-center place-self-center">
          <div className="flex items-center place-self-center">FCP</div>
        </div>
        <div className="flex items-center place-self-center">
          <div className="flex items-center place-self-center">LCP</div>
        </div>
        <div className="flex items-center place-self-center">
          <div className="flex items-center place-self-center">TBT</div>
        </div>
        <div className="flex items-center place-self-center">
          <div className="flex items-center place-self-center">CLS</div>
        </div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div className="space-y-4">
        <a
          className="block"
          href="/app/maxlifeinsurance/measure/bf76b5bc-5b84-42fc-be5b-6857d20918c7/runs/1510b2ac-2f35-4344-83dd-feef64ad0be9"
        >
          <div className="group grid grid-cols-[0.5rem,auto,3.5rem,3.5rem,3.5rem,3.5rem,3.5rem,5rem,42px,42px,42px,42px,42px,1.25rem] items-center justify-items-stretch gap-4 rounded-md border border-gray-100 shadow-sm py-3 px-4 duration-150 ease-in-out hover:bg-gray-50/50">
            <div className="flex h-2 w-2 flex-shrink-0 rounded-full bg-green-400"></div>
            <div className="flex items-center font-medium">
              <div>
                <div className="flex items-center space-x-2">
                  <div className="flex-shrink-0 bg-gray-100/50 drop-shadow-md">
                    <img
                      alt="Flag for India"
                      loading="lazy"
                      width="16"
                      height="12"
                      decoding="async"
                      data-nimg="1"
                      className="rounded-sm"
                      src="/flag.svg"
                      style={{
                        color: "transparent",
                        height: "13.5px",
                        width: "17.7188px",
                      }}
                    ></img>
                  </div>
                  <span className="whitespace-nowrap text-sm">India</span>
                </div>
              </div>
            </div>
            <div className="place-self-center text-sm tracking-wider">
              {fcp}
            </div>
            <div className="place-self-center text-sm tracking-wider">
              {lcp}
            </div>
            <div className="place-self-center text-sm tracking-wider">
              {tbt}
            </div>
            <div className="place-self-center text-sm tracking-wider">
              {cls}
            </div>
            <div></div>
            <IndicatorComponent type="performance" value={performance} />
            <IndicatorComponent type="accessibility" value={accessibility} />
            <IndicatorComponent type="seo" value={seo} />
            <IndicatorComponent type="bestPractice" value={bestPractice} />
          </div>
        </a>
      </div>
    </div>
  );
};

export default DetailsComponent;
